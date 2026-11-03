import "./Landing.css";

export default function Landing({ onNavigate }) {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <a className="brand" href="#" onClick={(e) => e.preventDefault()}>
          <span className="brand-icon">V</span>
          VAYUNEX
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button
            className="nav-login"
            onClick={() => onNavigate("login")}
          >
            Login
          </button>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">
              AI-POWERED WEATHER INTELLIGENCE
            </span>

            <h1>
              Predict the storm.
              <br />
              <span>Protect the future.</span>
            </h1>

            <p>
              VAYUNEX is an intelligent weather monitoring platform
              designed to identify severe weather risks and support
              early warnings for safer communities.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => onNavigate("dashboard")}
              >
                Explore Dashboard →
              </button>

              <button
                className="secondary-btn"
                onClick={() => onNavigate("login")}
              >
                Get Started
              </button>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              Built for proactive weather intelligence
            </div>
          </div>

          <div className="hero-visual">
            <div className="weather-card">
              <div className="weather-top">
                <span>WEATHER INTELLIGENCE</span>
                <span className="live-label">DEMO</span>
              </div>

              <div className="weather-icon">⛈️</div>
              <h2>Stay ahead of the weather.</h2>
              <p>Monitor. Predict. Prepare.</p>

              <div className="weather-stats">
                <div>
                  <strong>02H</strong>
                  <span>Forecast</span>
                </div>
                <div>
                  <strong>04H</strong>
                  <span>Forecast</span>
                </div>
                <div>
                  <strong>06H</strong>
                  <span>Forecast</span>
                </div>
              </div>
            </div>
            <div className="floating-card">AI Weather Insights</div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="eyebrow">OUR CAPABILITIES</span>
            <h2>Understand the risks before they happen.</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">⛈️</div>
              <h3>Thunderstorm Prediction</h3>
              <p>Support early identification of potential thunderstorm conditions.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🌧️</div>
              <h3>Cloudburst Monitoring</h3>
              <p>Monitor rainfall patterns and identify possible extreme rainfall risks.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🌊</div>
              <h3>Flash Flood Alerts</h3>
              <p>Support awareness of possible flash flood conditions through weather intelligence.</p>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <span className="eyebrow">ABOUT VAYUNEX</span>
          <h2>Technology for a safer tomorrow.</h2>
          <p>
            Our platform aims to combine weather data, machine learning
            and accessible visualisation to help people understand
            changing weather conditions.
          </p>
          <button
            className="primary-btn"
            onClick={() => onNavigate("dashboard")}
          >
            View Weather Dashboard →
          </button>
        </section>
      </main>

      <footer className="landing-footer">
        © 2026 VAYUNEX · AI Weather Intelligence Platform
      </footer>
    </div>
  );
}