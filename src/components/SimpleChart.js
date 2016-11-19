import React from 'react';
import createOptions from '../chartCreators/createChart';
import { StyleSheet, css } from 'aphrodite';

var HighCharts = require('highcharts'),
    addFunnel = require('highcharts/modules/funnel.src');


export default ({type, data, visibleCharts}) => {

    if (visibleCharts.indexOf(type) > -1) {
        addFunnel(HighCharts);
        HighCharts.chart(document.getElementById(type), createOptions[type](data));
    }


    return (
        <div id={type} className={css(
            visibleCharts.indexOf(type) > -1 ? styles.visible : styles.hidden
        )}>
        </div>
    );
};

const styles = StyleSheet.create({
   visible: {
       display: 'block'
   },
   hidden: {
       display: 'none'
   }
});