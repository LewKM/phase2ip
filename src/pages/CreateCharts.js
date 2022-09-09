import React, {useState} from "react";
import "../css/CreateCharts.css";

export default function CreateCharts(addNewCharts) {

  const [user_id, setTitle] = useState("")
  const [trading_pair, setPairname] = useState("")
  const [comment, setComments] = useState("")
  const [image_url, setImage] = useState("")
  const [isFormHidden] = useState(false)
  // const [reviews, setCharts] = useState([])

  // function handleFormHiddenBtn(){
  //   setIsFormHidden(!isFormHidden)
  // }

  // function addNewCharts(newChart){
  //   const updatedCharts = [...reviews,newChart]
  //   setCharts(updatedCharts)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    // ("Name: ", user_id)
    // ("Pairname: ", trading_pair)
    // ("Comments: ", comment)
    // ("Images: ", image_url)
    const reviewData = {
      user_id: user_id,
      comment: comment,
      trading_pair: trading_pair,
      image_url: image_url,
    };
    fetch('http://localhost:9292/reviews',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
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
          <input type="text" name="user_id" value={user_id} onChange={(e) => setTitle(e.target.value)}/>
          <label>Pairs:</label>
          <input type="text" name="trading_pair" value={trading_pair} onChange={(e) => setPairname(e.target.value)}/>
          <label>Comments:</label>
          <input type="text" name="comment" rows={10} value={comment} onChange={(e) => setComments(e.target.value)}/>
          <label>Image:</label>
          <input type="text" name="image_url" value={image_url} onChange={(e) => setImage(e.target.value)}/>
          <input type="submit" value="Share your Chart and Comments" />
        </form>
      </div>
    </div>
  );
}