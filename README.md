# TextRP-Widget-Template

A comprehensive React application template for building custom widgets for TextRP using the Matrix Widget API.

## Overview

This repository serves as a starting point for developers looking to create custom widgets that integrate with TextRP rooms. It provides a pre-configured React environment with Matrix Widget API integration, allowing developers to quickly build and deploy widgets that can interact with Matrix rooms, access room state events, and communicate with the XRP Ledger.

## Features

- **Matrix Widget API Integration**: Pre-configured with Matrix Widget API for seamless integration with TextRP rooms
- **XRP Ledger Connectivity**: Built-in utilities for connecting to XRPL and retrieving wallet information
- **TrustLine Management**: Ready-to-use functions for working with XRP TrustLines
- **Theme Support**: Built-in light/dark mode toggle with persistent theme state
- **Responsive UI**: Mobile-friendly design using Material UI components
- **Animation Support**: Integrated with Framer Motion for fluid transitions

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
   npm start
   ```

4. Use Ngrok to expose your development server to the internet
   ```
   ngrok http http://localhost:3000
   ```

5. Add the ngrok URL to your TextRP room
   ```
   /addwidget <ngrok-url>
   ```

## Customization

### Widget Configuration

Update the widget registration in `src/App.js` to customize your widget's name and type:

```javascript
widgetRegistration: {
  name: 'Your Widget Name',
  type: 'com.your-domain.widget',
  data: { title: 'Your Widget Title' },
  requiredParameters: [WidgetParameter.DeviceId],
}
```

### Matrix Event Capabilities

Modify the widget capabilities in `src/index.js` to request only the permissions your widget needs:

```javascript
capabilities: [
  // Add or remove capabilities as needed
  WidgetEventCapability.forStateEvent(EventDirection.Receive, 'm.room.member'),
  // ...
]
```

### XRPL Integration

The template includes utilities for working with the XRP Ledger. You can customize the endpoints in the `API_URLS` configuration or extend the functionality to support additional XRPL features.

## Deployment

This widget template can be deployed to any static hosting service. After building the project with `npm run build`, you can deploy the contents of the `build` directory to services like Netlify, Vercel, or GitHub Pages.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
