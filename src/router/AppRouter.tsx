import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Header from "../components/layout/Header.tsx";
import ModuleRouter from "./ModuleRouter.tsx";

const AppRouter = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="w-full h-full m-0 p-0 flex flex-col gap-8">
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:moduleId/*" element={<ModuleRouter />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
