import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onsubmitHandler = async (e) => {
    e.preventDefault();

    if (currentState === "Login") {
      if (email && password) {
        login({ name: name || "User", email }); // ✅ update auth context
        navigate("/");
      } else {
        toast.error("Please enter email and password");
      }
    } else {
      if (name && email && password) {
        login({ name, email }); // ✅ signup also updates auth context
        toast.success("Signup successful!");
        navigate("/");
      } else {
        toast.error("Please fill all fields");
      }
    }
  };

  return (
    <form
      onSubmit={onsubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-semibold">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="w-full flex justify-between mt-[-8px] text-sm text-blue-500">
        <p className="cursor-pointer hover:underline">Forgot Password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer hover:underline"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer hover:underline"
          >
            Login here
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white py-2 px-8 font-light mt-4"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
