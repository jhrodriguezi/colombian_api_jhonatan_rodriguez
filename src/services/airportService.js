import ApiManager from "../api/ApiManager";
import Airport from "../models/Airport";

export async function fetchAirports() {
  try {
    const response = await ApiManager.getAirports();
    return response.map(
      (a) =>
        new Airport(
          a.id,
          a.name,
          a.iataCode,
          a.oaciCode,
          a.type,
          a.departmentId,
          a.department,
          a.cityId,
          a.city,
          a.latitude,
          a.longitude
        )
    );
  } catch (error) {
    console.error("Error fetching airports: ", error);
    return [];
  }
}
