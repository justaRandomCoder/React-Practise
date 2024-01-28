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
        this.setState(() => {
            switch (locale) {
                case "en-US":
                    return {
                        locale: "bn-BD"
                    }
                case "bn-BD":
                    return {
                        locale: "en-US"
                    }
            }
        })
    }

    render() {
        return (
            <>
                <div className="card">
                    <span>
                        Hello {this.state.date.toLocaleTimeString(this.state.locale)}
                    </span>
                </div>
                <Button change={this.handleClick} locale={this.state.locale}></Button>
            </>
        )
    }
}

export default Clock