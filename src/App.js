import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivities(newActivity) {
    setActivities([newActivity, ...activities]);
  }

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivities} />
    </>
  );
}

export default App;
