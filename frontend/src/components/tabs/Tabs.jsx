import React, { useState } from "react";
import "./tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <div>Content for Tab 1</div>;
      case "tab2":
        return <div>Content for Tab 2</div>;
      case "tab3":
        return <div>Content for Tab 3</div>;
      case "tab4":
        return <div>Content for Tab 4</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => setActiveTab("tab1")}
        >
          Tab 1
        </button>
        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </button>
        <button
          className={activeTab === "tab3" ? "active" : ""}
          onClick={() => setActiveTab("tab3")}
        >
          Tab 3
        </button>
        <button
          className={activeTab === "tab4" ? "active" : ""}
          onClick={() => setActiveTab("tab4")}
        >
          Tab 4
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
