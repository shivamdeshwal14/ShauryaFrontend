import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Email:", email); // Check email value
    console.log("Password:", password); // Check password value
    console.log("Attempting login..."); // Check if function is triggered
    try {
      let result = await fetch('http://localhost:4400/api/Login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!result.ok) {
        throw new Error('Login request failed');
      }
      result = await result.json();
      console.log("Login successful:", result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      alert("Please enter valid email and password.");
    }
  }

  return (
    <>
      <Navbar />
      <section className="vh-100 signup">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA="
                className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 style={{ fontFamily: 'cursive' }}>Login </h1>
              <form>
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13" className="form-control form-control-lg"
                    onChange={(e) => setEmail(e.target.value)} value={email}
                  />
                  <label className="form-label" htmlFor="form1Example13">Email address</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23" className="form-control form-control-lg"
                    onChange={(e) => setPassword(e.target.value)} value={password}
                  />
                  <label className="form-label" htmlFor="form1Example23">Password</label>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
                <button onClick={handleLogin} type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
