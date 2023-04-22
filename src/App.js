import logo from './logo.svg';
import './App.css';
import SpeechRecognitionButton from './components/SpeechRecognitionButton';
import RecordingScreen from './screens/RecordingScreen';

function App() {
  return (
    <div className="App">
    {/* <SpeechRecognitionButton /> */}
    <RecordingScreen />
    </div>
  );
}

export default App;
