import { useState } from "react";

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    onNavigate("dashboard");
  }

  return (
    <main className="login-page">
      <button
        className="back-button"
        onClick={() => onNavigate("landing")}
      >
        ← Back to Home
      </button>

      <section className="login-card">
        <div className="login-logo">V</div>
        <h1>Welcome to VAYUNEX</h1>
        <p>Sign in to access weather intelligence.</p>

        <form onSubmit={handleLogin}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="login-error">{error}</div>}

          <button className="primary-btn login-submit" type="submit">
            Sign In →
          </button>
        </form>

        <div className="login-divider">VAYUNEX WEATHER INTELLIGENCE</div>
      </section>
    </main>
  );
}