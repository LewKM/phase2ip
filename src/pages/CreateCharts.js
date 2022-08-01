import React, {useState} from "react";
import "../css/CreateCharts.css";

export default function CreateCharts() {

  const [title, setTitle] = useState("")
  const [pairname, setPairname] = useState("")
  const [comments, setComments] = useState("")
  const [image, setImage] = useState("")
  const [isFormHidden] = useState(false)
  const [chartdetails, setCharts] = useState([])

  // function handleFormHiddenBtn(){
  //   setIsFormHidden(!isFormHidden)
  // }

  function addNewCharts(newChart){
    const updatedCharts = [...chartdetails,newChart]
    setCharts(updatedCharts)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Name: ", title)
    console.log("Pairname: ", pairname)
    console.log("Comments: ", comments)
    console.log("Images: ", image)
    fetch('https://forex-talks-app.herokuapp.com/chartdetails',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title:title,
        comment:comments,
        pairname: pairname,
        image: image
      })
    })
    .then((res) => res.json())
    .then((newChart) => addNewCharts(newChart))
 
    setTitle("")
    setPairname("")
    setComments("")
    setImage("")
  }

  return (
    <div id="createchart">
      <div id ="qoutes">
      <h1>SHARE YOUR CHART</h1>
      <h2>In the form on your Right</h2>   
        <p>"The best way to make money in Forex is to trade with the trend."</p>

        <p>"The key to successful Forex trading is to always trade with the trend."</p>""

        <p>"The best way to make money in Forex is to always trade with the trend."</p>

        <p>If you don't know which way the market is going, then you shouldn't be trading."</p>""

        <p>"The best way to make money in Forex is to trade with a system." </p>

        <p>"The best way to make money in Forex is to have a plan."</p>""

        <p>"The best way to make money in Forex is to trade with discipline."</p>

        <p>"The best way to make money in Forex is to trade with a system and a plan."</p>""
      </div>


      <div className="container">
        <h1>Create Chart</h1>
        <form onSubmit={handleSubmit} className="form-center">
        {/* <button onClick={handleFormHiddenBtn}>Show/hide new  form</button> */}
      {isFormHidden ? <CreateCharts addNewCharts={addNewCharts}/> : null}
          <label>Name:</label>
          <input type="text" name="name" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <label>Pairs:</label>
          <input type="text" name="pairname" value={pairname} onChange={(e) => setPairname(e.target.value)}/>
          <label>Comments:</label>
          <input type="text" name="comments" rows={10} value={comments} onChange={(e) => setComments(e.target.value)}/>
          <label>Image:</label>
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
          <input type="submit" value="Share your Chart and Comments" />
        </form>
      </div>
    </div>
  );
}