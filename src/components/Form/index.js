import { uid } from "uid";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const newEntry = {
      id: uid(),
      name: form.elements.name.value,
      isForGoodWeather: form.elements.isGoodWeather.checked,
    };

    onAddActivity(newEntry);

    form.reset();

    form.elements[1].focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" id="name" />
      <label htmlFor="isGoodWeather">Good weather activity:</label>
      <input type="checkbox" id="isGoodWeather" name="isGoodWeather" />
      <button type="submit">Submit</button>
    </form>
  );
}
