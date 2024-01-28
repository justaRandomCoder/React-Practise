import React from 'react'

class Button extends React.Component {

    shouldComponentUpdate(nextProps){
        const{currentChange} = this.props;
        const{nextChange} = nextProps;
        if(currentChange == nextChange){
            return false;
        }
        else return true;
    }

    render() {
        console.log("Button Component Rendered")
        const {change, locale} = this.props
        return (
            <>
                <button type="button" onClick={() => {change(locale)}}>
                    Click here
                </button>
            </>
        );
    }
}

export default Button;