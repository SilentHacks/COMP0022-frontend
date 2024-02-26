"use client";
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#FFFFFF"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        tooltip={({ datum }) => (
            <div
                style={{
                    background: '#333',
                    color: '#FFF',
                    padding: '12px 16px',
                    border: '1px solid #777',
                }}
            >
                <strong>{datum.id}</strong>: {datum.value} (Average Rating)
            </div>
        )}
        layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', 'annotations', Title]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#FFF'
                        }
                    }
                ]
            }
        ]}
    />
);

const Title = ({ width }) => {
    return (
        <g transform={`translate(${width / 2}, -40)`}>
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    fill: '#FFF',
                }}
            >
                Genre Ratings
            </text>
        </g>
    );
};

export default PieChart;
