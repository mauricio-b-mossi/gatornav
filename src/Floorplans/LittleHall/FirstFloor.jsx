import React from "react";

export default function FirstFloor({
  floorData,
  floorNumber = 1,
  source,
  dest,
}) {
  if (!floorData) {
    return (
      <div className="text-red-500">
        Floor data not available for floor {floorNumber}.
      </div>
    );
  }


  const roomLabels = floorData.rooms.reduce((acc, room) => {
    if (room && room.id && room.number) {
      acc[room.id] = room.number;
    }
    return acc;
  }, {});

  const isHighlighted = (id) => id === source || id === dest;

  // --- Style Definitions ---
  const baseTspanStyle = {
    strokeWidth: 0.1,
    fill: "#000000",
    stroke: "#000000",
  };
  const baseEntranceTspanStyle = {
    strokeWidth: 0,
    fill: "#1a1a1a",
    stroke: "#1a1a1a",
  };
  const baseTextStyle = {
    // Style for room number text
    fontSize: "2.11667px",
    fontFamily: "Arial",
    textAlign: "start",
    writingMode: "lr-tb",
    direction: "ltr",
    textAnchor: "start",
    fill: "#000000",
    stroke: "#000000",
    strokeWidth: 0.1,
    strokeDasharray: "none",
  };
  const baseEntranceTextStyle = {
    // Style for entrance text wrappers
    fontSize: "2.11666px",
    textAlign: "start",
    writingMode: "lr-tb",
    direction: "ltr",
    textAnchor: "start",
    fill: "#1a1a1a",
    stroke: "#1a1a1a",
    strokeWidth: 0,
  };
  const baseStairStyle = { fill: "#000000" };
  const baseRoomPathStyle = {
    fill: "none",
    stroke: "#000000",
    strokeWidth: 0.1,
  };
  const baseFloorPathStyle = {
    fill: "#ffffff",
    stroke: "#000000",
    strokeWidth: 0.264583,
  };
  const baseBathroomStyle = {
    fill: "#ffffff",
    stroke: "#000000",
    strokeWidth: 0.60625 * 0.096,
  }; // Adjusted stroke width for scale

  // --- Dynamic Style Functions ---
  const getTspanStyle = (id, isEntrance = false) => ({
    ...(isEntrance ? baseEntranceTspanStyle : baseTspanStyle),
    ...(isHighlighted(id) && { fill: "red", fontWeight: "bold" }),
  });

  const getPathStyle = (id) => ({
    ...baseRoomPathStyle,
    ...(isHighlighted(id) && {
      stroke: "red",
      fill: "#fee2e2",
      strokeWidth: "0.3",
    }), // Thicker stroke on highlight
  });

  const getStairStyle = (id) => ({
    ...baseStairStyle,
    ...(isHighlighted(id) && { fill: "red" }), // Change fill color on highlight
  });

  const getBathroomStyle = (id) => ({
    ...baseBathroomStyle,
    ...(isHighlighted(id) && {
      stroke: "red",
      fill: "#fee2e2",
      strokeWidth: 0.60625 * 0.096 * 2,
    }), // Thicker stroke on highlight
  });

  // Custom IDs mapped from data for elements needing unique identification
  const bathroomMenEastId = "bathroom-men-east";
  const bathroomUnisexRightId = "bathroom-unisex-right";

  return (
    <svg
      viewBox="0 0 205.03551 81.147484"
      version="1.1"
      id="svg1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsSvg="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs id="defs1" />
      {/* --- Floor Outline --- */}
      <g
        id="layer4"
        transform="translate(-2.2220768,-6.1970421)"
        style={{ display: "inline" }}
      >
        <path
          style={baseFloorPathStyle}
          d="m 12.93151,17.760156 v 7.276042 H 5.4239583 v 43.821614 h 9.3265627 v 8.334375 h 16.701822 v 7.077604 h 14.485938 v -7.309115 h 15.31276 v 6.779948 h 13.626041 v -6.91224 h 14.353646 v 7.309115 h 34.296612 v -7.540625 h 13.75834 v 7.540625 h 12.99765 v -7.672917 h 16.66875 v 7.309115 h 13.98984 v -7.209896 h 12.63386 V 68.49401 h 10.31875 V 24.242448 H 193.47656 V 16.767969 H 180.6112 V 9.5580728 h -15.31276 v 7.6067712 h -12.7 V 9.3927082 H 136.75651 V 17.297135 H 123.06432 V 9.3596353 H 88.470051 V 17.793229 H 74.810937 V 9.5911457 H 59.432031 V 18.123958 H 45.47526 V 9.888802 H 31.154687 v 7.838281 z"
          id="little-hall-floor-plan"
        />
      </g>

      {/* --- Right Stairs --- */}
      <g
        id="right-stairs"
        transform="matrix(1,0,0,1.0130268,187.67291,-7.0809043)"
        style={{ display: "inline" }}
      >
        <g
          style={getStairStyle("right-stairs")}
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,63.06524)"
        >
          <polygon points="364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 " />
          <rect
            x="-36.522999"
            y="155.536"
            transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
            width="454.36301"
            height="34.861"
          />
        </g>
        <g
          style={getStairStyle("right-stairs")}
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,26.957128)"
        >
          <polygon points="364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 " />
          <rect
            x="-36.522999"
            y="155.536"
            transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
            width="454.36301"
            height="34.861"
          />
        </g>
      </g>

      {/* --- Center Stairs --- */}
      <g
        id="center-stairs"
        transform="matrix(0.66130609,0,0,0.66992079,96.122448,8.907997)"
      >
        <g
          style={getStairStyle("center-stairs")}
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,63.06524)"
        >
          <polygon points="268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 " />
          <rect
            x="-36.522999"
            y="155.536"
            transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
            width="454.36301"
            height="34.861"
          />
        </g>
        <g
          style={getStairStyle("center-stairs")}
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,26.957128)"
        >
          <polygon points="268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 " />
          <rect
            x="-36.522999"
            y="155.536"
            transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
            width="454.36301"
            height="34.861"
          />
        </g>
      </g>

      {/* --- Left Stairs --- */}
      <g
        id="left-stairs"
        transform="matrix(1,0,0,1.0130268,-2.2220768,-7.0809043)"
      >
        <g
          style={getStairStyle("left-stairs")}
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,63.06524)"
        >
          <polygon points="414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 " />
          <rect
            x="-36.522999"
            y="155.536"
            transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
            width="454.36301"
            height="34.861"
          />
        </g>
        <g
          style={getStairStyle("left-stairs")}
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,26.957128)"
        >
          <polygon points="414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 " />
          <rect
            x="-36.522999"
            y="155.536"
            transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
            width="454.36301"
            height="34.861"
          />
        </g>
      </g>

      {/* --- Entrances (Conditional Display & Updated IDs) --- */}
      {floorNumber === 1 && floorData.entranceIdMap && (
        <React.Fragment>
          {/* Map "north-entrance" to text27 */}
          <text
            xmlSpace="preserve"
            style={baseEntranceTextStyle}
            x="95.2743"
            y="1.6081656"
            id="north-entrance"
          >
            <tspan
              style={getTspanStyle("north-entrance", true)}
              x="95.2743"
              y="1.6081656"
            >
              North Entrance
            </tspan>
          </text>
          {/* Map "south-entrance" to text28 */}
          <text
            xmlSpace="preserve"
            style={baseEntranceTextStyle}
            x="95.158546"
            y="81.115448"
            id="south-entrance"
          >
            <tspan
              style={getTspanStyle("south-entrance", true)}
              x="95.158546"
              y="81.115448"
            >
              South Entrance
            </tspan>
          </text>
          {/* Map "west-entrance" to text29 */}
          <text
            xmlSpace="preserve"
            style={baseEntranceTextStyle}
            x="-48.440506"
            y="1.5389194"
            id="west-entrance"
            transform="rotate(-90)"
          >
            <tspan
              style={getTspanStyle("west-entrance", true)}
              x="-48.440506"
              y="1.5389194"
            >
              West Entrance
            </tspan>
          </text>
          {/* Map "east-entrance" to text30 */}
          <text
            xmlSpace="preserve"
            style={baseEntranceTextStyle}
            x="33.429558"
            y="-203.49658"
            id="east-entrance"
            transform="rotate(90)"
          >
            <tspan
              style={getTspanStyle("east-entrance", true)}
              x="33.429558"
              y="-203.49658"
            >
              East Entrance
            </tspan>
          </text>
        </React.Fragment>
      )}

      {/* --- Rooms (Updated IDs: room1-room8) --- */}
      <g id="layer11">
        {/* Room 6 (Top-Right) */}
        <g id="room6">
          <path
            d="m 154.98486,23.741703 v 33.751945 h 33.50338 V 23.741703 Z"
            style={getPathStyle("room6")}
            id="path74"
          />
          <text
            xmlSpace="preserve"
            style={baseTextStyle}
            x="169.98213"
            y="41.378353"
            id="text75"
          >
            <tspan style={getTspanStyle("room6")} x="169.98213" y="41.378353">
              {roomLabels["room6"] || "..."}
            </tspan>
          </text>
        </g>
        {/* Room 5 (Bottom-Right) */}
        <g id="room5">
          <path
            d="m 121.48096,23.741703 v 33.751945 h 33.5039 V 23.741703 Z"
            style={getPathStyle("room5")}
            id="path73"
          />
          <text
            xmlSpace="preserve"
            style={baseTextStyle}
            x="136.47849"
            y="41.378353"
            id="text74"
          >
            <tspan style={getTspanStyle("room5")} x="136.47849" y="41.378353">
              {roomLabels["room5"] || "..."}
            </tspan>
          </text>
        </g>
        {/* Left Group Rooms (Updated IDs) */}
        <g id="left-group" transform="translate(0,0.04392005)">
          {/* Room 4 (Bottom-Center-Right) */}
          <g id="room4">
            <path
              d="M 86.029374,40.573751 H 62.878333 v 17.733801 h 23.151041 z"
              style={getPathStyle("room4")}
              id="path12"
            />
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="72.699432"
              y="50.201328"
              id="text47"
            >
              <tspan style={getTspanStyle("room4")} x="72.699432" y="50.201328">
                {roomLabels["room4"] || "..."}
              </tspan>
            </text>
          </g>
          {/* Room 3 (Bottom-Center-Left) */}
          <g id="room3">
            <path
              d="M 62.878333,58.307552 V 40.573751 H 39.727291 v 17.733801 z"
              style={getPathStyle("room3")}
              id="path13"
            />
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="49.548393"
              y="50.201328"
              id="text46"
            >
              <tspan style={getTspanStyle("room3")} x="49.548393" y="50.201328">
                {roomLabels["room3"] || "..."}
              </tspan>
            </text>
          </g>
          {/* Room 2 (Bottom-Left) */}
          <g id="room2">
            <path
              d="M 39.727291,58.307552 V 40.573751 H 16.576249 v 17.733801 z"
              style={getPathStyle("room2")}
              id="path14"
            />
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="26.397352"
              y="50.201328"
              id="text45"
            >
              <tspan style={getTspanStyle("room2")} x="26.397352" y="50.201328">
                {roomLabels["room2"] || "..."}
              </tspan>
            </text>
          </g>
          {/* Room 7 (Top-Center-Right) */}
          <g id="room7">
            <path
              d="M 62.878333,22.83995 V 40.573751 H 86.029374 V 22.83995 Z"
              style={getPathStyle("room7")}
              id="path11"
            />
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="72.699432"
              y="32.467529"
              id="text44"
            >
              <tspan style={getTspanStyle("room7")} x="72.699432" y="32.467529">
                {roomLabels["room7"] || "..."}
              </tspan>
            </text>
          </g>
          {/* Room 8 (Top-Center-Left) */}
          <g id="room8">
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="49.548393"
              y="32.467529"
              id="text43"
            >
              <tspan style={getTspanStyle("room8")} x="49.548393" y="32.467529">
                {roomLabels["room8"] || "..."}
              </tspan>
            </text>
            <path
              d="M 39.727291,22.83995 V 40.573751 H 62.878333 V 22.83995 Z"
              style={getPathStyle("room8")}
              id="path10"
            />
          </g>
          {/* Room 1 (Top-Left) */}
          <g id="room1">
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="26.397352"
              y="32.467529"
              id="text42"
            >
              <tspan style={getTspanStyle("room1")} x="26.397352" y="32.467529">
                {roomLabels["room1"] || "..."}
              </tspan>
            </text>
            <path
              d="M 16.576249,22.83995 V 40.573751 H 39.727291 V 22.83995 Z"
              style={getPathStyle("room1")}
              id="path9"
            />
          </g>
        </g>
      </g>

      {/* --- Bathrooms (Updated Mapping for duplicates) --- */}
      <g
        id="bathroom-women"
        transform="matrix(0.09599231,0,0,0.09599231,167.63727,4.8499421)"
      >
        <path
          d="m 7.7773759,56.04113 c -1.7762501,0 -3.2175003,-1.44 -3.2175003,-3.2175 V 7.7773761 c 0,-1.7775001 1.4412502,-3.2175002 3.2175003,-3.2175002 H 52.82488 c 1.77625,0 3.21625,1.4400001 3.21625,3.2175002 V 52.82363 c 0,1.7775 -1.44,3.2175 -3.21625,3.2175 z"
          style={getBathroomStyle("bathroom-women")}
        />
        <path
          d="m 30.307377,14.856128 c 1.775,0 3.215,-1.43875 3.215,-3.215 0,-1.7762504 -1.44,-3.2150005 -3.215,-3.2150005 -1.775,0 -3.215,1.4387501 -3.215,3.2150005 0,1.77625 1.44,3.215 3.215,3.215"
          style={{ fill: "#000000", fillOpacity: 1 }}
        />
        <path
          d="m 34.731127,21.608628 2.4975,9.325001 h 2.41125 l -1.94375,-11.030001 c -0.30125,-1.69625 -1.56375,-3.145 -3.345,-3.5875 -1.295,-0.3225 -2.65,-0.49625 -4.04375,-0.49625 -1.39375,0 -2.748751,0.17375 -4.043751,0.49625 -1.78125,0.4425 -3.045,1.89125 -3.345,3.5875 l -1.94375,11.030001 h 2.41125 l 2.4975,-9.325001 1.005,3.74875 c -2.3075,3.431251 -3.655,7.561251 -3.655,12.007501 h 4.19125 l 1.265001,14.458751 h 3.235 l 1.26375,-14.458751 h 4.1925 c 0,-4.44625 -1.34625,-8.5775 -3.655,-12.008751 l 1.005,-3.7475"
          style={{ fill: "#000000", fillOpacity: 1 }}
        />
      </g>
      <g
        id="bathroom-men"
        transform="matrix(0.09599231,0,0,0.09599231,33.302646,70.939966)"
      >
        <path
          d="m 7.7773759,56.04113 c -1.7775001,0 -3.2175003,-1.44 -3.2175003,-3.2175 V 7.7773761 c 0,-1.7775001 1.4400002,-3.2175002 3.2175003,-3.2175002 H 52.82363 c 1.7775,0 3.2175,1.4400001 3.2175,3.2175002 V 52.82363 c 0,1.7775 -1.44,3.2175 -3.2175,3.2175 z"
          style={getBathroomStyle("bathroom-men")}
        />
        <path
          d="m 30.284878,14.694878 c 1.77625,0 3.2175,-1.44 3.2175,-3.21625 0,-1.7775004 -1.44125,-3.2175005 -3.2175,-3.2175005 -1.77625,0 -3.21625,1.4400001 -3.21625,3.2175005 0,1.77625 1.44,3.21625 3.21625,3.21625"
          style={{ fill: "#000000", fillOpacity: 1 }}
        />
        <path
          d="m 35.113628,16.102378 c -1.565,-0.29 -3.18,-0.4425 -4.82875,-0.4425 -1.650001,0 -3.263751,0.1525 -4.828751,0.4425 -2.65,0.49 -4.46875,2.875 -4.3275,5.49625 l 0.59875,11.105001 h 2.60625 V 22.088628 h 0.805 v 29.591253 h 3.5375 l 1.287501,-18.333752 h 0.64375 l 1.285,18.333752 h 3.53875 V 22.088628 h 0.805 v 10.615001 h 2.60625 l 0.59875,-11.105001 c 0.14,-2.62125 -1.67875,-5.00625 -4.3275,-5.49625"
          style={{ fill: "#000000", fillOpacity: 1 }}
        />
      </g>
      {/* Use SVG ID directly for the first unisex */}
      <g
        id="bathroom-unisex"
        transform="matrix(0.09606147,0,0,0.09606147,61.99557,4.8478465)"
      >
        <path
          d="m 7.7936259,56.02238 c -1.7750001,0 -3.2150003,-1.43875 -3.2150003,-3.215 V 7.7936261 c 0,-1.7762501 1.4400002,-3.2150002 3.2150003,-3.2150002 H 52.80863 c 1.775,0 3.21375,1.4387501 3.21375,3.2150002 V 52.80738 c 0,1.77625 -1.43875,3.215 -3.21375,3.215 z"
          style={getBathroomStyle("bathroom-unisex")}
        />
        <path
          d="m 17.666126,17.349878 c 1.4875,0 2.695,-1.20625 2.695,-2.695 0,-1.48875 -1.2075,-2.695 -2.695,-2.695 -1.48875,0 -2.695,1.20625 -2.695,2.695 0,1.48875 1.20625,2.695 2.695,2.695"
          style={{ fill: "#000000" }}
        />
        <path
          d="m 42.861127,17.334878 c 1.48875,0 2.69625,-1.20625 2.69625,-2.695 0,-1.49 -1.2075,-2.69625 -2.69625,-2.69625 -1.48875,0 -2.69625,1.20625 -2.69625,2.69625 0,1.48875 1.2075,2.695 2.69625,2.695"
          style={{ fill: "#000000" }}
        />
        <path
          d="m 46.908628,18.514878 c -1.3125,-0.2425 -2.665,-0.37125 -4.0475,-0.37125 -1.3825,0 -2.735001,0.12875 -4.047501,0.37125 -2.22,0.41125 -3.74375,2.41 -3.62625,4.605 l 0.50125,9.307501 h 2.185 v -8.895001 h 0.67375 V 48.33363 h 2.966251 l 1.07875,-15.366251 h 0.53875 l 1.07875,15.366251 h 2.965 V 23.532378 h 0.67375 v 8.895001 h 2.185 l 0.50125,-9.307501 c 0.11875,-2.195 -1.40625,-4.19375 -3.62625,-4.605"
          style={{ fill: "#000000" }}
        />
        <path
          d="m 23.466126,30.824879 h 2.0225 l -1.63,-9.243751 c -0.25125,-1.4225 -1.31125,-2.63625 -2.8025,-3.0075 -1.08625,-0.27 -2.22125,-0.415 -3.39,-0.415 -1.168751,0 -2.305001,0.145 -3.390001,0.415 -1.4925,0.37125 -2.55125,1.585 -2.8025,3.0075 l -1.6300001,9.243751 h 2.0212501 l 2.09375,-7.815001 0.8425,3.141251 c -1.935,2.87625 -3.065,6.3375 -3.065,10.0625 h 3.51375 l 1.06125,12.120001 h 2.710001 l 1.06,-12.120001 h 3.51375 c 0,-3.725 -1.13,-7.1875 -3.06375,-10.0625 l 0.8425,-3.141251 2.0925,7.815001"
          style={{ fill: "#000000" }}
        />
        <path
          d="M 29.014876,12.188628 V 48.33363 h 2.572501 V 12.188628 Z"
          style={{ fill: "#000000" }}
        />
      </g>
      {/* Map custom ID to g66 for second men's room */}
      <g
        id={bathroomMenEastId}
        transform="matrix(0.09599231,0,0,0.09599231,168.56775,70.939966)"
      >
        <path
          d="m 7.7773759,56.04113 c -1.7775001,0 -3.2175003,-1.44 -3.2175003,-3.2175 V 7.7773761 c 0,-1.7775001 1.4400002,-3.2175002 3.2175003,-3.2175002 H 52.82363 c 1.7775,0 3.2175,1.4400001 3.2175,3.2175002 V 52.82363 c 0,1.7775 -1.44,3.2175 -3.2175,3.2175 z"
          style={getBathroomStyle(bathroomMenEastId)}
        />
        <path
          d="m 30.284878,14.694878 c 1.77625,0 3.2175,-1.44 3.2175,-3.21625 0,-1.7775004 -1.44125,-3.2175005 -3.2175,-3.2175005 -1.77625,0 -3.21625,1.4400001 -3.21625,3.2175005 0,1.77625 1.44,3.21625 3.21625,3.21625"
          style={{ fill: "#000000" }}
        />
        <path
          d="m 35.113628,16.102378 c -1.565,-0.29 -3.18,-0.4425 -4.82875,-0.4425 -1.650001,0 -3.263751,0.1525 -4.828751,0.4425 -2.65,0.49 -4.46875,2.875 -4.3275,5.49625 l 0.59875,11.105001 h 2.60625 V 22.088628 h 0.805 v 29.591253 h 3.5375 l 1.287501,-18.333752 h 0.64375 l 1.285,18.333752 h 3.53875 V 22.088628 h 0.805 v 10.615001 h 2.60625 l 0.59875,-11.105001 c 0.14,-2.62125 -1.67875,-5.00625 -4.3275,-5.49625"
          style={{ fill: "#000000" }}
        />
      </g>
      {/* Map custom ID to g72 for second unisex bathroom */}
      <g id={bathroomUnisexRightId}>
        <g transform="matrix(0.09606147,0,0,0.09606147,139.0761,4.8478465)">
          <path
            d="m 7.7936259,56.02238 c -1.7750001,0 -3.2150003,-1.43875 -3.2150003,-3.215 V 7.7936261 c 0,-1.7762501 1.4400002,-3.2150002 3.2150003,-3.2150002 H 52.80863 c 1.775,0 3.21375,1.4387501 3.21375,3.2150002 V 52.80738 c 0,1.77625 -1.43875,3.215 -3.21375,3.215 z"
            style={getBathroomStyle(bathroomUnisexRightId)}
          />
          <path
            d="m 17.666126,17.349878 c 1.4875,0 2.695,-1.20625 2.695,-2.695 0,-1.48875 -1.2075,-2.695 -2.695,-2.695 -1.48875,0 -2.695,1.20625 -2.695,2.695 0,1.48875 1.20625,2.695 2.695,2.695"
            style={{ fill: "#000000" }}
          />
          <path
            d="m 42.861127,17.334878 c 1.48875,0 2.69625,-1.20625 2.69625,-2.695 0,-1.49 -1.2075,-2.69625 -2.69625,-2.69625 -1.48875,0 -2.69625,1.20625 -2.69625,2.69625 0,1.48875 1.2075,2.695 2.69625,2.695"
            style={{ fill: "#000000" }}
          />
          <path
            d="m 46.908628,18.514878 c -1.3125,-0.2425 -2.665,-0.37125 -4.0475,-0.37125 -1.3825,0 -2.735001,0.12875 -4.047501,0.37125 -2.22,0.41125 -3.74375,2.41 -3.62625,4.605 l 0.50125,9.307501 h 2.185 v -8.895001 h 0.67375 V 48.33363 h 2.966251 l 1.07875,-15.366251 h 0.53875 l 1.07875,15.366251 h 2.965 V 23.532378 h 0.67375 v 8.895001 h 2.185 l 0.50125,-9.307501 c 0.11875,-2.195 -1.40625,-4.19375 -3.62625,-4.605"
            style={{ fill: "#000000" }}
          />
          <path
            d="m 23.466126,30.824879 h 2.0225 l -1.63,-9.243751 c -0.25125,-1.4225 -1.31125,-2.63625 -2.8025,-3.0075 -1.08625,-0.27 -2.22125,-0.415 -3.39,-0.415 -1.168751,0 -2.305001,0.145 -3.390001,0.415 -1.4925,0.37125 -2.55125,1.585 -2.8025,3.0075 l -1.6300001,9.243751 h 2.0212501 l 2.09375,-7.815001 0.8425,3.141251 c -1.935,2.87625 -3.065,6.3375 -3.065,10.0625 h 3.51375 l 1.06125,12.120001 h 2.710001 l 1.06,-12.120001 h 3.51375 c 0,-3.725 -1.13,-7.1875 -3.06375,-10.0625 l 0.8425,-3.141251 2.0925,7.815001"
            style={{ fill: "#000000" }}
          />
          <path
            d="M 29.014876,12.188628 V 48.33363 h 2.572501 V 12.188628 Z"
            style={{ fill: "#000000" }}
          />
        </g>
      </g>
    </svg>
  );
}
