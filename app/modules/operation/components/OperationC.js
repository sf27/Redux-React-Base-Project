import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {onClickAdd, onClickSubstract} from "../reducers";

class OperationC extends Component {
    render() {
        const {value, onClickAdd, onClickSubstract} = this.props;
        return (
            <div>
                <div>Operation - Main Component</div>
                <h1>Value: {value}</h1>
                <button onClick={onClickAdd}>Add</button>
                <button onClick={onClickSubstract}>Substract</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
{
    value: state
}
);

const mapDispatchToProps = (dispatch) => (
{
    onClickAdd: () => {
        dispatch(onClickAdd());
    },
    onClickSubstract: () => {
        dispatch(onClickSubstract());
    }
}
);

export default connect(mapStateToProps, mapDispatchToProps)(OperationC);