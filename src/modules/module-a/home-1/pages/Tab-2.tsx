const Tab2 = ({ tabChange }: { tabChange: { id: string } }) => {
  const { id } = tabChange;
  console.log("Tab2 received id:", id);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Tab 2</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            My Name is John Doe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab2;
