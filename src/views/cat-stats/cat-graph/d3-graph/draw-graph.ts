import * as d3 from 'd3'
import * as _ from 'lodash'

const drawGraph = () => {

  // const data0 = [
  //   [1, 2, 3, 4, 5, 2, 10, 2, 7, 8, 4],
  //   [12, 2, 6, 7, 2, 8, 7, 9, 5, 3, 2]
  // ]

  const data1 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]
  const dataset = _.map(data1, (value, index) => {
    return { x: index, y: value }
  })


  const margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
  }

  const width = 500
  const height = 500

  const xScale = d3.scaleLinear()
    .domain(d3.extent(dataset, d => d.x) as [number, number])
    .range([margin.left, width - margin.right])
    .nice()

  const yScale = d3.scaleLinear()
    .domain(d3.extent(dataset, d => d.y) as [number, number])
    .range([height - margin.bottom, margin.top])
    .nice()

  console.log('scale', height - margin.bottom, margin.top)

  const line = d3.line<typeof dataset[number]>()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    .curve(d3.curveBasis)

  d3.selectAll('.my-graph > *').remove()

  const svg = d3.select('.my-graph')
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  
  const div = d3.select(".my-graph").append("div")	
  .attr("class", "tooltip")				
  .style("opacity", 0);

  svg.append("g")
    .attr('class', 'x axis')
    .attr("transform", `translate(0, ${height - margin.bottom })`)
    .text('Cat Stats Page Launch')
    .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom
    
  svg.append("g")
    .attr("class", "y axis")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

  svg.append("path")
    .datum(dataset)
    .attr("class", "line")
    // .attr("transform", "rotate(180)translate(0, 700)")
    .attr("d", line);

  svg.selectAll(".dot")
    .data(dataset)
    .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 5)
    .on("mouseover", function(d) {		
        div.transition()
            .duration(200)		
            .style("opacity", .9);		

        div.html(d.x + "<br/>"  + d.y)	
            .style("left", parseFloat(d3.select(this).attr("cx")) + 0.16 * margin.left + "px")		
            .style("top", parseFloat(d3.select(this).attr("cy")) + 1.25 * margin.top + "px");	
        })					
    .on("mouseout", d => {		
        div.transition()		
            .duration(500)		
            .style("opacity", 0);	
    });
}

export default drawGraph