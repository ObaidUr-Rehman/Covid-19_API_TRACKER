import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'//
import './Statewise.css'

const StateWise = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        // promises return krrha hota bcz asyc await - data will be fulfilled or rejected
        const res = await fetch('https://data.covid19india.org/data.json'); // in pending stage bcz await
        const actualData = await res.json(); // change into jS object, promise return
        console.log(actualData.statewise);
        setData(actualData.statewise)
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className="container-fluid mt-5">
                <div className='main-heading'>
                    <h1 className=' text-center mb-4'><span className='fw-bold'> INDIA </span>COVID-19 DASHBOARD</h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='thead-dark table-dark'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updates</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElem, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default StateWise
