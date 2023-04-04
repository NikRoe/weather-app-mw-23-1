import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivities(newActivity) {
    setActivities([newActivity, ...activities]);
  }

  return <Form onAddActivity={handleAddActivities} />;
}

export default App;
