import { useEffect, useState } from "react";
import { fetchPresidents } from "../../services/presidentService";

const PresidentTab = (props) => {
  const [presidents, setPresidents] = useState(null);
  const [executionTime, setExecutionTime] = useState(0.0);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const start = performance.now();
      try {
        const presidentList = await fetchPresidents();
        setPresidents(presidentList);
      } catch (error) {
        setIsError(true);
        console.log("Error inside PresidentTab ", error);
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
    return <p>An error has ocurred. Try later...</p>;
  }

  return (
    <>
      <p>Time of execution: {executionTime}ms</p>
      {presidents != null && presidents.length > 0 ? (
        presidents?.map((p) => {
          return <p key={p.id}>{p.toString()}</p>;
        })
      ) : (
        <p>Nothing to be shown.</p>
      )}
    </>
  );
};

export default PresidentTab;
