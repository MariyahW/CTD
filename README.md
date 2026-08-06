<p align="center">
  <a href="" rel="noopener">
 
</p>

<h3 align="center">ctd</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()


</div>

---

<p align="center"> A multipage weather dashboard built with vanilla HTML, CSS, and JavaScript, powered by the Open-Meteo API.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project was created as a showcase/take home assignment for the CTD program. It uses the Open-Meteo Weather API to create a JS/HTML/CSS multipage site that showcases information from several API endpoints. It is hosted for view at [https://mariyahw.github.io/CTD/]

Namely the 7 day forecast, fine particle matter and ozone air quality, as well as the current weather. It supports 5 different locations and preserves the selected location's coordinates as URL query parameters as users navigate between pages.

**Pages:**
- **Home** (`index.html`) – select a city and a data type to view
- **Current Weather** (`weather.html`) – displays current time and temperature for the selected location
- **7 Day Forecast** (`forecast.html`) – a Chart.js line chart of hourly temperature over 7 days
- **Air Quality Index** (`air.html`) – Chart.js line charts for fine particulate matter (PM2.5) and ozone, with color-coded safety zones based on EPA AQI breakpoints

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This is a static site with no build step, so all you need is:

```
A modern web browser (Chrome, Firefox, Edge, etc.)
A local web server to serve the files (e.g. the VS Code Live Server extension, or Python's built-in server)
```

### Installing

A step by step series of examples that tell you how to get a development environment running.

Clone the repository:

```
git clone https://github.com/MariyahW/CTD.git
cd CTD
```

Open the project folder in your editor of choice (e.g. VS Code):

```
code .
```

Serve the files with a local server rather than opening the HTML files directly, so relative fetch/query-string behavior works correctly:

```
Right-click main.html in VS Code and select "Open with Live Server"
```

Then navigate to `http://localhost:5500/main.html` in your browser, pick a city from the dropdown, choose a data type, and you should see live weather data rendered on the page.

## 🎈 Usage <a name="usage"></a>

1. On the home page, select a city from the **City** dropdown.
2. Once a city is selected, the **Data Type** dropdown appears — choose Current Weather, 7 Day Forecast, or Air Quality Index.
3. You'll be taken to the corresponding page, with the city's coordinates carried in the URL (`?lat=...&long=...`).
4. Use the navigation bar to move between pages at any time — the selected location's coordinates are automatically preserved across navigation, so you don't need to re-select a city.

## 🚀 Deployment <a name = "deployment"></a>

Since this is a static site (no server-side code or database), it can be deployed to any static hosting provider, such as:

- **GitHub Pages** – push to a repository and enable Pages in the repo settings, pointing to the branch/folder containing `main.html`
- **Netlify** or **Vercel** – connect the repository and deploy with no build command needed

## ⛏️ Built Using <a name = "built_using"></a>

- [Chart.js](https://www.chartjs.org/) - Charting library for the forecast and air quality visualizations
- [Axios](https://axios-http.com/) - Promise-based HTTP client used to call the API
- [Open-Meteo](https://open-meteo.com/) - Free weather, forecast, and air quality API
- HTML5 / CSS3 / Vanilla JavaScript

## ✍️ Authors <a name = "authors"></a>

- [@MariyahW](https://github.com/MariyahW) - Development

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- [Open-Meteo](https://open-meteo.com/) for providing free, no-API-key-required weather and air quality data
- [Chart.js](https://www.chartjs.org/) documentation and community examples for chart styling and annotations
- README structure adapted from [kylelobo/The-Documentation-Compendium](https://github.com/kylelobo/The-Documentation-Compendium)
