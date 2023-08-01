import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TrackingPage } from './page/TrackingPage';
import { SharedLayout } from './components/SharedLayout';
import { WarehousesPage } from './page/WarehusesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TrackingPage />} />
          <Route path='/warehouses' element={<WarehousesPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
