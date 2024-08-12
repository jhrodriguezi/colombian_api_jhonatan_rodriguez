import { useEffect, useState } from "react";
import { fetchTouristicAttractions } from "../../services/touristicAttractionService";

const TouristicAttractionTab = (props) => {
  const [attractions, setAttractions] = useState(null);
  const [executionTime, setExecutionTime] = useState(0.0);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const start = performance.now();
      try {
        const attractionsList = await fetchTouristicAttractions();
        setAttractions(attractionsList);
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
      {attractions != null && attractions.length > 0 ? (
        attractions?.map((a) => {
          return <p key={a.id}>{a.toString()}</p>;
        })
      ) : (
        <p>Nothing to be shown.</p>
      )}
    </>
  );
};

export default TouristicAttractionTab;
