
# Real-Time Data Visualization Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Node.js CI](https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg)

A professional real-time data visualization application displaying time-series data with automatic updates every minute. Optimized for Dhaka, Bangladesh timezone (UTC+6).


## Features

- Real-time updates every 60 seconds
- Always displays latest 60 data points
- Automatic UTC to Dhaka time conversion
- Persistent SQLite storage
- Responsive Chart.js visualization
- Clean MVC architecture
- Cross-browser compatibility

## Tech Stack

**Frontend:**  
HTML5, CSS3, JavaScript, Chart.js 4.x

**Backend:**  
Node.js 18+, Express 4.x, SQLite3

## Installation

1. Clone repository:
```bash
git clone https://github.com/yourusername/graph-html-css-chart.js-node-sqlite3.git
cd graph-html-css-chart.js-node-sqlite3
```

2. Install dependencies:
```bash
npm install
```

3. Start application:
```bash
npm start
```

4. Access dashboard at:
`http://localhost:3000`

## Configuration

<!-- ### Environment Variables
Create `.env` file:
```ini
PORT=3000
TIMEZONE=Asia/Dhaka
DATA_INTERVAL=60000 # 60 seconds
``` -->

### Database Management
- Location: `./database.db`
- Reset database:
```bash
rm database.db && npm start
```

## API Endpoints

**GET /api/data**  
Returns latest 60 data points in ascending order  
Response:
```json
[
  {
    "timestamp": "2025-04-02T17:55:31.851Z",
    "value": 72.34
  }
]
```

## Architecture

```
real-time-graph/
├── public/            # Static assets
│   ├── css/           # Stylesheets
│   └── js/            # Client-side logic
├── src/               # Server code
│   ├── database/      # DB connection
│   └── routes/        # API endpoints
└── package.json       # Dependency management
```

## Development

### Coding Standards
- ES6+ JavaScript
- Airbnb style guide
- 2-space indentation
- Semantic commit messages

### Testing
Run integration tests:
```bash
npm test
```

### Production Build
Optimized deployment:
```bash
npm run build
```

## License

Distributed under MIT License. See `LICENSE` for details.

## Acknowledgments

- Chart.js for powerful visualization
- Express.js team for robust backend
- SQLite for lightweight storage
