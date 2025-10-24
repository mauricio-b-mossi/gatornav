import FirstFloor from "./src/Floorplans/LittleHall/FirstFloor";
import SecondFloor from "./src/Floorplans/LittleHall/SecondFloor";

export const buildingData = {
  LIT: {
    name: "Little Hall",
    location: "University of Florida, Little Hall, Gainesville, FL",
    entrances: ["Main (North)", "West Plaza", "East Courtyard"],
    floors: {
      1: {
        map: FirstFloor,
        // Map room numbers to the NEW IDs (room1-room8) in counter-clockwise U-shape
        rooms: [
          { number: "0121", id: "room1" }, // Top-Left (was room11)
          { number: "0119", id: "room2" }, // Bottom-Left (was room21)
          { number: "0117", id: "room3" }, // Bottom-Center-Left (was room22)
          { number: "0113", id: "room4" }, // Bottom-Center-Right (was room23)
          { number: "0109", id: "room5" }, // Bottom-Right (was room2)
          { number: "0101", id: "room6" }, // Top-Right (was room1)
          { number: "0127", id: "room7" }, // Top-Center-Right (was room13)
          { number: "0125", id: "room8" }, // Top-Center-Left (was room12)
        ],

        // Map entrance/stair/bathroom names to the IDs you will use in your SVG
        entranceIdMap: {
          "North Entrance": "north-entrance",
          "South Entrance": "south-entrance",
          "East Entrance": "east-entrance",
          "West Entrance": "west-entrance",
        },
        bathrooms: [
          { id: "bathroom-men", name: "Men West" },
          { id: "bathroom-unisex", name: "Unisex Left" },
          { id: "bathroom-women", name: "Women East" },
          { id: "bathroom-men-east", name: "Men East" },
          { id: "bathroom-unisex-right", name: "Unisex Right" },
        ],
      },
      2: {
        map: SecondFloor,
        // Map room numbers to the NEW IDs (room1-room8)
        rooms: [
          { number: "0221", id: "room1" },
          { number: "0223", id: "room2" },
          { number: "0225", id: "room3" },
          { number: "0219", id: "room4" },
          { number: "0217", id: "room5" },
          { number: "0215", id: "room6" },
          { number: "0235", id: "room7" },
          { number: "0237", id: "room8" },
          { number: "0201", id: "room9" },
          { number: "0205", id: "room10" },
          { number: "0207", id: "room11" },
        ],

        // Map entrance names to the entrance IDs you will use in your SVG
        entranceIdMap: {
          "Left Staircase": "left-stairs",
          "Center Staircase": "center-stairs",
          "Right Staircase": "right-stairs",
        },
        bathrooms: [
          { id: "bathroom-men", name: "Men West" },
          { id: "bathroom-unisex", name: "Unisex Left" },
          { id: "bathroom-women", name: "Women East" },
          { id: "bathroom-men-east", name: "Men East" },
          { id: "bathroom-unisex-right", name: "Unisex Right" },
        ],
      },
    },
  },
};
