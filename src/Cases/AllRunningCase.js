import React, { useState } from 'react'
import Darshboardsaid from '../Component/Darshboardside'
import NavBar from '../Component/NavBar'
import AllRunningcases from '../Component/RunningCase'

const AllRunningcase = () => {
  const [saidbarColClass, setSaidbarColClass] = useState("col-2");
  const [mainDashboardColClass, setMainDashboardColClass] = useState("col-10");
  const [activeComponent, setActiveComponent] = useState("RunningCases");

  const toggleColClass = () => {
    setSaidbarColClass(saidbarColClass === "col-2" ? "col-1" : "col-2");
    setMainDashboardColClass(
      mainDashboardColClass === "col-10" ? "col-11" : "col-10"
    );
  };
  const toggleActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <>
      <div>
        <NavBar />
        <div className="d-flex">
          <Darshboardsaid colClass={saidbarColClass} toggleColClass={toggleColClass} toggleActiveComponent={toggleActiveComponent} />
          {activeComponent === 'RunningCases' && <AllRunningcases colClass={mainDashboardColClass} />}
        </div>
      </div>

    </>
  )
};


export default AllRunningcase