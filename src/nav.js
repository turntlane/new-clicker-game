import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <div className='nav-container'>
                <ul>
                <li>
                    <Link className='nav' to='/nav'>Home</Link>
                    </li>
                <li>
                    <Link className='nav' to='/Clicker'>Clicker Game</Link>
                    </li>
                    <li>
                    <Link className='nav' to='/Reaction'>Reaction Game</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav
