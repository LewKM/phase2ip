import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../css/Charts.css";

export default function FeaturedCharts() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9292/reviews`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, comment, image_url, trading_pair, user_id } = data;
        localStorage.setItem('ID', id); 
        localStorage.setItem('Comment', comment);
        localStorage.setItem('Chart', image_url);
        localStorage.setItem('Trading Pair', trading_pair);
        localStorage.setItem('User ID', user_id);
    }

    const getData = () => {
        axios.get(`http://localhost:9292/reviews`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:9292/reviews/${id}`)
        .then(() => {
            getData();
        })
    }

    // return (
    //     <div>
    //         <Table singleLine>
    //             <Table.Header>
    //                 <Table.Row>
    //                     <Table.HeaderCell>Comment</Table.HeaderCell>
    //                     <Table.HeaderCell>Chart</Table.HeaderCell>
    //                     <Table.HeaderCell>Trading Pair</Table.HeaderCell>
    //                     <Table.HeaderCell>User ID</Table.HeaderCell>
    //                     <Table.HeaderCell>Update</Table.HeaderCell>
    //                     <Table.HeaderCell>Delete</Table.HeaderCell>
    //                 </Table.Row>
    //             </Table.Header>

    //             <Table.Body>
    //                 {APIData.map((data) => {
    //                     return (
    //                         <Table.Row>
    //                             <Table.Cell>{data.comment}</Table.Cell>
    //                             <Table.Cell>{data.image_url}</Table.Cell>
    //                             <Table.Cell>{data.trading_pair}</Table.Cell>
    //                             <Table.Cell>{data.user_id}</Table.Cell>
    //                             <Link to='/update'>
    //                                 <Table.Cell> 
    //                                     <Button onClick={() => setData(data)}>Update</Button>
    //                                 </Table.Cell>
    //                             </Link>
    //                             <Table.Cell>
    //                                 <Button onClick={() => onDelete(data.id)}>Delete</Button>
    //                             </Table.Cell>
    //                         </Table.Row>
    //                     )
    //                 })}
    //             </Table.Body>
    //         </Table>
    //     </div>
    // )

    return (
        <div id="main-page">
            <h1>Featured Charts</h1>
            <center>
                <div className='chart-container'>
                    {APIData.map((data) => (
                        <div className='card'>
                            <div className='img-card'>
                                <img src={data.image_url} alt='chart-not-found' />
                            </div>
                            <br></br>
                            <div className='detail-card'>
                                <h1>{data.user_id}</h1>
                                <h3>{data.trading_pair}</h3>
                                <p>{data.comment}</p>
                                {/* <button onClick={handleMarkBtn}>{isMarked ? "Mark as unread" : "Mark as read" }</button> */}
                                <br></br>
                                <Link to='/update'>
                                    <Button onClick={() => setData(data)}>Update</Button>
                                </Link>
                                <Button onClick={() => onDelete(data.id)}>Delete 🗑</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </center>
        </div>
    );
}