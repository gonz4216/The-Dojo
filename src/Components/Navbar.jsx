import React from 'react'
import './Navbar.css'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import Temple from '../assets/temple.svg'
import { Link } from 'react-router-dom'
function Navbar() {
    const { logout, isPenidng } = useLogout()
    const { user } = useAuthContext()
    return (
        <div className='navbar'>
            <ul>
                <li className="logo"><img src={Temple} alt="" />
                    <span>The Dojo</span>
                </li>
                {!user && (
                    <>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                    </>

                )}

                {user && (

                    <li>
                        {!isPenidng && <button className='btn' onClick={logout}>Logout</button>}
                        {isPenidng && <button className='btn' disabled onClick={logout}>Loading</button>}
                    </li>
                )}

            </ul>
        </div>

    )
}

export default Navbar