import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MyTabs: React.FC = () => {
  return (
    <div className="hero max-w-[1280px] mx-auto">
      <div className="hero-content">
        <Tabs>
          <TabList>
            <Tab
              className="px-3 rounded hover:border-b-0"
              selectedClassName="border-b-2 px-3 rounded"
            >
              Overview
            </Tab>
            <Tab
              className="px-3 rounded hover:border-b-0"
              selectedClassName="border-b-2 px-3 rounded"
            >
              Location
            </Tab>
            <Tab
              className="px-3 rounded hover:border-b-0"
              selectedClassName="border-b-2 px-3 rounded"
            >
              Reviews
            </Tab>
            <Tab
              className="px-3 rounded hover:border-b-0"
              selectedClassName="border-b-2 px-3 rounded"
            >
              Business Hours
            </Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyTabs;
