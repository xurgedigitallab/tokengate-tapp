# TextRP-Widget-Template

A comprehensive Vite+React+TypeScript application template for building custom widgets for TextRP using the Matrix Widget API.

## Overview

This repository serves as a starting point for developers looking to create custom widgets that integrate with TextRP rooms. It provides a pre-configured Vite + React + TypeScript environment with Matrix Widget API integration, allowing developers to quickly build and deploy widgets that can interact with Matrix rooms, access room state events, and communicate with the XRP Ledger.

## Features

- **Vite + React + TypeScript**: Modern frontend tooling for fast development and type safety
- **Matrix Widget API Integration**: Pre-configured with Matrix Widget API for seamless integration with TextRP rooms
- **XRP Ledger Connectivity**: Built-in utilities for connecting to XRPL and retrieving wallet information
- **TrustLine Management**: Ready-to-use functions for working with XRP TrustLines
- **Theme Support**: Built-in light/dark mode toggle with persistent theme state
- **Responsive UI**: Mobile-friendly design using Material UI components
- **Animation Support**: Integrated with Framer Motion for fluid transitions
- **TailwindCSS**: Utility-first CSS framework for rapid UI development

## Getting Started

### Prerequisites

- Node.js (recommended latest LTS version)
- npm or yarn
- A TextRP room where you can test the widget

### Installation

1. Clone this repository
   ```
   git clone https://github.com/xurgedigitallab/TextRP-Widget-Template.git
   cd TextRP-Widget-Template
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Use Ngrok to expose your development server to the internet
   ```
   ngrok http http://localhost:5173
   ```

5. Add the ngrok URL to your TextRP room
   ```
   /addwidget <ngrok-url>
   ```

## Customization

### Widget Configuration

Update the widget registration in `src/App.tsx` to customize your widget's name and type:

```typescript
widgetRegistration: {
  name: 'Your Widget Name',
  type: 'com.your-domain.widget',
  data: { title: 'Your Widget Title' },
  requiredParameters: [WidgetParameter.DeviceId],
}
```

### Matrix Event Capabilities

Modify the widget capabilities in `src/main.tsx` to request only the permissions your widget needs:

```typescript
capabilities: [
  // Add or remove capabilities as needed
  WidgetEventCapability.forStateEvent(EventDirection.Receive, 'm.room.member'),
  // ...
]
```

### XRPL Integration

The template includes utilities for working with the XRP Ledger. You can customize the endpoints in the `API_URLS` configuration in `src/config.ts` or extend the functionality to support additional XRPL features.

### Environment Variables

This template uses Vite's environment variable system. All environment variables need to be prefixed with `VITE_` to be accessible in the client code. Configure your environment variables in the `.env` file.

```
VITE_SYNAPSE_ACCESS_TOKEN=your_access_token
VITE_SYNAPSE_URL=https://synapse.your-domain.com
VITE_XRPL_MAIN_NET_URL=wss://your-xrpl-endpoint
```

## TypeScript

This template uses TypeScript for type safety. You can configure TypeScript settings in the `tsconfig.json` file. The template includes type definitions for the Matrix Widget API and other dependencies.

## Vite Configuration

You can customize the Vite configuration in `vite.config.ts`. The template includes configuration for React, path aliases, and other Vite features.

## Deployment

This widget template can be deployed to any static hosting service. After building the project with `npm run build`, you can deploy the contents of the `dist` directory to services like Netlify, Vercel, or GitHub Pages.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
