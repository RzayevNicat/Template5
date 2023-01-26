import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi';
function NavBar() {
    return (
        <div className='navi'>
            <div className='nav'>
                <div className='logo'>
                    <img src='https://preview.colorlib.com/theme/course/images/logo.png.webp' />
                    <span>COURSE</span>
                </div>
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'add'}>Add</Link>
                    <li>Courses</li>
                    <li>Element</li>
                    <li>News</li>
                    <li>Contacts</li>
                </ul>
                <div className='call'>
                    <FiPhoneCall />
                    <p>+43 4566 7788 2457</p>
                </div>

            </div>
        </div>
    )
}

export default NavBar
