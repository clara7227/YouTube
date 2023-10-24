import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Contador from "./Contador";

const root = ReactDOM.createRoot(document.getElementById("root"));
// CTRL K + U Uncomment en bloque
// root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
// );
const UserContext = createContext();
function Sidebar() {
  // Este usuario normalmente lo obtendriamos desde alguna una API. Para
  // efectos de este ejemplo nos saltamos ese paso y guardamos directamene
  // el valor.

  return (
    <UserContext.Consumer>
      {(user) => (
        <div class="Sidebar">
          <img alt="Profile" src={user.avatarUrl} />
          <h2>{user.name}</h2>
          <h1>{user.username}</h1>
          <div>
            Seguidores: {user.followers}, Seguidos: {user.following}, Estrellas:{" "}
            {user.stars}
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
}
function Content() {
  return (
    <div class="Content">
      <h2>Proyectos</h2>
    </div>
  );
}
function Header() {
  return ( <UserContext.Consumer>
    {(user) => (
    <div class="Header">Sesión iniciada como @{user.username}
    </div>
    )}
    </UserContext.Consumer>
    );
}
//CTRL + K +C Comment en bloque
export default function App() {
  const [user] = useState({
    username: "muZk",
    name: "Nicolás Gómez",
    bio: "Full Stack Developer",
    avatarUrl: "https://codewithnico.com/assets/images/about.png",
    following: 100,
    followers: 100,
    stars: 10,
  });
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />
        <Sidebar />
        <Content />
      </UserContext.Provider>
    </div>
  );
}

root.render(<App />, <Contador />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
