export const groupPresidentsByParty = (data) => {
  const grouped = data.reduce((acc, president) => {
    const party = president.party;
    if (!acc[party]) {
      acc[party] = 0;
    }
    acc[party]++;
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([party, count]) => ({ party, count }))
    .sort((a, b) => b.count - a.count);
};

export const groupTouristicAttractions = (data) => {
  const grouped = data.reduce((acc, attraction) => {
    const { department, city } = attraction;
    if (!acc[department]) acc[department] = {};
    if (!acc[department][city]) acc[department][city] = 0;
    acc[department][city]++;
    return acc;
  }, {});

  return grouped;
};

export const groupAirportsByDepartmentAndCity = (data) => {
  const grouped = data.reduce((acc, airport) => {
    const { department, city } = airport;
    if (!acc[department]) acc[department] = {};
    if (!acc[department][city]) acc[department][city] = 0;
    acc[department][city]++;
    return acc;
  }, {});

  return grouped;
};

export const groupAirportsComplex = (data) => {
  const grouped = data.reduce((acc, airport) => {
    const { region, department, city, type } = airport;
    if (!acc[region]) acc[region] = {};
    if (!acc[region][department]) acc[region][department] = {};
    if (!acc[region][department][city]) acc[region][department][city] = {};
    if (!acc[region][department][city][type])
      acc[region][department][city][type] = 0;
    acc[region][department][city][type]++;
    return acc;
  }, {});

  return grouped;
};
