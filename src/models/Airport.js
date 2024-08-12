import City from "./City";
import Department from "./Department";

class Airport {
  constructor(
    id = null,
    name = "Unnamed Airport",
    iataCode = "XXX",
    oaciCode = "XXXX",
    type = "Domestic",
    departmentId = null,
    department = new Department(),
    cityId = null,
    city = new City(),
    latitude = 0.0,
    longitude = 0.0
  ) {
    this.id = id || null;
    this.name = name || "Unnamed Airport";
    this.iataCode = iataCode || "XXX";
    this.oaciCode = oaciCode || "XXXX";
    this.type = type || "Unknown";
    this.departmentId = departmentId || null;
    this.department = department
      ? new Department(department)
      : new Department();
    this.cityId = cityId || null;
    this.city = city ? new City(city) : new City();
    this.latitude = latitude || 0.0;
    this.longitude = longitude || 0.0;
  }

  toString() {
    return (
      `Airport: ${this.name} (${this.iataCode}/${this.oaciCode}), ` +
      `Type: ${this.type}, ` +
      `Location: ${this.latitude}, ${this.longitude}, ` +
      `City: ${this.city.toString()}, Department: ${this.department.toString()}`
    );
  }
}

export default Airport;
