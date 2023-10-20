import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contador from "./Contador"

const root = ReactDOM.createRoot(document.getElementById('root'));
// CTRL K + U Uncomment en bloque
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);



//CTRL + K +C Comment en bloque
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date:new Date()};
//   }
//   componentDidMount() { //creacion del componente
//     this.timerID = setInterval(
//       () => this.tick(), //método - funcion dentro de un objeto. El objeto es el que se crea a partir del constructor dentro de la funcion class
//       10000)
//   }

 
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({ //cada vez que cambia setState, se invoca el método render
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Contador/>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

 
//   root.render(<Clock/>, <Contador/>);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

