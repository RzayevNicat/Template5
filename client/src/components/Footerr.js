import React from 'react'
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
function Footerr() {
    return (
        <div className='footer'>
            <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
            <div className='icons'>
                <AiFillLinkedin className='icon'/>
                <AiOutlineInstagram className='icon'/>
                <AiOutlineFacebook className='icon'/>
                <AiOutlineTwitter className='icon'/>
            </div>
        </div>
    )
}

export default Footerr
