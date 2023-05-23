import { useEffect, useState } from "react"
import "./Styles.css"

export function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const k = process.env.REACT_APP_KEY;

        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${k}&includeNutrition=false`)
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
                console.log(data.image);
            })
            .catch(() => {
                console.log("errooooor")
            })
    }, [meal.id]);

    return (
        <div className="card" id="divCard">
            <img src={imageUrl} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title"> {meal.title} </h5>
                <ul className="list-group">
                    <li className="list-group-item">Tiempo de preparacion: {meal.readyInMinutes} minutos </li>
                    <li className="list-group-item">Porciones: {meal.servings} </li>
                </ul>
                <a href={meal.sourceUrl} className="btn btn-primary"> ir a la receta</a>
            </div>
        </div>
    )
}