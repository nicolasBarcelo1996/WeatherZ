import React from 'react'
import { WiSnowflakeCold } from 'weather-icons-react';
import './All.css'


function ChangeBackground ({setearBg}) {
    return (
        <div className="blankPage">
            <button
            onClick={setearBg}
            className="rotate"><WiSnowflakeCold className="snowFlake" 
            size={100}
            color='#f5f5f5'
            /></button>
        </div>
    )
}

export default ChangeBackground
