export const buildingData = {
  LIT: {
    name: "Little Hall",
    location: "University of Florida, Little Hall, Gainesville, FL",
    entrances: ["Main (North)", "West Plaza", "East Courtyard"],
    floors: {
      1: {
        // Map room numbers to the IDs you will use in your SVG
        rooms: [
          { number: "101", id: "room-101" },
          { number: "102", id: "room-102" },
          { number: "103", id: "room-103" },
          { number: "104", id: "room-104" },
          { number: "105", id: "room-105" },
          { number: "106", id: "room-106" },
          { number: "107", id: "room-107" },
          { number: "108", id: "room-108" },
          { number: "109", id: "room-109" },
          { number: "110", id: "room-110" },
          { number: "111", id: "room-111" },
          { number: "112", id: "room-112" },
          { number: "113", id: "room-113" },
          { number: "114", id: "room-114" },
          { number: "115", id: "room-115" },
          { number: "116", id: "room-116" },
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
          { number: "201", id: "room-101" }, // SVG ID is room-101
          { number: "202", id: "room-102" }, // SVG ID is room-102
          { number: "203", id: "room-103" },
          { number: "204", id: "room-104" },
          { number: "205", id: "room-105" },
          { number: "206", id: "room-106" },
          { number: "207", id: "room-107" },
          { number: "208", id: "room-108" },
          { number: "209", id: "room-109" },
          { number: "210", id: "room-110" },
          { number: "211", id: "room-111" },
          { number: "212", id: "room-112" },
          { number: "213", id: "room-113" },
          { number: "214", id: "room-114" },
          { number: "215", id: "room-115" },
          { number: "216", id: "room-116" }, // SVG ID is room-116
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