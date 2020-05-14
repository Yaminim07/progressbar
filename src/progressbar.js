import React, { useState, useEffect } from 'react';
import './App.css';

export default function ProgressBar(props){
    const[progress, setProgress] = useState('0%')
    const[barHeight, setbarHeight] = useState("5px")

    useEffect (() => {
        if(props.progress && props.progress !== progress)
        setProgress(props.progress)
        if(props.barHeight && props.barHeight !== barHeight)
        setbarHeight(props.barHeight)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.progress, props.barColor, props.barHeight]);

    let containerStyle = {
        height: barHeight
    }, 
    barStyle = {
        width: progress,
    };

    return (
        <div className="bar-container" style={containerStyle}>
            <div className="progress-track"></div>
            <div className="progress-bar" style={barStyle}></div>
        </div>
    )

}