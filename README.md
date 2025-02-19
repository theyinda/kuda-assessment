Random Image Grid

This project fetches and displays 15 random images in a CSS grid layout. It uses Axios to retrieve images from an API and renders them dynamically on a webpage.

Features

Fetches 15 random images from an external API

Displays images in a responsive grid layout

Implements a loading state while fetching images

Built with Vite + TypeScript for fast performance

Technologies Used

HTML, CSS, TypeScript

Vite (for development and build)

Axios (for fetching images from an API)

Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm run dev

This will start a local server, and you can access the app in your browser at http://localhost:5173/.

4️⃣ Build for Production

npm run build

This will generate a dist/ folder with the optimized production build.

5️⃣ Deploying to Vercel

If you're deploying via Vercel, run:

vercel --prod

Or, if using GitHub with Vercel, ensure your build settings are:

Build Command: npm run build

Output Directory: dist

API Used

The project fetches images from:

https://picsum.photos/v2/list?page=1&limit=15
