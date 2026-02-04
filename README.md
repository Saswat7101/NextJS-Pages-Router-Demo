# Next.js Course Project

A Next.js application demonstrating React Server Components and modern web development practices.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-rsc-demo
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

#### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

#### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
├── pages/                 # Next.js pages
│   ├── _app.js           # Application wrapper
│   ├── index.js          # Home page
│   └── news/             # News section
│       ├── index.js      # News listing page
│       └── [newsId].js   # Dynamic news detail page
├── public/               # Static assets
│   ├── favicon.ico
│   └── vercel.svg
├── styles/               # Global styles
│   └── globals.css
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **React DOM 18** - React rendering library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
