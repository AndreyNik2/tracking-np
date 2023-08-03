import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TrackingPage } from "./page/TrackingPage";
import { SharedLayout } from "./components/SharedLayout";
import { WarehousesPage } from "./page/WarehusesPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TrackingPage />} />
          <Route path="/warehouses" element={<WarehousesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
