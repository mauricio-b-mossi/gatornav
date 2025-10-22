export const buildingData = {
  LIT: {
    name: "Little Hall",
    location: "University of Florida, Little Hall, Gainesville, FL",
    entrances: ["Main (North)", "West Plaza", "East Courtyard"],
    floors: {
      1: {
        // Map room numbers to the IDs you will use in your SVG
        rooms: [
          { number: "0101", id: "room-101" },
          { number: "0102", id: "room-102" },
          { number: "0103", id: "room-103" },
          { number: "0104", id: "room-104" },
          { number: "0105", id: "room-105" },
          { number: "0106", id: "room-106" },
          { number: "0107", id: "room-107" },
          { number: "0108", id: "room-108" },
          { number: "0109", id: "room-109" },
          { number: "0110", id: "room-110" },
          { number: "0111", id: "room-111" },
          { number: "0112", id: "room-112" },
          { number: "0113", id: "room-113" },
          { number: "0114", id: "room-114" },
          { number: "0115", id: "room-115" },
          { number: "0116", id: "room-116" },
        ],

        // Map entrance names to the entrance IDs you will use in your SVG
        entranceIdMap: {
          "North Entrance": "north-entrance",
          "South Entrance": "south-entrance",
          "East Entrance": "east-entrance",
          "West Entrance": "west-entrance"
        },
      },
      2: {
        // Map room numbers to the IDs you will use in your SVG
        // NOTE: The 'id' fields MUST match the static IDs in the SVG.
        // The 'number' field provides the dynamic label.
        rooms: [
          { number: "0201", id: "room-101" }, // SVG ID is room-101
          { number: "0202", id: "room-102" }, // SVG ID is room-102
          { number: "0203", id: "room-103" },
          { number: "0204", id: "room-104" },
          { number: "0205", id: "room-105" },
          { number: "0206", id: "room-106" },
          { number: "0207", id: "room-107" },
          { number: "0208", id: "room-108" },
          { number: "0209", id: "room-109" },
          { number: "0210", id: "room-110" },
          { number: "0211", id: "room-111" },
          { number: "0212", id: "room-112" },
          { number: "0213", id: "room-113" },
          { number: "0214", id: "room-114" },
          { number: "0215", id: "room-115" },
          { number: "0216", id: "room-116" }, // SVG ID is room-116
        ],

        // Map entrance names to the entrance IDs you will use in your SVG
        entranceIdMap: {
          "West Staircase": "west-stairs",
          "East Staircase": "east-stairs",
        },
      },
    },
  },
  // TODO: Add other buildings like 'CSE' here in the future
};