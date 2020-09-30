import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'reactstrap';
import { AiOutlineMail } from 'react-icons/ai';

const ListBar = (props) => {
    return (
        <tr>
            <td>{props.person.personName}</td> 
            <td>{props.person.personAddress}</td>
            <td>{props.person.personNeed}</td>
            <td>{props.person.personDescription}</td>
            <td>{props.person.personDate}</td>
            <td>
                <Link to={"/delete/"+props.person._id}><AiOutlineMail /></Link>
            </td>
        </tr>
    );
}

const ListPerson = () => {
    const [listData, setListData] = useState({ lists: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/all_person/'
            );
            setListData({ lists: result.data });
        };
        fetchData();
    }, []);

    return (
        <div className="list">
            <div className="list-img">
            <h1>View Local Needs</h1>
            </div>
                <div className="list-blurb"><h2>Needs & Deeds</h2>
                <p>This is the current list of needs in the community. Someone has submitted a request for help.</p>
                <p>Every <b><i>need</i></b>  is is waiting to be claimed.</p>
                <p>If you would like to perform a <b><i>deed</i></b>, click the "Claim Need" mail icon to access the contact information.</p>
                <h3>List of Needs</h3>
                <p id="table-hint">Scroll right to view contact info.</p>
            </div>
            <div id="table-div">
                <Table striped style={{  }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Need</th>
                            <th>Description</th>
                            <th>Help needed by (date)</th>
                            <th>Claim Need</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.lists.map((current, i) => (
                            <ListBar person={current} key={i} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ListPerson;