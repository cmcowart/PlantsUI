const BASE_URL = "http://localhost:8080";
const CREATE_PLANT_URL = BASE_URL + "/plants/create";
const CREATE_PLANT_ACTION_URL = BASE_URL + "/plant-actions/create";
const CREATE_PLANT_TYPE_URL = BASE_URL + "/plant-types/create";
const GET_PLANTS_URL = BASE_URL + "/plants";
const GET_PLANT_ACTION_TYPES_URL = BASE_URL + "/plant-action-types";
const GET_PLANT_LOCATIONS_URL = BASE_URL + "/plant-locations";
const GET_PLANT_REPORT_URL = BASE_URL + "/plant-report";
const GET_PLANT_TYPES_URL = BASE_URL + "/plant-types";

export function createPlant(newPlant) {
  return fetch(CREATE_PLANT_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  });
}

export function createPlantAction(newPlantAction) {
  return fetch(CREATE_PLANT_ACTION_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlantAction),
  });
}

export function createPlantType(newPlantTypeName) {
  return fetch(CREATE_PLANT_TYPE_URL, {
    method: "POST",
    body: newPlantTypeName,
  });
}

export function getPlants() {
  return fetch(GET_PLANTS_URL);
}

export function getPlantActionTypes() {
  return fetch(GET_PLANT_ACTION_TYPES_URL);
}

export function getPlantTypes() {
  return fetch(GET_PLANT_TYPES_URL);
}

export function getPlantReport() {
  return fetch(GET_PLANT_REPORT_URL);
}

export function getPlantLocations() {
  return fetch(GET_PLANT_LOCATIONS_URL);
}
