import { Route, Routes } from "react-router-dom";
import Navbar from "../../../components/layout/Navbar";
import Home1 from "../../module-a/home-1/Home-1";
import Home2 from "../../module-a/home-2/Home-2";
import type { NavItem } from "../../module-a/pages";
import { ROUTES } from "../../../router/routes";
import Form1 from "../components/Form";

const navItems: NavItem[] = [
  {
    name: "Home",
    children: [
      { name: "Home 1", path: ROUTES.MODULE_A.HOME_1 },
      { name: "Home 2", path: ROUTES.MODULE_A.HOME_2 },
    ],
  },
  {
    name: "Form",
    children: [
      { name: "Form 1", path: ROUTES.MODULE_B.FORM_1 },
    ],
  },
];

const ModuleB = () => {

  return (
    <div className="flex" style={{borderWidth: 1, marginTop: -32}}>
      <Navbar navItems={navItems} />
      <div className="flex-1 ml-64">
        <Routes>
          <Route path="Form-1/*" element={<Form1 />} />
        </Routes>
      </div>
    </div>
  );
};

export default ModuleB;

