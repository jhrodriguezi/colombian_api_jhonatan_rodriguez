import City from "./City";

class TouristAttraction {
  constructor(
    id = null,
    name = "Unnamed Attraction",
    description = "No description",
    images = [],
    latitude = 0.0,
    longitude = 0.0,
    cityId = null,
    city = new City()
  ) {
    this.id = id || null;
    this.name = name || "Unnamed Attraction";
    this.description = description || "No description";
    this.images = images || [];
    this.latitude = latitude || 0.0;
    this.longitude = longitude || 0.0;
    this.cityId = cityId || null;
    this.city = city != null ? new City(city) : new City();
  }

  toString() {
    return (
      `Tourist Attraction: ${this.name}, ` +
      `Location: ${this.latitude}, ${this.longitude}, ` +
      `City: ${this.city.toString()}`
    );
  }
}

export default TouristAttraction;
