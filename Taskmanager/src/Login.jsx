import React, { useState } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div style={styles.container}>
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      {isLogin ? (
        <form style={styles.form}>
          <label style={styles.label}>Email:</label>
          <input type="email" placeholder="Enter your email" style={styles.input} />
          <label style={styles.label}>Password:</label>
          <input type="password" placeholder="Enter your password" style={styles.input} />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      ) : (
        <form style={styles.form}>
          <label style={styles.label}>Name:</label>
          <input type="text" placeholder="Enter your name" style={styles.input} />
          <label style={styles.label}>Email:</label>
          <input type="email" placeholder="Enter your email" style={styles.input} />
          <label style={styles.label}>Password:</label>
          <input type="password" placeholder="Enter your password" style={styles.input} />
          <button type="submit" style={styles.button}>Signup</button>
        </form>
      )}
      <p style={styles.toggleText}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={toggleForm} style={styles.toggleButton}>
          {isLogin ? "Signup here" : "Login here"}
        </button>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    textAlign: "left",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  toggleText: {
    marginTop: "20px",
    fontSize: "14px",
  },
  toggleButton: {
    background: "none",
    border: "none",
    color: "#007BFF",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline",
  },
};

export default LoginSignup; 