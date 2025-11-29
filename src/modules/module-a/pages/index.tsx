import { Route, Routes } from "react-router-dom";
import Navbar from "../../../components/layout/Navbar";
import { ROUTES } from "../../../router/routes";
import Home1 from "../home-1/Home-1";
import Home2 from "../home-2/Home-2";

export type NavItem = {
  name: string;
  path?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    name: "Home",
    children: [
      { name: "Home 1", path: ROUTES.MODULE_A.HOME_1 },
      { name: "Home 2", path: ROUTES.MODULE_A.HOME_2 },
    ],
  },
];

const ModuleA = () => {
  return (
    <div className="flex">
      <Navbar navItems={navItems} />
      <div className="flex-1 ml-64">
        <Routes>
          <Route path="home-1/*" element={<Home1 />} />
          <Route path="home-2" element={<Home2 />} />
        </Routes>
      </div>
    </div>
  );
};

export default ModuleA;
