import { useState } from "react";
import { buildingData } from "../../buildingData";
// Import your new component
import Floorplan from "./Floorplan"; 

const InteriorScreen = ({ selectedClass, onBack }) => {
  const [selectedEntrance, setSelectedEntrance] = useState(null);
  const building = buildingData[selectedClass.prefix];
  
  const floorNumber = parseInt(selectedClass.room.toString().charAt(0), 10);
  console.log(floorNumber)
  const floor = building.floors[floorNumber];

  if (!floor) {
    return (
        <div className="p-6 text-center">
            <button onClick={onBack} className="absolute top-4 left-4 text-blue-600 hover:underline">&larr; Back</button>
            <h2 className="text-2xl font-bold mb-4">Navigation Error</h2>
            <p className="text-red-500">Floor plan data for floor {floorNumber} is not available.</p>
        </div>
    );
  }
  
  // --- Find the ID of the target room (Destination) ---
  const targetRoom = floor.rooms.find(r => r.number === selectedClass.room);
  const targetRoomId = targetRoom ? targetRoom.id : null; // e.g., "room-101"

  // --- Find the ID of the selected entrance (Source) ---
  const entranceId = selectedEntrance ? floor.entranceIdMap[selectedEntrance] : null; // e.g., "north-entrance"
  
  // --- This component no longer needs getDynamicClassName() ---
  // --- Your new Floorplan component handles all styling! ---

  return (
    <div className="p-4 md:p-6">
        <button onClick={onBack} className="absolute top-4 left-4 text-blue-600 hover:underline">&larr; Back</button>
        <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedClass.building} - Floor {floorNumber}</h1>
            <p className="text-lg text-gray-600">Navigating to Room {selectedClass.room}</p>
        </div>

        {!selectedEntrance ? (
            <div>
                <h2 className="text-xl font-semibold text-center mb-4">Which entrance are you at?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {/* We use the 'entrances' array for the buttons, but the
                      'entranceIdMap' will be used to pass the ID to the SVG.
                    */}
                    {Object.keys(floor.entranceIdMap).map(entranceName => (
                        <button 
                          key={entranceName} 
                          onClick={() => setSelectedEntrance(entranceName)} 
                          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-50 transition border-2 border-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <span className="text-xl font-semibold text-gray-700">{entranceName}</span>
                        </button>
                    ))}
                </div>
            </div>
        ) : (
             <div className="max-w-4xl mx-auto">
                <p className="text-center mb-4">
                    Showing route from <span className="font-bold">{selectedEntrance}</span>. 
                    <button onClick={() => setSelectedEntrance(null)} className="ml-2 text-sm text-blue-600 hover:underline">(Change Entrance)</button>
                </p>
                
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full">
                   {/* Here we render your new component.
                     We pass the entire floor object as 'floorData'.
                     We pass the calculated 'entranceId' as 'source'.
                     We pass the calculated 'targetRoomId' as 'dest'.
                   */}
                   <Floorplan 
                     floorData={floor}
                     floorNumber={floorNumber}
                     source={entranceId}
                     dest={targetRoomId}
                     style={{ width: '100%', height: 'auto' }} 
                   />
                </div>
             </div>
        )}
    </div>
  );
};

export default InteriorScreen;
