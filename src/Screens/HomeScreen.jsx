import { useState, useEffect } from "react";
import { parseClassCode } from "../../helpers";

const HomeScreen = ({ onSearch }) => {
  const [classCode, setClassCode] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('gatornav_recent') || '[]');
    setRecentSearches(storedSearches);
  }, []);

  const handleSearch = () => {
    const parsed = parseClassCode(classCode);
    if (parsed) {
      onSearch(parsed);
      setError('');
    } else {
      setError('Invalid code. Use format like "LIT 101".'); // Note currently erroring on all those not supported (only LIT is supported)
    }
  };
  
  const handleRecentClick = (code) => {
      const parsed = parseClassCode(code);
      if(parsed) onSearch(parsed);
  }

  return (
    <div className="p-6 md:p-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">GatorNav</h1>
      <p className="text-lg text-gray-600 mb-8">Find your classroom, stress-free.</p>
      
      <div className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Enter class code (e.g., LIT 101)"
            className="grow w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {recentSearches.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Searches</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {recentSearches.map((search) => (
              <button
                key={search.fullCode}
                onClick={() => handleRecentClick(search.fullCode)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition"
              >
                {search.fullCode}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;