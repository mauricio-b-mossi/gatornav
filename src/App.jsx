import React, { useState, useEffect } from "react";

// SCREENS
import HomeScreen from "./Screens/HomeScreen";
import InteriorScreen from "./Screens/InteriorScreen";
import OptionsScreen from "./Screens/OptionsScreen";

export default function App() {
  const [screen, setScreen] = useState("home"); // 'home', 'options', 'interior'
  const [selectedClass, setSelectedClass] = useState(null);

  const updateRecents = (newClass) => {
    const stored = JSON.parse(localStorage.getItem("gatornav_recent") || "[]");
    const isAlreadyIn = stored.some(
      (item) => item.fullCode === newClass.fullCode
    );
    if (!isAlreadyIn) {
      const updated = [newClass, ...stored].slice(0, 5); // Keep last 5 in case OS offloads memory of browser
      localStorage.setItem("gatornav_recent", JSON.stringify(updated));
    }
  };

  const handleSearch = (parsedClass) => {
    setSelectedClass(parsedClass);
    updateRecents(parsedClass);
    setScreen("options");
  };

  const handleBack = () => {
    setScreen("home");
    setSelectedClass(null);
  };

  const renderScreen = () => {
    switch (screen) {
      case "options":
        return (
          <OptionsScreen
            selectedClass={selectedClass}
            onEnterBuilding={() => setScreen("interior")}
            onBack={handleBack}
          />
        );
      case "interior":
        return (
          <InteriorScreen
            selectedClass={selectedClass}
            onBack={() => setScreen("options")}
          />
        );
      case "home":
      default:
        return <HomeScreen onSearch={handleSearch} />;
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen font-sans text-gray-900 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto  rounded-2xl  my-4 relative min-h-[600px] flex flex-col justify-center">
        {renderScreen()}
      </div>
    </main>
  );
}
