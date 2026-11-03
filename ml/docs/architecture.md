\# VAYUNEX – ML Architecture



\## System Overview



VAYUNEX uses weather and satellite data to support short-term severe weather prediction.



\## Input Data

\- ERA5 Atmospheric Data

\- INSAT Satellite Data

\- IMD Weather Data

\- GPM IMERG Precipitation Data



\## Prediction Targets

1\. Thunderstorm

2\. Cloudburst

3\. Flash Flood



\## Forecast Horizons

\- 2 Hours

\- 4 Hours

\- 6 Hours



\## ML Workflow

1\. Weather Data Collection

2\. Data Validation

3\. Data Preprocessing

4\. Feature Engineering

5\. Model Training

6\. Model Evaluation

7\. Prediction API Integration



\## Backend Integration

FastAPI will be used to expose trained ML predictions to the VAYUNEX application.

