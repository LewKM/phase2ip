// import { useNavigate } from "react-router-dom";
import "./CreateCharts.css";
export default function CreateCharts() {
  //post request to create a new recipe
//   let nav = useNavigate();
//   const routeChange = () => {
//     nav("/recipes");
//   };
  const postChart = async (e) => {
    e.preventDefault();
    const chartdetails = {
      name: e.target.name.value,
      pairname: e.target.pairname.value,
      comments: e.target.comments.value,
      image: e.target.image.value,
      
    };
    const response = await fetch(
      "db.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chartdetails),
      }
    );
    const data = await response.json();
    console.log(data);
    // if successful, redirect to the recipe page
  };
//clear form after submit
    const clearForm = (e) => {
        e.target.name.value = "";
        e.target.pairname.value = "";
        e.target.comments.value = "";
        e.target.image.value = "";
        window.render() 
    }
  return (
    <div className="container">
      <h1>Create Chart</h1>
      <form onSubmit={postChart } className="form-center">
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Pairs:</label>
        <input type="text" name="pairname" />
        <label>Comments:</label>
        <input type="text" name="comments" />
        <label>Image:</label>
        <input type="text" name="image" />
        <button type="submit" onClick={clearForm} >
          Submit
        </button>
      </form>
    </div>
  );
}