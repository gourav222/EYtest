import { useParams } from "react-router-dom";
import ModuleA from "../modules/module-a/pages";
import ModuleB from "../modules/module-b/pages";
import ModuleC from "../modules/module-c/pages";

const ModuleRouter = () => {
  const { moduleId } = useParams<{ moduleId: string }>();

  const moduleMap: Record<string, React.ComponentType> = {
    "module-a": ModuleA,
    "module-b": ModuleB,
    "module-c": ModuleC,
  };

  const ModuleComponent = moduleMap[moduleId || ""];

  if (!ModuleComponent) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Module not found</h1>
        <p>Module "{moduleId}" does not exist.</p>
      </div>
    );
  }

  return <ModuleComponent />;
};

export default ModuleRouter;
