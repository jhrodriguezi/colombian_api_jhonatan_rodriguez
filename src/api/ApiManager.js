import ApiMethods from "./ApiMethods";
import ENDPOINTS from "./Endpoints";

class ApiManager {
  static getPresidents = () => {
    const url = ENDPOINTS.GET_PRESIDENTS();
    return ApiMethods.get(url);
  };

  static getAirports = () => {
    const url = ENDPOINTS.GET_AIRPORTS();
    return ApiMethods.get(url);
  };

  static getTouristicAttractions = () => {
    const url = ENDPOINTS.GET_TOURISTIC_ATTRACTIONS();
    return ApiMethods.get(url);
  };
}

export default ApiManager;
