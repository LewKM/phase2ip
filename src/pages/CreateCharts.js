import React, {useState} from "react";
import "../css/CreateCharts.css";
import { useNavigate } from 'react-router';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function CreateCharts() {

  let history = useNavigate();
    const [comment, setComment] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [trading_pair, setTradingPair] = useState('');
    const [user_id, setUserId] = useState('');
    const [isFormHidden] = useState(false);
    const postData = () => {
        axios.post(`http://localhost:9292/reviews`, {
            comment,
            image_url,
            trading_pair,
            user_id,
        }).then(() => {
            history.push('/charts');
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
        <h1>Create Chart</h1>
    
        <Form className="form-center">
        {isFormHidden ? <CreateCharts /> : null}
                <Form.Field>
                    <label>Comment</label>
                    <input placeholder='Comment' name="comment" rows={10} onChange={(e) => setComment(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Chart</label>
                    <input placeholder='Chart' name= "image_url"  onChange={(e) => setImageUrl(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Trading Pair</label>
                    <input placeholder='Trading Pair' name="trading_pair"  onChange={(e) => setTradingPair(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>User ID</label>
                    <input placeholder='User ID' name="user_id"  onChange={(e) => setUserId(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
      </div>
    </div>
  );
}
