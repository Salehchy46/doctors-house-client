import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Details/Overview";
import Locations from "./Details/Locations";

const MyTabs: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-white">
      <div className="p-7">
        <Tabs>
          <TabList className="flex gap-2">
            <Tab
              className="px-10 rounded-tl-xl hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
              selectedClassName="bg-[#F7A582] p-3 text-white"
            >
              Overview
            </Tab>
            <Tab
              className="px-10 hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
              selectedClassName="bg-[#F7A582] p-3 text-white"
            >
              Location
            </Tab>
            <Tab
              className="px-10 hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
              selectedClassName="bg-[#F7A582] p-3 text-white"
            >
              Reviews
            </Tab>
            <Tab
              className="px-10 rounded-tr-xl hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
              selectedClassName="bg-[#F7A582] p-3 text-white"
            >
              Business Hours
            </Tab>
          </TabList>

          <TabPanel>
            <Overview></Overview>
          </TabPanel>
          <TabPanel>
            <Locations></Locations>
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
