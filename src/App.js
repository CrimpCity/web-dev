import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index.js";
import Tuiter from "./components/tuiter/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreComponent from "./components/tuiter/ExploreScreen/ExploreComponent.js";
import HomeScreen from "./components/tuiter/home-screen/index.js"
import HomePostList from "./components/tuiter/HomeScreen/HomePostList/index.js";
// import HomeScreen from "./components/tuiter/HomeScreen/index.js";
// import ExploreScreen from './components/tuiter/ExploreScreen/index.js';



function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="labs"
              element={<Labs />} />
            <Route path="hello"
              element={<HelloWorld />} />
            <Route path="tuiter"
              element={<Tuiter />}>
              {/* <Route index
                element={<HomePostList />} /> */}
              <Route index
                element={<HomePostList />} />
              <Route path="home"
                element={<HomeScreen />} />
              <Route path="explore"
                element={<ExploreComponent />} />
              {/* <Route path="notifications"
                element={<NotificationScreen />} /> */}
              ...
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;