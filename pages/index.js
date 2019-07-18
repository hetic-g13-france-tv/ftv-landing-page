import React from "react";
import Head from "../src/components/Head";

import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Join from "../src/components/Join";
import Service from "../src/components/Service";
import Footer from "../src/components/Footer";

import '../src/assets/index.scss';
import '../src/assets/navbar.scss';
import '../src/assets/home.scss';




const App = () => (
    <div>
        <Head />
        <Navbar />
        <Home />
        <Join />
        <Service />
        <Footer />
    </div>
);

export default App;