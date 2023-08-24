import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

function Fakeapi() {
    const [data, setData] = useState([])

    const getData = async () => {
        const apiData = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        setData(apiData.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                        
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                      

                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr>
                               
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                              
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </>
    )
}

export default Fakeapi;