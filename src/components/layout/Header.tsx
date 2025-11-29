import Logo from "../../assets/svg/logo";
const headerItems = [
  {
    name: "Insights",
  },
  {
    name: "Service",
  },
  {
    name: "Industries",
  },
  {
    name: "Career",
  },
  {
    name: "About US",
  },
];

const Header = () => {
  return (
    <div
      className="w-full h-[90px] align-center flex"
      style={{ backgroundColor: "#2e3330" }}
    >
      <div className="p-3 flex flex-row items-center gap-10">
        <div>
          <Logo />
        </div>

        <div className="flex gap-4 items-center justify-center flex-row mt-8 cursor-pointer">
          {headerItems.map((item) => (
            <div key={item.name} className="p-2">
              <span className="text-white text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
