import React, { useEffect, useState } from 'react'
import SimpleSlider from '../components/Carousel'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function Home() {
    const [data, setData] = useState([])
    const [q, setQ] = useState('')
    const [params, setParams] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3000/datas').then(res => setData(res.data))
    }, [])
    const datas = Object.values(data)
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/datas/${id}`)
        let copy = data.filter(x => x._id !== id)
        setData(copy)
    }
    const navigate = useNavigate()
    function search(items) {
        if (params === true) {
            items.sort((a, b) => a.price - b.price)
            return items.filter((item) =>
                item.courseName.toLowerCase().indexOf(q.toLowerCase()) > -1
            );
        }
        else {
            return items.filter((item) =>
                item.courseName.toLowerCase().indexOf(q.toLowerCase()) > -1
            );
        }
    }
    const handleDetail = (id) => {
        navigate(`details/${id}`)
    }
    return (
        <div>
            <Helmet>
                <meta name="description" content='React Application' />
                <title>Home Page</title>

            </Helmet>
            <SimpleSlider />
            <section className='courses'>
                <span className='line'></span>
                <h1>Popular Courses</h1>
                <div className='srch'>
                    <input placeholder='search' value={q} onChange={(e) => setQ(e.target.value)} />
                    <button className='filter' onClick={() => params ? setParams(false) : setParams(true)}>Filter</button>

                </div>

                <div className='courses-cards'>
                    {
                        search(datas).map((ele, index) => (
                            <div className='course-card' key={index}>
                                <img src={ele.courseSrc} onClick={() => handleDetail(ele._id)} />
                                <h2>{ele.courseName}</h2>
                                <p className='adobe'>{ele.courseInfo}</p>
                                <div className='avatar'>
                                    <div className='avatar-info'>
                                        <img src={ele.avatarSrc} />
                                        <h5>{ele.avatarName}</h5>
                                        <span>{ele.avatarWork}</span>
                                    </div>
                                    <p>${ele.price}</p>
                                </div>
                                <button className='delete' onClick={() => handleDelete(ele._id)}>Delete</button>
                            </div>
                        ))
                    }



                </div>
            </section>
            <section className='register'>
                <div className='register-info'>
                    <h1>Register now and get a discount <span>50% </span> discount until 1 January</h1>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                    <button>Register Now</button>
                </div>
                <div className='register-input'>
                    <h1>Search for your Course</h1>
                    <input placeholder='Course Name' />
                    <input placeholder='Category' />
                    <input placeholder='Degree' />
                    <button>Search Course</button>

                </div>
            </section>
            <section className='services'>
                <span className='line'></span>
                <h1>Our Services</h1>
                <div className='services-cards'>
                    <div className='service-card'>
                        <img src='https://preview.colorlib.com/theme/course/images/earth-globe.svg' />
                        <h1>Online Courses</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='service-card'>
                        <img src='https://preview.colorlib.com/theme/course/images/exam.svg' />
                        <h1>Indoor Courses</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='service-card'>
                        <img src='https://preview.colorlib.com/theme/course/images/books.svg' />
                        <h1>Amazing Library</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='service-card'>
                        <img src='https://preview.colorlib.com/theme/course/images/professor.svg' />
                        <h1>Exceptional Professors</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='service-card'>
                        <img src='https://preview.colorlib.com/theme/course/images/blackboard.svg' />
                        <h1>Top Programs</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                    <div className='service-card'>
                        <img src='https://preview.colorlib.com/theme/course/images/mortarboard.svg' />
                        <h1>Graduate Diploma</h1>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                    </div>
                </div>
            </section>
            <section className='events'>
                <span className='line'></span>
                <h1>Upcoming Events</h1>
                <div className='events-cards'>
                    <div className='event-card'>
                        <div className='date'>
                            <h1>07</h1>
                            <p>January</p>
                        </div>
                        <div className='event-infos'>
                            <h2>Student Festival</h2>
                            <p>Grand Central Park</p>
                            <span>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</span>
                        </div>
                        <img src='https://preview.colorlib.com/theme/course/images/event_1.jpg' />
                    </div>
                    <div className='event-card'>
                        <div className='date'>
                            <h1>07</h1>
                            <p>January</p>
                        </div>
                        <div className='event-infos'>
                            <h2>Student Festival</h2>
                            <p>Grand Central Park</p>
                            <span>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</span>
                        </div>
                        <img src='https://preview.colorlib.com/theme/course/images/event_1.jpg' />
                    </div>
                    <div className='event-card'>
                        <div className='date'>
                            <h1>07</h1>
                            <p>January</p>
                        </div>
                        <div className='event-infos'>
                            <h2>Student Festival</h2>
                            <p>Grand Central Park</p>
                            <span>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</span>
                        </div>
                        <img src='https://preview.colorlib.com/theme/course/images/event_1.jpg' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
