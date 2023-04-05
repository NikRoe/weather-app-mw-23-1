import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  function handleAddActivities(newActivity) {
    setActivities([newActivity, ...activities]);
  }

  const filteredActivites = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      <List activities={filteredActivites} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivities} />
    </>
  );
}

export default App;
