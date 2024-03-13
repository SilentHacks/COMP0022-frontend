'use client';
import { useEffect, useRef } from 'react';
import Plot from 'plotly.js-dist-min';

const HeatMap = ({ data }) => {
    const plotRef = useRef(null);

    useEffect(() => {
        const processedData = [{
            z: data.map(row => [row.openness_corr, row.agreeableness_corr, row.extraversion_corr, row.emotional_stability_corr, row.conscientiousness_corr]),
            x: ['Openness', 'Agreeableness', 'Extraversion', 'Emotional Stability', 'Conscientiousness'],
            y: data.map(row => row.name),
            type: 'heatmap',
            colorscale: 'Electric', // A bright colorscale can work well on dark backgrounds
        }];

        Plot.newPlot(plotRef.current, processedData, {
            margin: { t: 50, r: 50, b: 100, l: 100 },
            title: {
                text: 'Correlation between Personality Traits and Movie Genre Ratings',
                font: {
                    color: '#E0E0E0' // Light grey color for the title text
                }
            },
            xaxis: {
                // title: 'Personality Traits',
                tickangle: -45,
                color: '#E0E0E0' // Light grey color for x-axis text
            },
            yaxis: {
                // title: 'Movie Genre',
                color: '#E0E0E0' // Light grey color for y-axis text
            },
            paper_bgcolor: '#333333', // Dark background color for the plot area
            plot_bgcolor: '#333333', // Dark background color for the plotting area
            font: {
                color: '#E0E0E0' // Light grey color for general text
            }
        });
    }, [data]);

    return <div ref={plotRef} style={{ width: '100%', height: '500px' }} />;
};

export default HeatMap;
