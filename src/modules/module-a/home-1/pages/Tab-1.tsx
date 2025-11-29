const Tab1 = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Tab 1</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello World! Welcome to Tab 1.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab1;