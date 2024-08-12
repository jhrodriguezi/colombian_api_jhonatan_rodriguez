import Department from "./Department";

class City {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || "Unknown City";
    this.description = data.description || "";
    this.surface = data.surface || 0.0;
    this.population = data.population || 0;
    this.postalCode = data.postalCode || "";
    this.department =
      data.department && typeof data.department === "object"
        ? new Department(data.department)
        : new Department();
  }

  toString() {
    return (
      `City: ${this.name}, Description: ${this.description}, ` +
      `Surface: ${this.surface}, Population: ${this.population}, ` +
      `Postal Code: ${this.postalCode}, Department: ${this.department.name}`
    );
  }
}

export default City;
