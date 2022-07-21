import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Samosa",
    description: "Finest snack with potato and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chhola Bhatura",
    description: "A punjabi speciality!",
    price: 46.5,
  },
  {
    id: "m3",
    name: "Dhokla",
    description: "Gujrati, healthy, tasty",
    price: 22.99,
  },
  {
    id: "m4",
    name: "Pav Bhaji",
    description: "Healthy...and green...",
    price: 38.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
