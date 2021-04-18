import {Component} from "react";
import {Button} from "react-bootstrap";

export class MyButton extends Component {
    render() {
        const {text, onClick, disabled} = this.props
        return (
            <Button onClick={onClick}
                    className="btn btn-primary mt-2"
                    disabled={disabled}
            >
                {text}
            </Button>
        )
    }
}