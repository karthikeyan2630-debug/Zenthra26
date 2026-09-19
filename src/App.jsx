import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Event from "./EventDetails";
import TechBackground from "./components/TechBackground";
import WelcomeLoader from "./components/WelcomeLoader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <TechBackground />
      {loading && <WelcomeLoader onFinish={handleFinishLoading} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;