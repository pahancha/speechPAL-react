import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './WebApplication.css'
import RecordingScreen from './RecordingScreen';
import HistoryScreen from './HistoryScreen';

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
        <RecordingScreen />
      </TabPanel>
      <TabPanel>
        <HistoryScreen />
      </TabPanel>
    </Tabs>
  );
}

export default WebApplication;
