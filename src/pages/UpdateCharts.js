import React, {useState, useEffect} from "react";
import "../css/CreateCharts.css";
import { useNavigate } from 'react-router';
import { Button, Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UpdateCharts() {

    let history = useNavigate();
    const [id, setID] = useState(null);
    const [comment, setComment] = useState(''); 
    const [image_url, setImageUrl] = useState('');
    const [trading_pair, setTradingPair] = useState('');
    const [user_id, setUserId] = useState('');
    const [isFormHidden] = useState(false);
    
	const handleClick = () => {
    // 👇️ replace set to true
    history('/about', {replace: true});
  };
    

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setComment(localStorage.getItem('Comment'));
        setImageUrl(localStorage.getItem('Chart'));
        setTradingPair(localStorage.getItem('Trading Pair'));
        setUserId(localStorage.getItem('User ID'));
    }, []);

    const updateAPIData = () => {
        axios.patch(`https://forextalksbackend.herokuapp.com/reviews/${id}`, {
            comment,
            image_url,
            trading_pair,
            user_id,
        }).then(() => {
            history.push('');
        })
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
        <h1>Update Chart</h1>
    
        <Form className="form-center">
        {isFormHidden ? <UpdateCharts/> : null}
                <Form.Field>
                    <label>Comment</label>
                    <input placeholder='Comment' name="comment" rows={10} value={comment} onChange={(e) => setComment(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Chart</label>
                    <input placeholder='Chart' name= "image_url"  value={image_url} onChange={(e) => setImageUrl(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Trading Pair</label>
                    <input placeholder='Trading Pair' name="trading_pair" value={trading_pair} onChange={(e) => setTradingPair(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>User ID</label>
                    <input placeholder='User ID' name="user_id" value={user_id} onChange={(e) => setUserId(e.target.value)}/>
                </Form.Field>
                <Button onClick={updateAPIData} type='submit'>Submit Update</Button>
                <br></br>
                <Link to='/chart'>
                    <Button onClick={handleClick}>Updated Charts</Button>
                </Link>
            </Form>
      </div>
    </div>
  );
}
