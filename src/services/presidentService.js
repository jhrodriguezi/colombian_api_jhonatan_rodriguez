import ApiManager from "../api/ApiManager";
import President from "../models/President";

export async function fetchPresidents() {
  try {
    const response = await ApiManager.getPresidents();
    return response.map(
      (p) =>
        new President(
          p.id,
          p.image,
          p.name,
          p.lastName,
          p.startPeriodDate,
          p.endPeriodDate,
          p.politicalParty,
          p.description,
          p.city
        )
    );
  } catch (error) {
    console.error("Error fetching presidents: ", error);
    return [];
  }
}
