import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );

        if (!response.ok) {
          console.log("Something went wrong");
        } else {
          const data = await response.json();

          setWeather(data);
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    getWeather();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([newActivity, ...activities]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  const filteredActivites = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  return (
    <>
      <h1>
        {weather.isGoodWeather ? "🌞" : "🌧️"}
        {weather.temperature} °C
      </h1>
      <List
        activities={filteredActivites}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
