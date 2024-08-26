import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from "./registration";
import Login from "./login";
import './App.css'; // Ensure this file exists and is properly configured
import Questions from "./questions";

function App() {
  const [item, setItem] = useState("");

  const changeItem = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch('http://192.168.33.1:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: item }),
      });

      const result = await response.json();
      console.log(result); // Handle the result as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <div className="flex justify-center items-center h-screen w-screen">
            <div className="outerCanvas shadow-2xl shadow-black flex">
              <div className="flex-1 bg-cover" style={{ backgroundImage: `url('sidePic.webp')` }}></div>
              <div className="flex-1 flex flex-col items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <div className="flex flex-col items-center justify-center h-1/5 w-4/5">
                  <div className="flex items-center">
                    <img src="crown.png" alt="Logo" className="h-12 w-12" />
                    <h1 className="text-3xl text-white font-bold ml-2" style={{ fontFamily: 'Poppins' }}>SmartLearn</h1>
                  </div>
                  <div className="flex justify-between w-full mt-4">
                    <p className="text-white">Welcome to Our App <em className="ml-4 underline text-white">Register</em></p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="w-full px-4 py-6" >
                  <input
                    type="text"
                    placeholder="Username"
                    value={item}
                    onChange={changeItem}
                    className="w-full mb-4 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
                  >
                    Sign in
                  </button>
                </form>
                <footer className="text-center py-4">
                  <p className="text-gray-600">Don't have an account? <a href="/register" className="text-purple-600">Sign up now</a></p>
                </footer>
              </div>
            </div>
          </div>
        } />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
