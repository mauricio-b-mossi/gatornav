import { useState } from "react";
import { buildingData } from "../../buildingData";

const InteriorScreen = ({ selectedClass, onBack }) => {
  const [selectedEntrance, setSelectedEntrance] = useState(null);
  const building = buildingData[selectedClass.prefix];
  
  // For now, we assume the floor is '1' based on room number. A real app would parse this.
  const floorNumber = selectedClass.room.toString().charAt(0);
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

  const pathData = selectedEntrance ? floor.paths[selectedEntrance]?.[selectedClass.room] : null;
  const targetRoom = floor.rooms.find(r => r.id === selectedClass.room);

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
                    {building.entrances.map(entrance => (
                        <button key={entrance} onClick={() => setSelectedEntrance(entrance)} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-50 transition border-2 border-transparent hover:border-blue-500">
                            <span className="text-xl font-semibold text-gray-700">{entrance}</span>
                        </button>
                    ))}
                </div>
            </div>
        ) : (
             <div className="max-w-4xl mx-auto">
                <p className="text-center mb-4">
                    Showing path from <span className="font-bold">{selectedEntrance}</span>. 
                    <button onClick={() => setSelectedEntrance(null)} className="ml-2 text-sm text-blue-600 hover:underline">(Change Entrance)</button>
                </p>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 aspect-3/2 w-full">
                    <svg viewBox={floor.svgViewBox} className="w-full h-full">
                        {/* Render building elements like hallways */}
                        {floor.elements.map((el, i) => {
                            if (el.type === 'path') return <path key={i} d={el.d} stroke={el.stroke} strokeWidth={el.strokeWidth} strokeLinecap="round" />;
                            if (el.type === 'rect') return <rect key={i} x={el.x} y={el.y} width={el.width} height={el.height} fill={el.fill} />;
                            return null;
                        })}

                        {/* Render all rooms */}
                        {floor.rooms.map(room => (
                            <g key={room.id}>
                                <rect x={room.x - 15} y={room.y - 12} width="30" height="18" fill={room.id === selectedClass.room ? "#2563eb" : "#e5e7eb"} rx="3"/>
                                <text x={room.x} y={room.y} textAnchor="middle" fontSize="8" fill={room.id === selectedClass.room ? "white" : "black"}>{room.label}</text>
                            </g>
                        ))}

                        {/* Render Navigation Path */}
                        {pathData && <path d={pathData} stroke="#ef4444" strokeWidth="2.5" fill="none" strokeDasharray="4 4" />}
                        
                        {/* Highlight Target Room */}
                        {targetRoom && (
                           <g>
                             <circle cx={targetRoom.x} cy={targetRoom.y + 2} r="10" fill="rgba(37, 99, 235, 0.3)" />
                             <circle cx={targetRoom.x} cy={targetRoom.y + 2} r="5" fill="#2563eb" />
                           </g>
                        )}
                    </svg>
                </div>
             </div>
        )}
    </div>
  );
};

export default InteriorScreen;

