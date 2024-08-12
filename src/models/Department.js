class Department {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || "Unknown Department";
    this.description = data.description || "";
    this.cityCapitalId = data.cityCapitalId || null;
    this.country =
      data.country && typeof data.country === "object" ? data.country : {};
  }

  toString() {
    return (
      `Department: ${this.name}, Description: ${this.description}, ` +
      `City Capital ID: ${this.cityCapitalId}, Country: ${this.country.name}`
    );
  }
}

export default Department;
