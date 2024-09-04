import { QueryClient } from "react-query";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client"
import { AuthProvider } from "./context/authContext";
import { QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
