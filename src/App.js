import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Error from './Component/Error';
import Body from './Component/Body';
import About from './Component/About';
import RestaurantMenu from './Component/RestaurantMenu';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Body />} />
          {/* if{
            <Route path="/" element={<Body />} />
          }else{
            <Route element={<Error/>} />
          } */}
          <Route path="/about" element={<About  />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu  />} />
        </Routes>
      </Router>
      {/* <Body/> */}
    </>
  );
}

// const root = document.getElementById('root');

// ReactDOM.createRoot(root).render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </Router>
// );

export default App;
