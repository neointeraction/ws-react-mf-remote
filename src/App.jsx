import React from "react";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

import "./index.css";
import Dashboard from "./pages/Dashboard/Dashboard";

const theme = createTheme({
  /** Your theme override here */
});

const App = () => (
  <MantineProvider theme={theme} defaultColorScheme="light">
    <div>
      <Dashboard />
    </div>
  </MantineProvider>
);

export default App;
