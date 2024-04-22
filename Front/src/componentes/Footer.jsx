import React from 'react';
import Link from '@mui/material/Link';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css'

export default function Footer() {
    return (

        <div className='text-center p-3'  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', backgroundColor: 'rgba(0, 0, 0, 0.2)', marginTop: '20px' }}>
            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <NavLink to="/" underline="none" color='inherit'>
                    <h6 id='links'>Home</h6>
                </NavLink>
                <NavLink to="/maquinas" underline="none" color='inherit'>
                <h6 id='links'>Maquinas</h6>
                </NavLink>
                <NavLink to="/herramientas" underline="none" color='inherit'>
                <h6 id='links'>Herramientas</h6>
                </NavLink>
                <NavLink to="/andamios" underline="none" color='inherit'>
                <h6 id='links'>Andamios</h6>
                </NavLink>
                <NavLink to="/otros" underline="none" color='inherit'>
                <h6 id='links'>Otros</h6>
                </NavLink>
            </div>
            <div>
                <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfPUGYvJg2LcVS4Cs7SVrHOuXr63VL4xbz6Q_bWrUGimxRk_SmoMWJQit8QiXWfHukyyUeBA_kvMe-8EmnAisW6GoJESBs6QqFjwC_LRCpgQVI8Gumc99fqRXEbDW5TtEDAvkPzTmv1HrrnjFE19HBVbvlDv1v-dX09UNl56fiJ5Gyqse7pr562SYEDDY/s1600/q.png" 
                alt="logo" style={{width: '100px',  borderRadius:'5px'}}/>
                <div>
                © 2024 Copyright:
                <a className='text-white' href='https://www.digitalhouse.com/ar'>
                    DigitalHouse.com
                </a>
                </div>
            </div>
            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <div  style={{ display: 'flex'}}>
                    <InstagramIcon id='links'/>
                    <h6 id='links' style={{marginLeft:'10px'}}>@Qtools</h6>
                </div>
                <div style={{ display: 'flex'}}>
                    <EmailIcon id='links'/>
                    <h6 id='links' style={{marginLeft:'10px'}}>info@qtools.com</h6>
                </div>
                <div style={{ display: 'flex'}}>
                    <FacebookIcon id='links'/>
                    <h6 id='links' style={{marginLeft:'10px'}}>Qtools-rental</h6>
                </div>
                <div style={{ display: 'flex'}}>
                    <PhoneEnabledIcon id='links'/>
                    <h6 id='links' style={{marginLeft:'10px'}}>+54-221-5484657</h6>
                </div>

            </div>
        </div>

    );
}