import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/login" element={<h1>Login</h1>} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;
