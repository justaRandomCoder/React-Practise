import React from 'react'
import Button from './Button';

class Clock extends React.Component {

    state = {
        date: new Date(),
        locale: "bn-BD",
    }

    componentDidMount() {
        this.clockInteval = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockInteval);
    }

    tick() {
        this.setState({ 
            date: new Date() 
        });
    }

    handleClick = (locale) => {
        this.setState({ 
            locale: locale 
        });
    }

    render() {
        return (
            <>
                <div className="card">
                    <span>
                        Hello {this.state.date.toLocaleTimeString(this.state.locale)}
                    </span>
                </div>
                <Button change = {this.handleClick} locale = 'en-US'></Button>
            </>
        )
    }
}

export default Clock