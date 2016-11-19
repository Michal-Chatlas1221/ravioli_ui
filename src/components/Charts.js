import React from 'react';
import { connect } from 'react-redux';
import ChartSelector from './ChartSelector';
import { bindActionCreators } from 'redux';
import { toggleChart } from '../actionCreators/actions';
import SimpleChart from './SimpleChart'

class Charts extends React.Component {
    render() {
        return (
            <div>
                <h2>Charts</h2>
                {
                    ['line', 'pie', 'semi_circle', 'column'].map((e, i) => (
                        <ChartSelector key={i} type={e} callback={this.props.toggleChart}/>
                    ))
                }
                <br/>
                {
                    ['line', 'pie', 'semi_circle', 'column'].map((e, i) => (
                        <SimpleChart key={i} type={e} data={this.props.colors} visibleCharts={this.props.charts}></SimpleChart>
                    ))
                }
            </div>
        );
    }
}

export default connect(
    state => state,
    (dispatch) => bindActionCreators({ toggleChart }, dispatch)
)(Charts);