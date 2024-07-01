
import React from 'react';
import AddCart from './AddCart';
import Home from './Home';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';

const routes = [
    {
        path: "/home",
        exact: false,
        element: <Home />
    },
    {
      path: "/",
      exact: true,
      element: <Home />
    },    
    {
        path: "/product/:id",
        exact: true,
        element: <AddCart />
    },
    {
        path: "/cart",
        exact: true,
        element: <Cart />
    },
    {
        path: "/about",
        exact: true,
        element: <About />
    },
    {
        path: "/contact",
        exact: true,
        element: <Contact />
    }
]
export default routes;