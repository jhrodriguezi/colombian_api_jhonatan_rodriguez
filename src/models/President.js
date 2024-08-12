import City from "./City";

class President {
  constructor(
    id = null,
    image = "",
    name = "Unknown",
    lastName = "Unknown",
    startPeriodDate = "0000-00-00",
    endPeriodDate = "0000-00-00",
    politicalParty = "Independent",
    description = "",
    city = new City()
  ) {
    this.id = id || null;
    this.image = image || "";
    this.name = name || "Unknown";
    this.lastName = lastName || "Unknown";
    this.startPeriodDate = startPeriodDate || "0000-00-00";
    this.endPeriodDate = endPeriodDate || "0000-00-00";
    this.politicalParty = politicalParty || "Independent";
    this.description = description || "";
    this.city = city ? new City(city) : new City();
  }

  toString() {
    return (
      `President: ${this.name} ${this.lastName}, ` +
      `Period: ${this.startPeriodDate} - ${this.endPeriodDate}, ` +
      `Party: ${this.politicalParty}, ` +
      `City: ${this.city.toString()}`
    );
  }
}

export default President;
