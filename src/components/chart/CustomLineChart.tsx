import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import { dH, dW } from '../../utils/dynamicHeigthWidth';


const CustomLineChart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
          datasets: [
            {
              data: [200, 150, 100, 50, 10],
            },
          ],
        }}
        style={{marginTop:dH(36)}}
        width={dW(669)}
        height={dH(392)}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
      />
    </View>
  );
};

export default CustomLineChart;

const styles = StyleSheet.create({});
