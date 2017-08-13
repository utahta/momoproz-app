import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from "react-redux";
import counter, { HelloState } from "./modules/hello"
import Hello from "./components/Hello"

const store = createStore<HelloState>(counter, {
    compiler: 'TypeScript',
    count: 1,
    imageURL: "",
});

ReactDOM.render(
    <Provider store={store} ><Hello /></Provider>,
    document.getElementById("root")
);
