import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Details/Overview";
import Locations from "./Details/Locations";
import DocReviews from "./Details/DocReviews";
import BusinessHour from "./Details/BusinessHour";

const MyTabs: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto rounded-xl bg-white">
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
            <DocReviews></DocReviews>
          </TabPanel>
          <TabPanel>
            <BusinessHour></BusinessHour>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyTabs;
