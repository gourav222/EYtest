import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
const modules = [
  {
    name: "Module A",
    description: "Patient In",
    bgColor: "lightblue",
    path: "/dashboard/module-a",
  },
  {
    name: "Module B",
    description: "Patient Out",
    bgColor: "lightgreen",
    path: "/dashboard/module-b",
  },
  {
    name: "Module C",
    description: "Reports",
    bgColor: "lightyellow",
    path: "/dashboard/module-c",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col m-0 p-0 items-center justify-center flex-col gap-4">
      <div className="h-[100%] w-[80%] flex flex-row gap-4">
        {modules.map((module) => (
          <Card
            key={module.name}
            title={module.name}
            description={module.description}
            bgColor={module.bgColor}
            onClick={() => navigate(module.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
