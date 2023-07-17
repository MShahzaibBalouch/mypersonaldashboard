import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart
    const data = [
      { name: 'Jan', value: 15 },
      { name: 'Feb', value: 20 },
      { name: 'Mar', value: 15 },
      { name: 'Apr', value: 21 },
    ];

    // Dimensions of the chart
    const width = 330;
    const height = 240;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create SVG container
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create chart group within SVG
    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Create x and y scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([chartHeight, 0]);

    // Create x and y axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Draw x-axis
    chart
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(xAxis);

    // Draw y-axis
    chart.append('g').attr('class', 'y-axis').call(yAxis);

    // Draw bars
    chart
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.name))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('fill', '#349daa')
      .attr('height', (d) => chartHeight - yScale(d.value));

    // Clean up
    return () => {
      svg.remove();
    };
  }, []);

  return (
    <div className="card col-12 px-2 py-2">
      <p className="card-title">{`New Deals by: Month, this.year>`}</p>
      <div className="card-body">
        <div ref={chartRef} className='chart-area m-r-5'></div>
      </div>
    </div>
  );
};

export default BarChart;
