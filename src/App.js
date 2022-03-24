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




import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index.js";
import Tuiter from "./components/tuiter/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container">
//         {/* <h1>Hello World!</h1> */}
//         <HelloWorld />
//         <Labs />
//         <Tuiter />
//         <i class="fas fa-home"></i>
//         <i class="far fa-lightbulb"></i>
//       </div>
//     </BrowserRouter>
//   );
// }
// export default App;


function App() {
  return (
    // <BrowserRouter>
    //   <div className="container">
    //     <Routes>
    //       <Route path="/hello"
    //         // maps /hello to HelloWorld, which means
    //         // HelloWorld component displayed if you navigate to http://localhost:3000/hello
    //         element={<HelloWorld />} />
    //       <Route path="/labs"
    //         element={<Labs />} />
    //       <Route path="/tuiter"
    //         element={<Tuiter />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello"
            exact={true}
            element={<HelloWorld />} />
          <Route path="/"
            exact={true}
            element={<Labs />} />
          <Route path="/tuiter"
            exact={true}
            element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




