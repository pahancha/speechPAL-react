import React, { useState, useContext } from 'react';
import './SpeechRecognitionButton.css';
import TranscribedText from './TranscribedText';
import { TranscribedTextContext } from '../TranscribedTextContext';

function SpeechRecognitionButton(props) {
  const [isRecording, setIsRecording] = useState(false);
  // const [transcribedText, setTranscribedText] = useState("");
  const [transcribing, setTranscribing] = useState(false);
  const [transcribedTextLoaded, setTranscribedTextLoaded] = useState(false);
  // recording related
  const [audioStream, setAudioStream] = useState(null);
  const [recordedData, setRecordedData] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  // context api related
  const { setTranscribedText } = useContext(TranscribedTextContext);


  const handleStartRecording = () => {
    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);
      recorder.start();

      setMediaRecorder(recorder);
      setAudioStream(stream);

      const chunks = [];
      recorder.addEventListener("dataavailable", (event) => {
        chunks.push(event.data);
      });

      recorder.addEventListener("stop", () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        setRecordedData(blob);
        setAudioStream(null);
      });
    });
  };

  const handleStopRecording = async () => {
    setIsRecording(false);
    console.log("Recording stopped.");

    if (audioStream) {
      audioStream.getTracks().forEach((track) => {
        track.stop();
      });

      if (mediaRecorder) {
        mediaRecorder.ondataavailable = (e) => {
          const blob = e.data;
          const formData = new FormData();
          formData.append("audio", blob, "recording.wav");
          formData.append("choice", props.selectedContext);


          fetch("http://127.0.0.1:5000/generate-with-choice", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              const generatedSentences = data.results.map((result) => result.generatedSentence);
              setTranscribedText(generatedSentences);
            })
            
            .catch((error) => {
              console.error("Error:", error);
            });
        };

        mediaRecorder.stop();
      }
    }
    setTranscribing(false)
  };

  return (
    <div className="button-container">
      <button
        className={`speech-button ${isRecording ? 'recording' : ''}`}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        {isRecording ? 'Stop' : 'Click here to speak'}
      </button>
    </div>
  );
}

export default SpeechRecognitionButton;
