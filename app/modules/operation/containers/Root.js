import React from "react";
import {Provider} from "react-redux";
import store from "../store";
import OperationCRelay from "../components/OperationC";

const OperationCRoot = () => (
    <Provider store={store}>
        <OperationCRelay />
    </Provider>
);

export default OperationCRoot;