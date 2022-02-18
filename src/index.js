import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NativeBaseProvider, extendTheme } from "native-base";
import "./index.css";
import Layout from "./Layout";

import reportWebVitals from "./reportWebVitals";
import PlayNow from "./pages/PlayNow";
import HomePage from "./pages/HomePage";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = extendTheme({
  fontConfig: {
    PixelFont: {
      100: {
        normal: "PixelFont",
        italic: "PixelFont",
      },
      200: {
        normal: "PixelFont",
        italic: "PixelFont",
      },
      300: {
        normal: "PixelFont",
        italic: "PixelFont",
      },
      400: {
        normal: "PixelFont",
        italic: "PixelFont",
      },
      500: {
        normal: "PixelFont",
      },
      600: {
        normal: "PixelFont",
        italic: "PixelFont",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "PixelFont",
    body: "PixelFont",
    mono: "PixelFont",
  },
  components: {
    Text: {
      baseStyle: {
        color: "white",
        lineHeight: "1em",
      },
    },
  },
});

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="marketplace" element={<MarketPlace />} />
            </Route>
            <Route path="play-now" element={<PlayNow />} />
          </Routes>
        </BrowserRouter>
      </NativeBaseProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
