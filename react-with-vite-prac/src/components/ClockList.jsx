import React from 'react'
import Clock from './Clock';

function ClockList(props) {
    const { elements } = props

    return (<>
        {elements.map(x => <Clock key={x}></Clock>)}
    </>)
}

export default ClockList;