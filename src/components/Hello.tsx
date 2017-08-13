import * as React from "react";
import { connect, Dispatch } from 'react-redux';
import {
    CountAction, decrementCount, DecrementCount, HelloState, FetchImage, incrementCount,
    IncrementCount, fetchImage
} from "../modules/hello";

interface Props {
    compiler: string;
    count: number;
    imageURL: string;
    onIncrement: () => IncrementCount;
    onDecrement: () => DecrementCount;
    onImage: () => FetchImage;
}

class Hello extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.count}!</h1>
                <div><img src={this.props.imageURL} /></div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onImage}>nyatte</button>
            </div>
        );
    }
}

export default connect(
    (state: HelloState) => {
        return {compiler: state.compiler, count: state.count, imageURL: state.imageURL}
    },
    (dispatch: Dispatch<CountAction>) => {
        return {
            onIncrement: () => dispatch(incrementCount()),
            onDecrement: () => dispatch(decrementCount()),
            onImage: () => dispatch(fetchImage()),
        }
    },
)(Hello);
