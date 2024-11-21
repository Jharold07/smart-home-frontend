// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import ControlPanel from "./components/ControlPanel";
import History from "./components/History";

function App() {
  return (
    <div>
      <header>
        <h1>Smart Home Control</h1>
      </header>
      <main>
        <ControlPanel />
        <History />
      </main>
    </div>
  );
}

export default App;


// import React, { useEffect } from "react";
// import { database } from "./firebase/config";
// import { ref, set } from "firebase/database";

// function App() {
//   useEffect(() => {
//     // Escribe un dato de prueba en Firebase
//     const testRef = ref(database, "test/");
//     set(testRef, {
//       message: "¡Firebase está conectado!",
//     })
//       .then(() => {
//         console.log("Datos escritos en Firebase con éxito.");
//       })
//       .catch((error) => {
//         console.error("Error al escribir en Firebase:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>¡Bienvenido a Smart Home!</h1>
//     </div>
//   );
// }

// export default App;
