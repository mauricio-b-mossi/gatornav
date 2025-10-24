import React from 'react';

export default function SecondFloor({
  floorData,
  floorNumber = 2,
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

  const isHighlighted = (idOrNumber) => {
    const roomNumber = roomLabels[idOrNumber]; // Check if the id corresponds to a room
    return idOrNumber === source || idOrNumber === dest || (roomNumber && (roomNumber === source || roomNumber === dest));
  }


  // --- Style Definitions ---
  const baseTspanStyle = {
    strokeWidth: 0.1,
    fill: "#000000",
    stroke: "#000000",
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
   // Style for condensed text (rooms 1-6)
  const condensedTextStyle = {
    ...baseTextStyle,
    fontStretch: "condensed",
    WebkitFontSpecification: "'Arial Condensed'",
    fill: "none" // Keep fill none for the <text> wrapper
  };
  const baseStairStyle = { fill: "#000000" };
  const baseRoomPathStyle = {
    fill: "none",
    stroke: "#000000",
    strokeWidth: 0.1,
    cursor: "pointer", // Keep cursor pointer
  };
  const baseFloorPathStyle = {
    fill: "#ffffff",
    stroke: "#000000",
    strokeWidth: 0.264583,
  };
  const baseBathroomStyle = {
    // Applied to the outer path of the bathroom group
    fill: "#ffffff",
    fillOpacity: 1,
    stroke: "#000000",
    strokeWidth: 0.60625, // Original width, SVG transform will scale it
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  };
  const baseBathroomIconStyle = { fill: '#000000', fillOpacity: 1, fillRule: "nonzero", stroke: "none" };


  // --- Dynamic Style Functions ---
  // Updated to use the element ID for highlighting check
  const getTspanStyle = (id) => {
      return {
          ...baseTspanStyle,
          ...(isHighlighted(id) && { fill: "red", fontWeight: "bold" }),
      };
  };

  // Updated to use the element ID for highlighting check
  const getPathStyle = (id) => {
      return {
          ...baseRoomPathStyle,
          ...(isHighlighted(id) && {
              stroke: "red",
              fill: "#fee2e2",
              strokeWidth: "0.3",
          }), // Thicker stroke on highlight
      };
  };


  const getStairStyle = (id) => ({
    ...baseStairStyle,
    ...(isHighlighted(id) && { fill: "red" }), // Change fill color on highlight
  });

  const getBathroomStyle = (id) => ({
    ...baseBathroomStyle,
    ...(isHighlighted(id) && {
      stroke: "red",
      fill: "#fee2e2",
      strokeWidth: 0.60625 * 2, // Thicker stroke
    }),
  });


  // IDs for bathrooms
  const bathroomMenId = "bathroom-men";
  const bathroomWomenId = "bathroom-women";
  const bathroomUnisexId = "bathroom-unisex";
  const bathroomMenEastId = "bathroom-men-east"; // Was g66

  // IDs for stairs
  const leftStairsId = "left-stairs";
  const centerStairsId = "center-stairs";
  const rightStairsId = "right-stairs";

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 198.73516 75.174736"
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
        transform="translate(-5.2916668,-9.2273438)"
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
        id={rightStairsId}
        transform="matrix(1,0,0,1.0130268,184.60332,-10.111206)"
        style={{ display: "inline" }}
      >
        <g
          style={getStairStyle(rightStairsId)}
          id="g33"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,63.06524)"
        >
                <polygon
                  points="364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 "
                  id="polygon30"
                />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect30"
                />
        </g>
        <g
          style={getStairStyle(rightStairsId)}
          id="g37"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,26.957128)"
        >
                <polygon
                  points="364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 "
                  id="polygon33"
                />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect33"
                />
        </g>
      </g>
      {/* --- Center Stairs --- */}
      <g
        id={centerStairsId}
        transform="matrix(0.66130609,0,0,0.66992079,93.052858,5.8776953)"
      >
        <g
          style={getStairStyle(centerStairsId)}
          id="g50"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,63.06524)"
        >
                <polygon
                  points="268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 "
                  id="polygon47"
                />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect47"
                />
        </g>
        <g
          style={getStairStyle(centerStairsId)}
          id="g54"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,26.957128)"
        >
                <polygon
                  points="268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 "
                  id="polygon50"
                />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect50"
                />
        </g>
      </g>
      {/* --- Left Stairs --- */}
      <g
        id={leftStairsId}
        transform="matrix(1,0,0,1.0130268,-5.2916668,-10.111206)"
      >
        <g
          style={getStairStyle(leftStairsId)}
          id="g10"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,63.06524)"
        >
                <polygon
                  points="414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 "
                  id="polygon1"
                />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect1"
                />
        </g>
        <g
          style={getStairStyle(leftStairsId)}
          id="g14"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,26.957128)"
        >
                <polygon
                  points="414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 "
                  id="polygon10"
                />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect10"
                />
        </g>
      </g>
      {/* --- Rooms and Bathrooms --- */}
      <g
        id="layer11"
        transform="translate(-3.0695901,-3.0303017)"
      >
        {/* --- Right Room Group --- */}
        <g
          id="right-group"
          style={{ display: "inline" }}
          transform="matrix(0.97835239,0,0,0.97835239,2.6117419,2.1761926)"
        >
          {/* Room 7 */}
          <g id="room7" onClick={() => onRoomClick(roomLabels["room7"])}>
            <path
              d="m 120.69806,21.133594 v 17.720365 h 34.51986 V 21.133594 Z"
              style={getPathStyle("room7")}
              id="path15"
            />
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="136.20357"
              y="30.754456"
              id="text55"
            >
              <tspan id="tspan55" style={getTspanStyle("room7")} x="136.20357" y="30.754456">
                {roomLabels["room7"] || '...'}
              </tspan>
            </text>
          </g>
          {/* Room 8 */}
          <g id="room8" onClick={() => onRoomClick(roomLabels["room8"])}>
            <path
              d="m 155.21792,21.133594 v 17.720365 h 34.51985 V 21.133594 Z"
              style={getPathStyle("room8")}
              id="path16"
            />
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="170.72343"
              y="30.754456"
              id="text56"
            >
              <tspan id="tspan56" style={getTspanStyle("room8")} x="170.72343" y="30.754456">
                {roomLabels["room8"] || '...'}
              </tspan>
            </text>
          </g>
          {/* Room 9 */}
          <g id="room9" onClick={() => onRoomClick(roomLabels["room9"])}>
            <path
              d="m 189.73777,38.853959 h -34.51985 v 17.720366 h 34.51985 z"
              style={getPathStyle("room9")}
              id="path17"
            />
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="170.72343"
              y="48.474819"
              id="text57"
            >
              <tspan id="tspan57" style={getTspanStyle("room9")} x="170.72343" y="48.474819">
                {roomLabels["room9"] || '...'}
              </tspan>
            </text>
          </g>
          {/* Room 10 */}
          <g id="room10" onClick={() => onRoomClick(roomLabels["room10"])}>
            <text
              xmlSpace="preserve"
              style={baseTextStyle}
              x="141.22324"
              y="48.474865"
              id="text58"
            >
              <tspan id="tspan58" style={getTspanStyle("room10")} x="141.22324" y="48.474865">
                 {roomLabels["room10"] || '...'}
              </tspan>
            </text>
            <path
              d="m 155.218,38.854186 h -24.48042 l 0.0956,17.720005 H 155.218 Z"
              style={getPathStyle("room10")}
              id="path80"
            />
          </g>
          {/* Room 11 */}
          <g id="room11" onClick={() => onRoomClick(roomLabels["room11"])}>
            <path
              d="m 130.83318,56.574191 -0.0956,-17.720005 h -10.03947 v 17.720005 z"
              style={{...getPathStyle("room11"), display: "inline"}}
              id="path81"
            />
            <text
              xmlSpace="preserve"
              style={{...baseTextStyle, fontSize: "2.1635px", strokeWidth: 0.102213}}
              x="123.97255"
              y="48.491695"
              id="text81"
            >
              <tspan
                style={{ ...getTspanStyle("room11"), strokeWidth: 0.102213 }}
                x="123.97255"
                y="48.491695"
                id="tspan82"
              >
                {roomLabels["room11"] || '...'}
              </tspan>
            </text>
          </g>
        </g>
        {/* --- Left Room Group --- */}
        <g id="left-group">
          {/* Room 6 */}
          <g id="room6" onClick={() => onRoomClick(roomLabels["room6"])}>
            <path
              d="M 86.029374,40.573751 H 62.878333 v 17.733801 h 23.151041 z"
              style={getPathStyle("room6")}
              id="path12"
            />
            <text
              xmlSpace="preserve"
              style={condensedTextStyle}
              x="72.699432"
              y="50.201328"
              id="text47"
            >
              <tspan id="tspan47" style={getTspanStyle("room6")} x="72.699432" y="50.201328">
                {roomLabels["room6"] || '...'}
              </tspan>
            </text>
          </g>
          {/* Room 5 */}
          <g id="room5" onClick={() => onRoomClick(roomLabels["room5"])}>
            <path
              d="M 62.878333,58.307552 V 40.573751 H 39.727291 v 17.733801 z"
              style={getPathStyle("room5")}
              id="path13"
            />
            <text
              xmlSpace="preserve"
              style={condensedTextStyle}
              x="49.548393"
              y="50.201328"
              id="text46"
            >
              <tspan id="tspan46" style={getTspanStyle("room5")} x="49.548393" y="50.201328">
                 {roomLabels["room5"] || '...'}
              </tspan>
            </text>
          </g>
          {/* Room 4 */}
          <g id="room4" onClick={() => onRoomClick(roomLabels["room4"])}>
            <path
              d="M 39.727291,58.307552 V 40.573751 H 16.576249 v 17.733801 z"
              style={getPathStyle("room4")}
              id="path14"
            />
            <text
              xmlSpace="preserve"
              style={condensedTextStyle}
              x="26.397352"
              y="50.201328"
              id="text45"
            >
              <tspan id="tspan45" style={getTspanStyle("room4")} x="26.397352" y="50.201328">
                 {roomLabels["room4"] || '...'}
              </tspan>
            </text>
          </g>
          {/* Room 3 */}
          <g id="room3" onClick={() => onRoomClick(roomLabels["room3"])}>
            <path
              d="M 62.878333,22.83995 V 40.573751 H 86.029374 V 22.83995 Z"
              style={getPathStyle("room3")}
              id="path11"
            />
            <text
              xmlSpace="preserve"
              style={condensedTextStyle}
              x="72.699432"
              y="32.467529"
              id="text44"
            >
              <tspan id="tspan44" style={getTspanStyle("room3")} x="72.699432" y="32.467529">
                 {roomLabels["room3"] || '...'}
              </tspan>
            </text>
          </g>
          {/* Room 2 */}
          <g id="room2" onClick={() => onRoomClick(roomLabels["room2"])}>
            <text
              xmlSpace="preserve"
              style={condensedTextStyle}
              x="49.548393"
              y="32.467529"
              id="text43"
            >
              <tspan id="tspan43" style={getTspanStyle("room2")} x="49.548393" y="32.467529">
                 {roomLabels["room2"] || '...'}
              </tspan>
            </text>
            <path
              d="M 39.727291,22.83995 V 40.573751 H 62.878333 V 22.83995 Z"
              style={getPathStyle("room2")}
              id="path10"
            />
          </g>
          {/* Room 1 */}
          <g id="room1" onClick={() => onRoomClick(roomLabels["room1"])}>
            <text
              xmlSpace="preserve"
              style={condensedTextStyle}
              x="26.397352"
              y="32.467529"
              id="text42"
            >
              <tspan id="tspan42" style={getTspanStyle("room1")} x="26.397352" y="32.467529">
                 {roomLabels["room1"] || '...'}
              </tspan>
            </text>
            <path
              d="M 16.576249,22.83995 V 40.573751 H 39.727291 V 22.83995 Z"
              style={getPathStyle("room1")}
              id="path9"
            />
          </g>
        </g>
        {/* --- Bathrooms --- */}
        <g
          id={bathroomWomenId}
          transform="matrix(0.09599231,0,0,0.09599231,167.63727,4.8499421)"
        >
          <path
            d="m 7.7773759,56.04113 c -1.7762501,0 -3.2175003,-1.44 -3.2175003,-3.2175 V 7.7773761 c 0,-1.7775001 1.4412502,-3.2175002 3.2175003,-3.2175002 H 52.82488 c 1.77625,0 3.21625,1.4400001 3.21625,3.2175002 V 52.82363 c 0,1.7775 -1.44,3.2175 -3.21625,3.2175 z"
            style={getBathroomStyle(bathroomWomenId)}
            id="path1-45"
          />
          <path
            d="m 30.307377,14.856128 c 1.775,0 3.215,-1.43875 3.215,-3.215 0,-1.7762504 -1.44,-3.2150005 -3.215,-3.2150005 -1.775,0 -3.215,1.4387501 -3.215,3.2150005 0,1.77625 1.44,3.215 3.215,3.215"
            style={baseBathroomIconStyle}
            id="path2-5"
          />
          <path
            d="m 34.731127,21.608628 2.4975,9.325001 h 2.41125 l -1.94375,-11.030001 c -0.30125,-1.69625 -1.56375,-3.145 -3.345,-3.5875 -1.295,-0.3225 -2.65,-0.49625 -4.04375,-0.49625 -1.39375,0 -2.748751,0.17375 -4.043751,0.49625 -1.78125,0.4425 -3.045,1.89125 -3.345,3.5875 l -1.94375,11.030001 h 2.41125 l 2.4975,-9.325001 1.005,3.74875 c -2.3075,3.431251 -3.655,7.561251 -3.655,12.007501 h 4.19125 l 1.265001,14.458751 h 3.235 l 1.26375,-14.458751 h 4.1925 c 0,-4.44625 -1.34625,-8.5775 -3.655,-12.008751 l 1.005,-3.7475"
            style={baseBathroomIconStyle}
            id="path3-1"
          />
        </g>
        <g
          id={bathroomMenId}
          transform="matrix(0.09599231,0,0,0.09599231,33.302646,70.939966)"
        >
          <path
            d="m 7.7773759,56.04113 c -1.7775001,0 -3.2175003,-1.44 -3.2175003,-3.2175 V 7.7773761 c 0,-1.7775001 1.4400002,-3.2175002 3.2175003,-3.2175002 H 52.82363 c 1.7775,0 3.2175,1.4400001 3.2175,3.2175002 V 52.82363 c 0,1.7775 -1.44,3.2175 -3.2175,3.2175 z"
            style={getBathroomStyle(bathroomMenId)}
            id="path1"
          />
          <path
            d="m 30.284878,14.694878 c 1.77625,0 3.2175,-1.44 3.2175,-3.21625 0,-1.7775004 -1.44125,-3.2175005 -3.2175,-3.2175005 -1.77625,0 -3.21625,1.4400001 -3.21625,3.2175005 0,1.77625 1.44,3.21625 3.21625,3.21625"
            style={baseBathroomIconStyle}
            id="path2"
          />
          <path
            d="m 35.113628,16.102378 c -1.565,-0.29 -3.18,-0.4425 -4.82875,-0.4425 -1.650001,0 -3.263751,0.1525 -4.828751,0.4425 -2.65,0.49 -4.46875,2.875 -4.3275,5.49625 l 0.59875,11.105001 h 2.60625 V 22.088628 h 0.805 v 29.591253 h 3.5375 l 1.287501,-18.333752 h 0.64375 l 1.285,18.333752 h 3.53875 V 22.088628 h 0.805 v 10.615001 h 2.60625 l 0.59875,-11.105001 c 0.14,-2.62125 -1.67875,-5.00625 -4.3275,-5.49625"
            style={baseBathroomIconStyle}
            id="path3"
          />
        </g>
        <g
          id={bathroomUnisexId}
          transform="matrix(0.09606147,0,0,0.09606147,61.99557,4.8478465)"
        >
          <path
            d="m 7.7936259,56.02238 c -1.7750001,0 -3.2150003,-1.43875 -3.2150003,-3.215 V 7.7936261 c 0,-1.7762501 1.4400002,-3.2150002 3.2150003,-3.2150002 H 52.80863 c 1.775,0 3.21375,1.4387501 3.21375,3.2150002 V 52.80738 c 0,1.77625 -1.43875,3.215 -3.21375,3.215 z"
            style={getBathroomStyle(bathroomUnisexId)}
            id="path1-4"
          />
          <path
            d="m 17.666126,17.349878 c 1.4875,0 2.695,-1.20625 2.695,-2.695 0,-1.48875 -1.2075,-2.695 -2.695,-2.695 -1.48875,0 -2.695,1.20625 -2.695,2.695 0,1.48875 1.20625,2.695 2.695,2.695"
            style={baseBathroomIconStyle}
            id="path2-8"
          />
          <path
            d="m 42.861127,17.334878 c 1.48875,0 2.69625,-1.20625 2.69625,-2.695 0,-1.49 -1.2075,-2.69625 -2.69625,-2.69625 -1.48875,0 -2.69625,1.20625 -2.69625,2.69625 0,1.48875 1.2075,2.695 2.69625,2.695"
            style={baseBathroomIconStyle}
            id="path3-8"
          />
          <path
            d="m 46.908628,18.514878 c -1.3125,-0.2425 -2.665,-0.37125 -4.0475,-0.37125 -1.3825,0 -2.735001,0.12875 -4.047501,0.37125 -2.22,0.41125 -3.74375,2.41 -3.62625,4.605 l 0.50125,9.307501 h 2.185 v -8.895001 h 0.67375 V 48.33363 h 2.966251 l 1.07875,-15.366251 h 0.53875 l 1.07875,15.366251 h 2.965 V 23.532378 h 0.67375 v 8.895001 h 2.185 l 0.50125,-9.307501 c 0.11875,-2.195 -1.40625,-4.19375 -3.62625,-4.605"
            style={baseBathroomIconStyle}
            id="path4"
          />
          <path
            d="m 23.466126,30.824879 h 2.0225 l -1.63,-9.243751 c -0.25125,-1.4225 -1.31125,-2.63625 -2.8025,-3.0075 -1.08625,-0.27 -2.22125,-0.415 -3.39,-0.415 -1.168751,0 -2.305001,0.145 -3.390001,0.415 -1.4925,0.37125 -2.55125,1.585 -2.8025,3.0075 l -1.6300001,9.243751 h 2.0212501 l 2.09375,-7.815001 0.8425,3.141251 c -1.935,2.87625 -3.065,6.3375 -3.065,10.0625 h 3.51375 l 1.06125,12.120001 h 2.710001 l 1.06,-12.120001 h 3.51375 c 0,-3.725 -1.13,-7.1875 -3.06375,-10.0625 l 0.8425,-3.141251 2.0925,7.815001"
            style={baseBathroomIconStyle}
            id="path5"
          />
          <path
            d="M 29.014876,12.188628 V 48.33363 h 2.572501 V 12.188628 Z"
            style={baseBathroomIconStyle}
            id="path6"
          />
        </g>
        <g
          id={bathroomMenEastId}
          transform="matrix(0.09599231,0,0,0.09599231,140.31736,4.8499421)"
        >
          <path
            d="m 7.7773759,56.04113 c -1.7775001,0 -3.2175003,-1.44 -3.2175003,-3.2175 V 7.7773761 c 0,-1.7775001 1.4400002,-3.2175002 3.2175003,-3.2175002 H 52.82363 c 1.7775,0 3.2175,1.4400001 3.2175,3.2175002 V 52.82363 c 0,1.7775 -1.44,3.2175 -3.2175,3.2175 z"
            style={getBathroomStyle(bathroomMenEastId)}
            id="path64"
          />
          <path
            d="m 30.284878,14.694878 c 1.77625,0 3.2175,-1.44 3.2175,-3.21625 0,-1.7775004 -1.44125,-3.2175005 -3.2175,-3.2175005 -1.77625,0 -3.21625,1.4400001 -3.21625,3.2175005 0,1.77625 1.44,3.21625 3.21625,3.21625"
            style={baseBathroomIconStyle}
            id="path65"
          />
          <path
            d="m 35.113628,16.102378 c -1.565,-0.29 -3.18,-0.4425 -4.82875,-0.4425 -1.650001,0 -3.263751,0.1525 -4.828751,0.4425 -2.65,0.49 -4.46875,2.875 -4.3275,5.49625 l 0.59875,11.105001 h 2.60625 V 22.088628 h 0.805 v 29.591253 h 3.5375 l 1.287501,-18.333752 h 0.64375 l 1.285,18.333752 h 3.53875 V 22.088628 h 0.805 v 10.615001 h 2.60625 l 0.59875,-11.105001 c 0.14,-2.62125 -1.67875,-5.00625 -4.3275,-5.49625"
            style={baseBathroomIconStyle}
            id="path66"
          />
        </g>
        {/* Other groups omitted for brevity, they are not rooms */}
      </g>
    </svg>
  );
}

