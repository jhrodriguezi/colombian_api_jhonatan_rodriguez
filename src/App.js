import React, { useEffect, useState } from "react";
import "./App.css";
import AirportTab from "./components/tabs/AirportTab";
import PresidentTab from "./components/tabs/PresidentTab";
import TabItem from "./components/tabs/TabItem";
import TabList from "./components/tabs/TabList";
import TouristicAttractionTab from "./components/tabs/TouristicAttractionTab";

const routes = [{ path: "/colombia_dash", component: Dashboard }];

function Dashboard() {
  return (
    <div className="App">
      <TabList activeTabIndex={0}>
        <TabItem label="Presidents">
          <PresidentTab />
        </TabItem>
        <TabItem label="Airports">
          <AirportTab />
        </TabItem>
        <TabItem label="Tourist Attractions">
          <TouristicAttractionTab />
        </TabItem>
      </TabList>
    </div>
  );
}

function App() {
  const [currentRoute, setCurrentRoute] = useState("/colombia_dash");
  const route = routes.find((r) => r.path === currentRoute);
  const Component = route.component;

  function handleUrlChange() {
    setCurrentRoute(currentRoute);
  }

  useEffect(() => {
    window.history.replaceState({}, "", "/colombia_dash");
    window.addEventListener("popstate", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  });

  return <Component/>;
}

export default App;
