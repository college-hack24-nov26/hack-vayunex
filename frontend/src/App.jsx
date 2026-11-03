import { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("landing");

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  if (page === "login") {
    return <Login onNavigate={navigate} />;
  }

  if (page === "dashboard") {
    return <Dashboard onNavigate={navigate} />;
  }

  return <Landing onNavigate={navigate} />;
}