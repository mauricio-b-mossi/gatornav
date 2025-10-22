export const buildingData = {
  'LIT': {
    name: 'Little Hall',
    location: 'University of Florida, Little Hall, Gainesville, FL',
    entrances: ['Main (North)', 'West Plaza', 'East Courtyard'],
    floors: {
      '1': {
        // A simplified representation of the first floor layout
        svgViewBox: "0 0 300 200",
        rooms: [
          { id: '101', label: '101', x: 40, y: 165 },
          { id: '103', label: '103', x: 80, y: 165 },
          { id: '105', label: '105', x: 120, y: 165 },
          { id: '109', label: '109', x: 160, y: 165 },
          { id: '121', label: '121', x: 250, y: 165 },
          { id: '110', label: '110', x: 250, y: 35 },
        ],
        // Pre-defined SVG paths from entrances to rooms
        paths: {
          'Main (North)': {
            '101': "M 150 10 L 150 140 L 40 140",
            '103': "M 150 10 L 150 140 L 80 140",
            '105': "M 150 10 L 150 140 L 120 140",
            '109': "M 150 10 L 150 140 L 160 140",
            '121': "M 150 10 L 150 140 L 250 140",
            '110': "M 150 10 L 150 60 L 250 60",
          },
          'West Plaza': {
            '101': "M 10 100 L 40 100 L 40 140",
            '103': "M 10 100 L 80 100 L 80 140",
            '105': "M 10 100 L 120 100 L 120 140",
            '109': "M 10 100 L 160 100 L 160 140",
            '121': "M 10 100 L 250 100 L 250 140",
            '110': "M 10 100 L 100 100 L 100 60 L 250 60",
          },
           'East Courtyard': {
            '101': "M 290 100 L 180 100 L 180 140 L 40 140",
            '103': "M 290 100 L 180 100 L 180 140 L 80 140",
            '105': "M 290 100 L 180 100 L 180 140 L 120 140",
            '109': "M 290 100 L 180 100 L 180 140 L 160 140",
            '121': "M 290 100 L 250 100 L 250 140",
            '110': "M 290 100 L 250 100 L 250 60",
          },
        },
        elements: [ // Hallways, stairs, etc.
            { type: 'path', d: "M 30 150 L 270 150", stroke: '#9ca3af', strokeWidth: '15'}, // Main Hallway
            { type: 'path', d: "M 150 15 L 150 150", stroke: '#9ca3af', strokeWidth: '15'}, // North Hallway
            { type: 'path', d: "M 250 40 L 250 150", stroke: '#9ca3af', strokeWidth: '15'}, // East Hallway
            { type: 'rect', x: 5, y: 90, width: 20, height: 20, fill: '#d1d5db', label: 'Stairs' },
            { type: 'rect', x: 275, y: 90, width: 20, height: 20, fill: '#d1d5db', label: 'Elev' }
        ]
      }
    }
  },
  // Add other buildings like 'CSE' here in the future
};