import { useState } from 'react';
import { MealList } from './MealList';
import "./Styles.css";

export const Home = () => {//privado
    const [cal, setCal] = useState(2000);
    const [mealData, setMealData] = useState(null);
    const uri = process.env.REACT_APP_URL;
    const k = process.env.REACT_APP_KEY;

    function getMeals() {
        fetch(`${uri}apiKey=${k}&timeFrame=day&targetCalories=${cal}`)
            .then((response) => response.json())
            .then((data) => {
                setMealData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("errooooor")
            })
    }

    function handleChange(e){
        setCal(e.target.value);
    }

    return (
        <div id='divHeader' className="p-5 text-center bg-light">
            <section>
                <h1 className="mb-3">Plan de alimentacion</h1>
                <input type='number' placeholder='calorias' onChange={handleChange}/>
                <button className="btn btn-primary" onClick={getMeals} >Mostrar</button>
            </section>
            {mealData && <MealList mealData={mealData}/>}
        </div>
    )
}