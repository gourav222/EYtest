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
    params: { id: "Hello from tab 2" },
  },
  {
    name: "Tab - 2",
    description: "My Name is John Doe",
    bgColor: "lightgreen",
    path: ROUTES.MODULE_A.HOME_1_TABS.TAB_2,
    params: { id: "Hello from tab 1" },
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
  // const location = useLocation();

  // const isTabSelected = location.pathname.includes("/tab-");

  return (
    <div className="w-full flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 ">
      {
        <div className="w-full  h-[200px] flex flex-row gap-16 px-8 border-b border-gray-200">
          {modules.map((module) => (
            // <Card
            //   key={module.name}
            //   title={module.name}
            //   description={module.description}
            //   bgColor={module.bgColor}
            //   onClick={() => navigate(module.path)}
            //   width="350px"
            //   height="400px"
            // />

            <div
              key={module.name}
              onClick={() => navigate(module.path)}
              className="w-[200px] border-2 h-[50px] flex justify-center items-center rounded-lg cursor-pointer hover:scale-105 transition-transform bg-white shadow-md"
            >
              <span>{module.name}</span>
            </div>
          ))}
        </div>
      }

      <div className="flex-1 p-8">
        <Routes>
          <Route path="tab-1" element={<Tab1 tabChange={modules[1].params}/>} />
          <Route path="tab-2" element={<Tab2 tabChange={modules[0].params}/>} />
          <Route path="tab-3" element={<Tab3 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home1;
