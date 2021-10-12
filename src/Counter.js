import React, {Component} from "react";
import Button from "./Button";
// change background color on setState
class Counter extends Component {
    state = {
        counter: 0
    }

    increase = () => {
        if (this.state.counter < 10) {
            this.setState({ counter: ++this.state.counter});
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }
    }

    decrease = () => {
        if (this.state.counter > -10) {
            this.setState({ counter: --this.state.counter});
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }
    }

    render() {
        
        return (
            <div className="wrapper">
                <Button text="-" func={this.decrease}/>
                <div className="result">{this.state.counter}</div>
                <Button text="+" func={this.increase}/>
            </div>
        )
    }
}

export default Counter;