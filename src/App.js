import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './component/routes'
import { useEffect } from 'react';

//import Menu from "./component/Menu"

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
