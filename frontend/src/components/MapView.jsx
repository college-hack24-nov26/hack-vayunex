import { useState } from "react";

const locations = [
  { name: "Pune", x: 35, y: 65, risk: "Moderate" },
  { name: "Mumbai", x: 18, y: 49, risk: "Low" },
  { name: "Nashik", x: 43, y: 28, risk: "Low" },
  { name: "Nagpur", x: 82, y: 47, risk: "High" },
  { name: "Kolhapur", x: 34, y: 85, risk: "Moderate" },
];

export default function MapView() {
  const [selected, setSelected] = useState(locations[0]);

  return (
    <div className="map-layout">
      <div className="map-canvas">
        <div className="map-label">MAHARASHTRA · ILLUSTRATIVE VIEW</div>

        <svg
          className="maharashtra-map"
          viewBox="0 0 500 400"
          role="img"
          aria-label="Illustrative Maharashtra monitoring map"
        >
          <path
            d="M75 90 L160 35 L270 55 L370 95 L430 175 L390 275 L320 340 L210 365 L125 300 L65 200 Z"
            fill="#e1f0fb"
            stroke="#82b8e0"
            strokeWidth="3"
          />
          <path
            d="M110 135 L200 95 L300 120 L375 180 M100 220 L210 180 L315 235 L365 280 M205 80 L220 190 L210 300"
            fill="none"
            stroke="#a9cce5"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {locations.map((location) => (
            <g
              key={location.name}
              onClick={() => setSelected(location)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={location.x * 5}
                cy={location.y * 4}
                r={selected.name === location.name ? 13 : 9}
                fill={
                  location.risk === "High"
                    ? "#e05252"
                    : location.risk === "Moderate"
                    ? "#e5a23d"
                    : "#239d78"
                }
                stroke="white"
                strokeWidth="3"
              />
              <text
                x={location.x * 5 + 12}
                y={location.y * 4 - 10}
                fontSize="12"
                fill="#24425f"
                fontWeight="600"
              >
                {location.name}
              </text>
            </g>
          ))}
        </svg>

        <div className="map-legend">
          <span><i className="legend-low" /> Low</span>
          <span><i className="legend-medium" /> Moderate</span>
          <span><i className="legend-high" /> High</span>
        </div>
      </div>

      <aside className="map-details">
        <span className="eyebrow">SELECTED LOCATION</span>
        <h3>{selected.name}</h3>
        <p>Illustrative risk category</p>
        <strong className={`risk-${selected.risk.toLowerCase()}`}>
          {selected.risk} Risk
        </strong>
        <p className="map-disclaimer">
          Demo data only. Connect a verified weather data source
          for real monitoring.
        </p>
      </aside>
    </div>
  );
}