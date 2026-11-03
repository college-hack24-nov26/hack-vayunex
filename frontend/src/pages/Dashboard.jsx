import MapView from "../components/MapView";

const predictions = [
  {
    name: "Thunderstorm",
    horizon: "2 hours",
    risk: "Moderate",
    probability: 45,
  },
  {
    name: "Cloudburst",
    horizon: "4 hours",
    risk: "Low",
    probability: 18,
  },
  {
    name: "Flash Flood",
    horizon: "6 hours",
    risk: "High",
    probability: 72,
  },
];

export default function Dashboard({ onNavigate }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">V</span>
          VAYUNEX
        </div>

        <div className="sidebar-label">WORKSPACE</div>

        <div className="sidebar-item active">▦ Overview</div>
        <div className="sidebar-item">◉ Weather Map</div>
        <div className="sidebar-item">⚠ Risk Predictions</div>
        <div className="sidebar-item">▤ Analytics</div>

        <div className="sidebar-bottom">
          <div className="sidebar-label">ACCOUNT</div>
          <button
            className="sidebar-logout"
            onClick={() => onNavigate("landing")}
          >
            ↪ Back to Home
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="eyebrow">WEATHER INTELLIGENCE PLATFORM</span>
            <h1>Overview Dashboard</h1>
            <p>Monitor weather risks and prediction insights.</p>
          </div>

          <span className="demo-badge">DEMO DATA</span>
        </header>

        <section className="stat-grid">
          <article className="stat-card">
            <span>Weather Categories</span>
            <strong>03</strong>
            <small>Prediction targets</small>
          </article>

          <article className="stat-card">
            <span>Forecast Horizons</span>
            <strong>02 / 04 / 06</strong>
            <small>Hours ahead</small>
          </article>

          <article className="stat-card">
            <span>Monitoring Regions</span>
            <strong>05</strong>
            <small>Illustrative locations</small>
          </article>

          <article className="stat-card">
            <span>Data Status</span>
            <strong className="status-text">Demo</strong>
            <small>Live feed not connected</small>
          </article>
        </section>

        <section className="dashboard-section">
          <div className="section-title">
            <div>
              <h2>Weather Monitoring Map</h2>
              <p>Explore illustrative monitoring locations.</p>
            </div>
          </div>
          <MapView />
        </section>

        <section className="dashboard-section">
          <div className="section-title">
            <div>
              <h2>AI Risk Predictions</h2>
              <p>Sample probabilities for interface demonstration only.</p>
            </div>
          </div>

          <div className="prediction-list">
            {predictions.map((item) => (
              <article className="prediction-card" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>Forecast horizon: {item.horizon}</p>
                </div>

                <div className="prediction-result">
                  <span className={`risk-${item.risk.toLowerCase()}`}>
                    {item.risk}
                  </span>
                  <strong>{item.probability}%</strong>
                </div>

                <div className="progress-track">
                  <div
                    className={`progress-fill fill-${item.risk.toLowerCase()}`}
                    style={{ width: `${item.probability}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="dashboard-footer">
          VAYUNEX · AI Weather Intelligence · Demonstration interface
        </footer>
      </main>
    </div>
  );
}