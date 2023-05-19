/* eslint-disable react/jsx-key */
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
// import { routes } from "./routes/routes";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import "./app.css";
import Basket from "./pages/public/Basket";
import Register from "./pages/public/Register";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {/* {routes &&
            routes.map((item) => {
              return <Route path={item.path} element={item.element} />;
            })} */}

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
