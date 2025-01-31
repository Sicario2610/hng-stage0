# HNG12 Public API

## Overview
This is a public API for HNG12 that returns basic information such as a registered email, the current UTC datetime in ISO format, and the GitHub URL of the project's codebase.

## Features
- Returns JSON response with email, current datetime, and GitHub URL.
- Dynamically generates the current datetime in ISO 8601 format (UTC).
- Handles CORS for cross-origin requests.

## Tech Stack
- **Node.js** with **Express.js**
- **Compression** for Gzip compression
- **CORS** for handling cross-origin requests

## Setup Instructions
### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Sicario2610/hng-stage0.git
   cd hng-stage0
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm run dev
   ```

## API Documentation
### Endpoint: `GET /`
#### Response Format
```json
{
  "email": "abdulbasitabdulrasheed8@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Sicario2610/hng-stage0.git"
}
```

## Deployment
The API is publicly accessible at: [https://hng-stage0-86go.onrender.com](https://hng-stage0-86go.onrender.com)
 

## Backlink
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
