"use client";
import { ResponsiveBar } from '@nivo/bar';

const ChartTitle = ({ width, margin }) => (
    <text
        x={(width - margin.right) / 2}
        y={margin.top * -0.5}
        textAnchor="middle"
        style={{
            fontSize: '20px',
            fontWeight: 'bold',
            fill: '#eee',
        }}
    >
        Genre Polarisation
    </text>
);

const BipolarBarChart = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={['lowRating', 'highRating']}
        indexBy="genre"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'spectral' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        theme={{
            background: "#2c2c2e",
            axis: {
                ticks: {
                    text: {
                        fill: "#eee",
                    },
                },
                legend: {
                    text: {
                        fill: "#eee",
                    },
                },
            },
            grid: {
                line: {
                    stroke: "#444",
                },
            },
            tooltip: {
                container: {
                    background: '#444',
                    color: '#eee',
                },
            },
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Genre',
            legendPosition: 'middle',
            legendOffset: 36,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Rating',
            legendPosition: 'middle',
            legendOffset: -40,
        }}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ],
                itemTextColor: "#eee",
            }
        ]}
        layers={['grid', 'axes', 'bars', 'markers', 'legends', 'annotations', props => <ChartTitle {...props} margin={{ top: 50, right: 130, bottom: 50, left: 60 }} />]}
    />
);

export default BipolarBarChart;
