import React from 'react';
import Link from '@mui/material/Link';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
    return (

        <div className='text-center p-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', backgroundColor: 'rgba(0, 0, 0, 0.2)', marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Link href="/" underline="none" color='inherit'>
                    {'Home'}
                </Link>
                <Link href="/maquinas" underline="none" color='inherit'>
                    {'Máquinas'}
                </Link>
                <Link href="/herramientas" underline="none" color='inherit'>
                    {'Herramientas'}
                </Link>
                <Link href="/andamios" underline="none" color='inherit'>
                    {'Andamios'}
                </Link>
                <Link href="/otros" underline="none" color='inherit'>
                    {'Otros'}
                </Link>
            </div>
            <div>
                <img src="/q.png" alt="logo" style={{width: '100px',  borderRadius:'5px'}}/>
                <div>
                © 2024 Copyright:
                <a className='text-white' href='https://www.digitalhouse.com/ar'>
                    DigitalHouse.com
                </a>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <div style={{ display: 'flex'}}>
                    <InstagramIcon />
                    <h6 style={{marginLeft:'10px'}}>@Qtools</h6>
                </div>
                <div style={{ display: 'flex'}}>
                    <EmailIcon />
                    <h6 style={{marginLeft:'10px'}}>info@qtools.com</h6>
                </div>
                <div style={{ display: 'flex'}}>
                    <FacebookIcon />
                    <h6 style={{marginLeft:'10px'}}>Qtools-rental</h6>
                </div>
                <div style={{ display: 'flex'}}>
                    <PhoneEnabledIcon />
                    <h6 style={{marginLeft:'10px'}}>+54-221-5484657</h6>
                </div>

            </div>
        </div>

    );
}