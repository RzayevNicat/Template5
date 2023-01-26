import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function Details() {
    const [details, setDetails] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/datas/${id}`).then(res => setDetails(res.data))
    }, [])
    return (
        <div className='details'>
            <Helmet>
                <meta name="description" content='React Application' />
                <title>Details Page</title>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
            </Helmet>
            <div className='flowers-cards'>


                <div className='flower-card'>
                    <img src={details.courseSrc} />
                    <h4>{details.courseName}</h4>
                    <p>{details.courseInfo}</p>
                    <p>{details.avatarName}</p>
                    <p>{details.avatarWork}</p>
                    <img src={details.avatarSrc} />
                    <p>${details.price}</p>
                </div>



            </div>
        </div>
    )
}

export default Details
