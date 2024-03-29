## Air Quality Index Frontend App
![GitHub Workflow Status](https://github.com/airqi-com/frontend/actions/workflows/node.js.yml/badge.svg?branch=master)

This frontend app provides current, forecast, and historical air pollution data for any coordinates on the globe. Besides basic Air Quality Index, the app returns data about polluting gases, such as Carbon monoxide (CO), Nitrogen monoxide (NO), Nitrogen dioxide (NO2), Ozone (O3), Sulphur dioxide (SO2), Ammonia (NH3), and particulates (PM2.5 and PM10).
![image](https://github.com/airqi-com/frontend/assets/15163891/be47e7b5-7aa8-4ad0-a627-5f06e33d509a)

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Getting Started](#getting-started)
- [Air Pollution Index Levels Scale](#air-pollution-index-levels-scale)
- [Data Format](#data-format)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have a valid API token from [aqicn.org](https://aqicn.org/data-platform/token/).

## Setup
To setup the development environment, follow these steps:

On Mac / Linux:
```bash
ln -nfs .env.local.example .env.local
```

On Windows:
```bash
mklink .env.local .env.local.example
```

Then, install the dependencies:
```bash
npm ci
```

## Getting Started
To run the application, use the following command:
```bash
npm run dev
```
Open `localhost:3000` in your browser to see the application.

## Air Pollution Index Levels Scale
Below is a description of Europe Air Quality Index levels: [https://openweathermap.org/air-pollution-index-levels](https://openweathermap.org/air-pollution-index-levels)

## Data Format
Here is an example of the data format:

```json
{
  "status": "ok",
  "data": {
     "aqi": 70,
     "time": {
        "s": "2024-01-19 04:00:00"
     },
     "city": {
        "name": "Shanghai",
        "url": "http://aqicn.org/city/shanghai/",
        "geo": [
           "31.2047372",
           "121.4489017"
        ]
     },
     "iaqi": {
        "pm25": "..."
     }
  }
}
```
## Want to contribute?

Check out our [CONTRIBUTING.md](./CONTRIBUTING.md) file for more information.

