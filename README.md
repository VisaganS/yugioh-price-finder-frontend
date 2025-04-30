# Yu-Gi-Oh! Price Finder Frontend

A React.js frontend that allows users to search for Yu-Gi-Oh! cards and displays live price comparison results in a responsive SCSS-styled table. It communicates with the Express backend at `/card/:cardName`.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Project Structure](#project-structure)
7. [Scripts](#scripts)
8. [Usage](#usage)
9. [Styling](#styling)
10. [Contributing](#contributing)
11. [License](#license)

---

## Features

- Search bar to enter card name
- Fetches price comparison data from backend API
- Displays results in a clean, responsive table
- Loading indicator overlay
- Error handling for network/API failures

---

## Tech Stack

- **React.js** (Create React App or Vite)
- **SCSS** for component-level styling
- **Fetch API** for HTTP requests

---

## Prerequisites

- Node.js v14+ and npm (or Yarn)
- Backend server running and accessible (default at `http://localhost:3001`)

---

## Installation

1. Clone or download this repo:
   ```bash
   git clone https://github.com/yourusername/yugioh-price-finder-frontend.git
   cd yugioh-price-finder-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## Environment Variables

Create a `.env` file in the project root (will be automatically loaded):

```ini
# API base URL for the backend
REACT_APP_API_URL=http://localhost:3001
```  

This will set the `API_BASE` in `src/config.js`.

---

## Project Structure

```
frontend/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.scss
│   │   ├── ResultsTable/
│   │   │   ├── ResultsTable.jsx
│   │   │   └── ResultsTable.scss
│   │   └── LoadingOverlay/
│   │       ├── LoadingOverlay.jsx
│   │       └── LoadingOverlay.scss
│   ├── hooks/               # Custom React hooks
│   │   └── useFetchCards.js
│   ├── config.js            # API base URL configuration
│   ├── App.jsx              # Main App component
│   ├── index.jsx            # ReactDOM entry point
│   └── index.css            # Global styles (if any)
├── .env                     # Environment overrides (gitignored)
├── package.json
└── README.md
```

---

## Scripts

- **`npm start`**: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).  
- **`npm run build`**: Builds the app for production to the `build/` folder.  
- **`npm test`**: Runs tests (if configured).  
- **`npm run eject`**: Exposes configuration files (CRA only).

---

## Usage

1. Ensure your backend server is running and CORS is enabled.  
2. Start this frontend:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.  
4. Enter a card name in the search bar and hit **Search**.  
5. View the sorted, in-stock price listings in the table.

---

## Styling

All styling is done with SCSS modules under `src/styles/`:

- Variables and mixins in `_variables.scss` and `_mixins.scss`  
- Layout and typography in `App.scss`  
- Component-specific styles in their respective `.scss` files  

The app imports these SCSS files at the top of each component.

---

## Contributing

1. Fork this repository.  
2. Create a feature branch: `git checkout -b feature/MyFeature`.  
3. Commit your changes: `git commit -m 'Add MyFeature'`.  
4. Push to your branch: `git push origin feature/MyFeature`.  
5. Open a pull request.

Please follow existing code style and include relevant tests.

---

## License

MIT License. See [LICENSE](../backend/LICENSE) for details.

