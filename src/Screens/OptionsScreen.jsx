const OptionsScreen = ({
  selectedClass,
  onNavigate,
  onEnterBuilding,
  onBack,
}) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    selectedClass.location
  )}`;

  return (
    <div className="p-6 md:p-8 text-center">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 text-blue-600 hover:underline"
      >
        &larr; Back to Search
      </button>
      <h1 className="text-3xl font-bold text-gray-800">
        {selectedClass.fullCode}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Building: {selectedClass.building}
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto flex-1 bg-green-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg text-center"
        >
          Navigate to Building
        </a>
        <button
          onClick={onEnterBuilding}
          className="w-full md:w-auto flex-1 bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
        >
          I'm at the building
        </button>
      </div>
    </div>
  );
};

export default OptionsScreen;
