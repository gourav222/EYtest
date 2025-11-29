import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { NavItem } from "../../modules/module-a/pages";



const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
  const toggleItem = (itemName: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName);
    } else {
      newExpanded.add(itemName);
    }
    setExpandedItems(newExpanded);
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.name);
    const paddingLeft = level * 1.5;

    return (
      <div key={item.name} className="w-full">
        <div
          className={`flex items-center justify-between w-full px-4 py-3 text-white hover:bg-gray-700/80 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${
            level > 0 ? "bg-gray-800/50 hover:bg-gray-700/60" : "hover:shadow-md"
          }`}
          style={{ paddingLeft: `${paddingLeft + 1}rem` }}
          onClick={() => hasChildren && toggleItem(item.name)}
        >
          {item.path && !hasChildren ? (
            <span
              className="flex-1 text-sm font-medium hover:text-blue-300 transition-colors"
              onClick={() => item.path && navigate(item.path)}
            >
              {item.name}
            </span>
          ) : (
            <span className="flex-1 text-sm font-semibold">{item.name}</span>
          )}
          {hasChildren && (
            <span className="text-xs transition-transform duration-200">{isExpanded ? "▼" : "▶"}</span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="w-full mt-1">
            {item.children?.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className="fixed left-0 top-[90px] h-[calc(100vh-90px)] w-64 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl overflow-y-auto border-r border-gray-700"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="py-6">
        <div className="px-6 mb-6">
          <h2 className="text-white text-xl font-bold mb-1">Navigation</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>
        <nav className="w-full px-2">
          {navItems.map((item) => renderNavItem(item))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
