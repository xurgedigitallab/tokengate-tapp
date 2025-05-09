import React, { Suspense } from "react";
import { MuiWidgetApiProvider } from '@matrix-widget-toolkit/mui';
import { BrowserRouter } from 'react-router-dom';
import { WidgetParameter } from '@matrix-widget-toolkit/api';
import MatrixClientProvider from './components/MatrixClientProvider';
import { ThemeProvider } from "./context/ThemeContext";

function App({ widgetApiPromise }) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback={<></>}>
          <MuiWidgetApiProvider
            widgetApiPromise={widgetApiPromise}
            widgetRegistration={{
              name: 'TextRP Widget Template',
              type: 'com.example.widget',
              data: { title: 'TextRP Widget Template' },
              requiredParameters: [WidgetParameter.DeviceId],
            }}
          >
            <MatrixClientProvider />
          </MuiWidgetApiProvider>
        </Suspense>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
