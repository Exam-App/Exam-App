import React from "react";
import { AuthContextProvider } from "./components/context/AuthContext";
import Routes from "./Router";

// backend bridger
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
