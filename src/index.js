import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NativeBaseProvider } from "native-base";
import "./index.css";
import Layout from "./Layout";

import reportWebVitals from "./reportWebVitals";
import PlayNow from "./pages/PlayNow";
import HomePage from "./pages/HomePage";
import MarketPlace from "./pages/MarketPlace/MarketPlace";

// const theme = extendTheme({
//   colors: {
//     // Add new color
//     primary: {
//       50: "#E3F2F9",
//       100: "#C5E4F3",
//       200: "#A2D4EC",
//       300: "#7AC1E4",
//       400: "#47A9DA",
//       500: "#0088CC",
//       600: "#007AB8",
//       700: "#006BA1",
//       800: "#005885",
//       900: "#003F5E",
//     },
//     // Redefinig only one shade, rest of the color will remain same.
//     amber: {
//       400: "#d97706",
//     },
//   },
//   config: {
//     // Changing initialColorMode to 'dark'
//     initialColorMode: "dark",
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider>
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
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
