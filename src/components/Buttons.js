import React from 'react';
import Range from './Range';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeColor } from  '../actionCreators/actions';

class Buttons extends React.Component {
    render() {
        return (<div>
            {['green', 'blue', 'red', 'pink']
                .map((c, i) => <Range key={i} name={c} initialValue={this.props[c]} callback={this.props.changeColor} />)}
        </div>);
    }
}

export default connect(
    state => state.colors,
    (dispatch) => bindActionCreators({ changeColor }, dispatch)
)(Buttons);