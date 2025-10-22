import React, { useState } from 'react';

/**
 * Floorplan Component
 * Renders an SVG floorplan based on room data.
 * Props:
 * - rooms: Array of room objects, e.g., [{ id: "room-101", number: "101" }]
 * - floor: The current floor number (e.g., 1, 2). Entrances are only shown for floor 1.
 */
function Floorplan({ rooms = [], floor = 1 }) {

  // Convert the rooms array into the label map for easy lookup
  const roomLabels = rooms.reduce((acc, room) => {
    if (room && room.id && room.number) {
      acc[room.id] = room.number;
    }
    return acc;
  }, {});

  // Helper for inline styles (optional, but good for complex SVGs)
  const textStyle = {
    fontSize: '2.11667px',
    textAlign: 'start',
    writingMode: 'lr-tb',
    direction: 'ltr',
    textAnchor: 'start',
    fill: '#1a1a1a',
    fillOpacity: 1,
    stroke: '#1a1a1a',
    strokeWidth: 0,
    strokeDasharray: 'none'
  };

  const pathStyle = {
    fill: '#ffffff',
    stroke: '#000000',
    strokeWidth: '0.264583'
  };

  return (
    <svg
      width="205.03551mm"
      height="81.147484mm"
      viewBox="0 0 205.03551 81.147484"
      version="1.1"
      id="svg1"
      xmlSpace="preserve"
      inkscapeVersion="1.4.2 (f4327f4, 2025-05-13)"
      sodipodiDocname="littlehallinkscape.svg"
      xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
      xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsSvg="http://www.w3.org/2000/svg">
      {/* Created with Inkscape (http://www.inkscape.org/) */}
      <sodipodiNamedview
        id="namedview1"
        pagecolor="#ffffff"
        bordercolor="#000000"
        borderopacity="0.24705882"
        inkscapeShowpageshadow="2"
        inkscapePageopacity="0.0"
        inkscapePagecheckerboard="0"
        inkscapeDeskcolor="#d1d1d1"
        inkscapeDocumentUnits="mm"
        inkscapeZoom="1.4142136"
        inkscapeCx="223.7993"
        inkscapeCy="123.39013"
        inkscapeWindowWidth="2560"
        inkscapeWindowHeight="1494"
        inkscapeWindowX="-11"
        inkscapeWindowY="-11"
        inkscapeWindowMaximized="1"
        inkscapeCurrentLayer="layer5">
        <inkscapePage
          x="0"
          y="0"
          width="205.03551"
          height="81.147484"
          id="page2"
          margin="0"
          bleed="0" />
      </sodipodiNamedview>
      <defs
        id="defs1" />
      <g
        inkscapeGroupmode="layer"
        id="layer4"
        inkscapeLabel="Floorplan"
        transform="translate(-2.2220767,-6.1970421)">
        <path
          style={pathStyle}
          d="m 12.93151,17.760156 v 7.276042 H 5.4239583 v 43.821614 h 9.3265627 v 8.334375 h 16.701822 v 7.077604 h 14.485938 v -7.309115 h 15.31276 v 6.779948 h 13.626041 v -6.91224 h 14.353646 v 7.309115 h 34.296612 v -7.540625 h 13.75834 v 7.540625 h 12.99765 v -7.672917 h 16.66875 v 7.309115 h 13.98984 v -7.209896 h 12.63386 V 68.49401 h 10.31875 V 24.242448 H 193.47656 V 16.767969 H 180.6112 V 9.5580728 h -15.31276 v 7.6067712 h -12.7 V 9.3927082 H 136.75651 V 17.297135 H 123.06432 V 9.3596353 H 88.470051 V 17.793229 H 74.810937 V 9.5911457 H 59.432031 V 18.123958 H 45.47526 V 9.888802 H 31.154687 v 7.838281 z"
          id="little-hall-floor-plan"
          inkscapeExportFilename="littlehalllabelled1.svg"
          inkscapeExportXdpi="96"
          inkscapeExportYdpi="96" />
      </g>
      <g
        inkscapeGroupmode="layer"
        id="layer5"
        inkscapeLabel="Layout"
        transform="translate(-2.2220767,-6.1970421)">
        <g
          id="leftblock"
          inkscapeLabel="leftblock"
          transform="translate(-92.339583)">
          {/* Room 101 */}
          <g
            id="room-101"
            inkscapeLabel="container11">
            <path
              d="m 115.50138,22.892143 v 24.584546 h 17.94154 V 22.892143 Z"
              style={pathStyle}
              id="path103"
              inkscapeLabel="room11" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="122.43403"
              y="35.956463"
              id="text104">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="122.43403"
                y="35.956463"
                id="tspan104">
                {roomLabels['room-101'] || '101'}
              </tspan>
            </text>
          </g>
          {/* Room 102 */}
          <g
            id="room-102"
            inkscapeLabel="container12">
            <path
              d="m 133.44292,22.892143 v 24.584546 h 17.94154 V 22.892143 Z"
              style={pathStyle}
              id="path104"
              inkscapeLabel="room12" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="140.37556"
              y="35.956463"
              id="text105">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="140.37556"
                y="35.956463"
                id="tspan105">
                {roomLabels['room-102'] || '102'}
              </tspan>
            </text>
          </g>
          {/* Room 103 */}
          <g
            id="room-103"
            inkscapeLabel="container13">
            <path
              d="M 151.38446,22.892143 V 47.476689 H 169.326 V 22.892143 Z"
              style={pathStyle}
              id="path105"
              inkscapeLabel="room13" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="158.31711"
              y="35.956463"
              id="text106">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="158.31711"
                y="35.956463"
                id="tspan106">
                {roomLabels['room-103'] || '103'}
              </tspan>
            </text>
          </g>
          {/* Room 104 */}
          <g
            id="room-104"
            inkscapeLabel="container14">
            <path
              d="m 169.326,22.892143 v 24.584546 h 17.94206 V 22.892143 Z"
              style={pathStyle}
              id="path106"
              inkscapeLabel="room14" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="176.25891"
              y="35.956463"
              id="text107">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="176.25891"
                y="35.956463"
                id="tspan107">
                {roomLabels['room-104'] || '104'}
              </tspan>
            </text>
          </g>
          {/* Room 108 */}
          <g
            id="room-108"
            inkscapeLabel="container24">
            <path
              d="M 187.26806,47.476689 H 169.326 v 24.584546 h 17.94206 z"
              style={pathStyle}
              id="path107"
              inkscapeLabel="room24" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="176.25891"
              y="60.541008"
              id="text108">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="176.25891"
                y="60.541008"
                id="tspan108">
                {roomLabels['room-108'] || '108'}
              </tspan>
            </text>
          </g>
          {/* Room 107 */}
          <g
            id="room-107"
            inkscapeLabel="container23">
            <path
              d="M 169.326,72.061235 V 47.476689 h -17.94154 v 24.584546 z"
              style={pathStyle}
              id="path108"
              inkscapeLabel="room23" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="158.31711"
              y="60.541008"
              id="text109">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="158.31711"
                y="60.541008"
                id="tspan109">
                {roomLabels['room-107'] || '107'}
              </tspan>
            </text>
          </g>
          {/* Room 106 */}
          <g
            id="room-106"
            inkscapeLabel="container22">
            <path
              d="M 151.38446,72.061235 V 47.476689 h -17.94154 v 24.584546 z"
              style={pathStyle}
              id="path109"
              inkscapeLabel="room22" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="140.37556"
              y="60.541008"
              id="text110">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="140.37556"
                y="60.541008"
                id="tspan1">
                {roomLabels['room-106'] || '106'}
              </tspan>
            </text>
          </g>
          {/* Room 105 */}
          <g
            id="room-105"
            inkscapeLabel="container21">
            <path
              d="M 133.44292,72.061235 V 47.476689 h -17.94154 v 24.584546 z"
              style={pathStyle}
              id="path110"
              inkscapeLabel="room21" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="122.43403"
              y="60.541008"
              id="text111">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="122.43403"
                y="60.541008"
                id="tspan111">
                {roomLabels['room-105'] || '105'}
              </tspan>
            </text>
          </g>
        </g>
        <g
          id="rightblock"
          inkscapeLabel="rightblock"
          transform="translate(-2.3499353)">
          {/* Room 109 */}
          <g
            id="room-109"
            inkscapeLabel="container11">
            <path
              d="m 115.50138,22.892143 v 24.584546 h 17.94154 V 22.892143 Z"
              style={pathStyle}
              id="path2"
              inkscapeLabel="room11" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="122.43403"
              y="35.956463"
              id="text2">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="122.43403"
                y="35.956463"
                id="tspan2">
                {roomLabels['room-109'] || '109'}
              </tspan>
            </text>
          </g>
          {/* Room 110 */}
          <g
            id="room-110"
            inkscapeLabel="container12">
            <path
              d="m 133.44292,22.892143 v 24.584546 h 17.94154 V 22.892143 Z"
              style={pathStyle}
              id="path3"
              inkscapeLabel="room12" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="140.37556"
              y="35.956463"
              id="text3">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="140.37556"
                y="35.956463"
                id="tspan3">
                {roomLabels['room-110'] || '110'}
              </tspan>
            </text>
          </g>
          {/* Room 111 */}
          <g
            id="room-111"
            inkscapeLabel="container13">
            <path
              d="M 151.38446,22.892143 V 47.476689 H 169.326 V 22.892143 Z"
              style={pathStyle}
              id="path4"
              inkscapeLabel="room13" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="158.31711"
              y="35.956463"
              id="text4">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="158.31711"
                y="35.956463"
                id="tspan4">
                {roomLabels['room-111'] || '111'}
              </tspan>
            </text>
          </g>
          {/* Room 112 */}
          <g
            id="room-112"
            inkscapeLabel="container14">
            <path
              d="m 169.326,22.892143 v 24.584546 h 17.94206 V 22.892143 Z"
              style={pathStyle}
              id="path5"
              inkscapeLabel="room14" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="176.25891"
              y="35.956463"
              id="text5">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="176.25891"
                y="35.956463"
                id="tspan5">
                {roomLabels['room-112'] || '112'}
              </tspan>
            </text>
          </g>
          {/* Room 116 */}
          <g
            id="room-116"
            inkscapeLabel="container24">
            <path
              d="M 187.26806,47.476689 H 169.326 v 24.584546 h 17.94206 z"
              style={pathStyle}
              id="path6"
              inkscapeLabel="room24" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="176.25891"
              y="60.541008"
              id="text6">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="176.25891"
                y="60.541008"
                id="tspan6">
                {roomLabels['room-116'] || '116'}
              </tspan>
            </text>
          </g>
          {/* Room 115 */}
          <g
            id="room-115"
            inkscapeLabel="container23">
            <path
              d="M 169.326,72.061235 V 47.476689 h -17.94154 v 24.584546 z"
              style={pathStyle}
              id="path7"
              inkscapeLabel="room23" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="158.31711"
              y="60.541008"
              id="text7">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="158.31711"
                y="60.541008"
                id="tspan7">
                {roomLabels['room-115'] || '115'}
              </tspan>
            </text>
          </g>
          {/* Room 114 */}
          <g
            id="room-114"
            inkscapeLabel="container22">
            <path
              d="M 151.38446,72.061235 V 47.476689 h -17.94154 v 24.584546 z"
              style={pathStyle}
              id="path8"
              inkscapeLabel="room22" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="140.37556"
              y="60.541008"
              id="text8">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="140.37556"
                y="60.541008"
                id="tspan8">
                {roomLabels['room-114'] || '114'}
              </tspan>
            </text>
          </g>
          {/* Room 113 */}
          <g
            id="room-113"
            inkscapeLabel="container21">
            <path
              d="M 133.44292,72.061235 V 47.476689 h -17.94154 v 24.584546 z"
              style={pathStyle}
              id="path9"
              inkscapeLabel="room21" />
            <text
              xmlSpace="preserve"
              style={textStyle}
              x="122.43403"
              y="60.541008"
              id="text9">
              <tspan
                sodipodiRole="line"
                style={{ strokeWidth: 0 }}
                x="122.43403"
                y="60.541008"
                id="tspan9">
                {roomLabels['room-113'] || '113'}
              </tspan>
            </text>
          </g>
        </g>
      </g>
      {/* Stair Icons */}
      <g
        id="g24"
        transform="matrix(1,0,0,1.0130268,-2.2220767,-7.0809043)">
        <g
          style={{ fill: '#000000' }}
          id="g10"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,63.06524)">
          <g
            id="g3-0">
            <g
              id="g2-9">
              <g
                id="g1">
                <polygon
                  points="221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 "
                  id="polygon1" />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect1" />
              </g>
            </g>
          </g>
        </g>
        <g
          style={{ fill: '#000000' }}
          id="g14"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,26.957128)">
          <g
            id="g13">
            <g
              id="g12">
              <g
                id="g11">
                <polygon
                  points="221.143,335.703 318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 "
                  id="polygon10" />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect10" />
              </g>
            </g>
          </g>
        </g>
      </g>

      {/* Conditional Entrance Text - Only shows if floor === 1 */}
      {floor === 1 && (
        <React.Fragment>
          <text
            xmlSpace="preserve"
            style={{ fontSize: '2.11666px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: '#1a1a1a', stroke: '#1a1a1a', strokeWidth: 0 }}
            x="95.2743"
            y="1.6081656"
            id="text27">
            <tspan
              sodipodiRole="line"
              id="tspan27"
              style={{ strokeWidth: 0 }}
              x="95.2743"
              y="1.6081656">
              North Entrance
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{ fontSize: '2.11666px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: '#1a1a1a', stroke: '#1a1a1a', strokeWidth: 0 }}
            x="95.158546"
            y="81.115448"
            id="text28">
            <tspan
              sodipodiRole="line"
              id="tspan28"
              style={{ strokeWidth: 0 }}
              x="95.158546"
              y="81.115448">
              South Entrance
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{ fontSize: '2.11666px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: '#1a1a1a', stroke: '#1a1a1a', strokeWidth: 0 }}
            x="-48.440506"
            y="1.5389194"
            id="text29"
            transform="rotate(-90)">
            <tspan
              sodipodiRole="line"
              id="tspan29"
              style={{ strokeWidth: 0 }}
              x="-48.440506"
              y="1.5389194">
              West Entrance
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{ fontSize: '2.11666px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: '#1a1a1a', stroke: '#1a1a1a', strokeWidth: 0 }}
            x="33.429558"
            y="-203.49658"
            id="text30"
            transform="rotate(90)">
            <tspan
              sodipodiRole="line"
              id="tspan30"
              style={{ strokeWidth: 0 }}
              x="33.429558"
              y="-203.49658">
              East Entrance
            </tspan>
          </text>
        </React.Fragment>
      )}

      {/* More Stair Icons */}
      <g
        id="g38"
        transform="matrix(1,0,0,1.0130268,187.67291,-7.0809043)">
        <g
          style={{ fill: '#000000' }}
          id="g33"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,63.06524)">
          <g
            id="g32">
            <g
              id="g31">
              <g
                id="g30">
                <polygon
                  points="318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 "
                  id="polygon30" />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect30" />
              </g>
            </g>
          </g>
        </g>
        <g
          style={{ fill: '#000000' }}
          id="g37"
          transform="matrix(0.00881518,0,0,0.00881518,7.4140261,26.957128)">
          <g
            id="g36">
            <g
              id="g35">
              <g
                id="g34">
                <polygon
                  points="318.009,335.703 318.009,238.835 414.876,238.835 414.876,141.969 494.312,141.969 494.312,107.108 364.957,107.108 364.957,141.969 380.014,141.969 380.014,203.974 268.09,203.974 268.09,238.835 283.148,238.835 283.148,300.841 171.223,300.841 171.223,335.703 186.282,335.703 186.282,397.708 74.356,397.708 74.356,432.569 89.415,432.569 89.415,512.004 124.276,512.004 124.276,432.569 221.143,432.569 221.143,335.703 "
                  id="polygon33" />
                <rect
                  x="-36.522999"
                  y="155.536"
                  transform="matrix(0.7071,-0.7071,0.7071,0.7071,-66.4634,185.4769)"
                  width="454.36301"
                  height="34.861"
                  id="rect33" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}