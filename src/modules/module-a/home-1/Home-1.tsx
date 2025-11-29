import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Card from "../../../components/ui/Card";
import { ROUTES } from "../../../router/routes";
import Tab1 from "./pages/Tab-1";
import Tab2 from "./pages/Tab-2";
import Tab3 from "./pages/Tab-3";

const modules = [
  {
    name: "Tab - 1",
    description: "Hello World",
    bgColor: "lightblue",
    path: ROUTES.MODULE_A.HOME_1_TABS.TAB_1,
  },
  {
    name: "Tab - 2",
    description: "My Name is John Doe",
    bgColor: "lightgreen",
    path: ROUTES.MODULE_A.HOME_1_TABS.TAB_2,
  },
  {
    name: "Tab - 3",
    description: "How are you?",
    bgColor: "lightyellow",
    path: ROUTES.MODULE_A.HOME_1_TABS.TAB_3,
  },
];

const Home1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isTabSelected = location.pathname.includes("/tab-");
  
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {!isTabSelected && (
        <div className="w-full min-h-[600px] flex flex-row gap-8 justify-center items-center px-8 py-12">
          {modules.map((module) => (
            <Card
              key={module.name}
              title={module.name}
              description={module.description}
              bgColor={module.bgColor}
              onClick={() => navigate(module.path)}
              width="350px"
              height="400px"
            />
          ))}
        </div>
      )}
      
      <div className="flex-1 p-8">
        <Routes>
          <Route path="tab-1" element={<Tab1 />} />
          <Route path="tab-2" element={<Tab2 />} />
          <Route path="tab-3" element={<Tab3 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home1;
