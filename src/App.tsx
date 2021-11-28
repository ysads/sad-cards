import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useGoogleAuth from "./hooks/useGoogleAuth";

function App() {
  const { user, signInWithGoogle } = useGoogleAuth();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signInWithGoogle}>login with google</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {user && <em>{JSON.stringify(user)}</em>}
      </header>
    </div>
  );
}

export default App;
