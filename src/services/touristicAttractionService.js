import ApiManager from "../api/ApiManager";
import TouristicAttraction from "../models/TouristicAttraction";

export async function fetchTouristicAttractions() {
  try {
    const response = await ApiManager.getTouristicAttractions();
    return response.map(
      (a) =>
        new TouristicAttraction(
          a.id,
          a.name,
          a.description,
          a.images,
          a.latitude,
          a.longitude,
          a.cityId,
          a.city
        )
    );
  } catch (error) {
    const msg = "Error fetching touristic attractions";
    console.error(msg + ": ", error);
    throw new Error(msg);
  }
}
