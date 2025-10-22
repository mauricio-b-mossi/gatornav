import { buildingData } from "./buildingData";

export const parseClassCode = (code) => {
  if (!code) return null;
  const match = code.trim().toUpperCase().match(/^([A-Z]{3})\s*(\d+)/);
  if (!match) return null;
  const [, buildingPrefix, roomNumber] = match;
  if (buildingData[buildingPrefix]) {
    return {
      fullCode: `${buildingPrefix} ${roomNumber}`,
      prefix: buildingPrefix,
      room: roomNumber,
      building: buildingData[buildingPrefix].name,
      location: buildingData[buildingPrefix].location,
    };
  }
  return null;
};