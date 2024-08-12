import { useEffect, useState } from "react";
import { fetchAirports } from "../../services/airportService";

const AirportTab = (props) => {
  const [airports, setAirports] = useState(null);
  const [executionTime, setExecutionTime] = useState(0.0);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const start = performance.now();
      try {
        const airportsList = await fetchAirports();
        setAirports(airportsList);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
      const end = performance.now();
      setExecutionTime(Math.round(end - start));
    };
    loadData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p>
        An error has ocurred while trying to fetch the data. Please try again.
      </p>
    );
  }

  return (
    <>
      <p>Time of execution: {executionTime}ms</p>
      {airports != null && airports.length > 0 ? (
        airports?.map((a) => {
          return <p key={a.id}>{a.toString()}</p>;
        })
      ) : (
        <p>Nothing to be shown.</p>
      )}
    </>
  );
};

export default AirportTab;
