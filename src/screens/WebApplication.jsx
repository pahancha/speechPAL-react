import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './WebApplication.css'
import RecordingScreen from './RecordingScreen';
import HistoryScreen from './HistoryScreen';
import Footer from '../components/Footer';

function WebApplication() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <Tabs
      selectedIndex={selectedTab}
      onSelect={handleTabSelect}
      className="tab-view-container"
    >
      <TabList className="tab-list">
        <Tab className="tab">speechPAL - application</Tab>
        <Tab className="tab">History</Tab>
      </TabList>

      <TabPanel>
        <p className="wa-instruction-text">
          Please select the intention of the speech. If not selected, the default will be <b>GENERAL</b>. <br/>
          Please navigate to the <b>How to Use?</b> page for more information.
        </p>

        <RecordingScreen />

      </TabPanel>
      <TabPanel>
        <HistoryScreen />
      </TabPanel>
      <Footer/>
    </Tabs>
    
  );
}

export default WebApplication;
