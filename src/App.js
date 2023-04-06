import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import React from "react";

const ContextProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider contexts={[AuthContextProvider, DarkModeProvider]}>
        <Navbar />
        <Outlet />
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
