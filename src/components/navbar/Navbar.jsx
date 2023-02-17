import React from 'react';
import { Rimenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css';

const Navbar = () => {
	return (
		<div className="gpt3__navbar">
			<div className='gpt3__nabvar-links'>
				<div className='gpt3__nabvar-links_logo'>
					<img src={logo} alt="logo" />
				</div>
			</div>
		</div>
	)
}

export default Navbar
