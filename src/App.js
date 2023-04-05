import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <DarkModeProvider>
          <Navbar />
          <Outlet />
        </DarkModeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
