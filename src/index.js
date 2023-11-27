import React  from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


import App from "./App"
const root = ReactDOM.createRoot(document.getElementById("root"));
//CTRL K + U Uncomment en bloque
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const UserContext = createContext();

//     //RANDOMIZAR - es importnte que vata primero que update username

// // Proveedor de la información y el estado de user
// function UserProvider({ children }) {
//   const [user, setUser] = useState({
//     username: "muZk",
//     name: "Nicolás Gómez",
//     bio: "Full Stack Developer",
//     avatarUrl: "https://codewithnico.com/assets/images/about.png",
//     following: 100,
//     followers: 100,
//     stars: 10
//   });
//   const updateUsername = (newUsername) => {
//     setUser((currentUser) => ({
//       ...currentUser,
//       username: newUsername
//     }));
//   };
//   return (
//     <UserContext.Provider value={{ user, updateUsername }}>
//       {children}
//     </UserContext.Provider>
//   );
// }


// function Sidebar() {
// // Este usuario normalmente lo obtendriamos desde alguna una API. Para
// //efectos de este ejemplo nos saltamos ese paso y guardamos directamene
// //el valor.
// const {user, updateUsername} = useContext(UserContext);
// function randomCase(string) {
//   return string
//     .split("")
//     .map((c) => (Math.random() <= 0.5 ? c.toUpperCase() : c.toLowerCase()))
//     .join("");
// }
//   return (
//         <div class="Sidebar">
//           <img alt="Profile" src={user.avatarUrl} />
//           <h2>{user.name}</h2>
//           <h1>{user.username}</h1>
//           <div>
//             Seguidores: {user.followers}, Seguidos: {user.following}, Estrellas:{" "}
//             {user.stars}
//           </div>
//           <button onClick={() => updateUsername(randomCase(user.username))}>
//               Randomizar
//             </button>
//         </div>
        
   
//   );
// }
// function Content() {
//   return (
//     <div class="Content">
//       <h2>Proyectos</h2>
//     </div>
//   );
// }
// function Header() {
//   const {user, updateUsername} = useContext(UserContext);
//   return ( 
//     <div class="Header">Sesión iniciada como @{user.username}
//     </div>
//     )
// }

// export default function App() {
  
//     return (
//     <div className="App">
//       <UserProvider>
//       <Header />
//         <div class="Body">
//           <Sidebar />
//           <Content />
// 	  <div>
            
//           </div>
//         </div>
//         </UserProvider>
//     </div>
//   );
// }

root.render(<App />); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
