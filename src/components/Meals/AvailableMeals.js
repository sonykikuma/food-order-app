import { useEffect, useState } from "react";
<<<<<<< HEAD
=======

>>>>>>> d3a606fea618c667c0d93ddf6c6dc95400a5d443
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

/*const DUMMY_MEALS = [
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
];*/
<<<<<<< HEAD
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
=======

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
>>>>>>> d3a606fea618c667c0d93ddf6c6dc95400a5d443
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-8f8e0-default-rtdb.firebaseio.com/meals.json"
      );
<<<<<<< HEAD

      if (!response.ok) {
        throw new Error("Something went wrong !");
      }
      const responseData = await response.json();
=======
const responseData = await response.json();
>>>>>>> d3a606fea618c667c0d93ddf6c6dc95400a5d443

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
<<<<<<< HEAD

    fetchMeals().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
=======
fetchMeals();
      }, []);
>>>>>>> d3a606fea618c667c0d93ddf6c6dc95400a5d443

  const mealsList = meals.map((meal) => (
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
