import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { FetchProvider } from "./context/FetchContext";
import { BotonProvider } from "./context/BotonContext";
import AppRoutes from "./Routes";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <FetchProvider>
        <BotonProvider>
          <AppRoutes />
        </BotonProvider>
      </FetchProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
