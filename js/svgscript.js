$(document).ready(function() {
    //d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
    //d3.select("svg").append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
    var row = d3.select("svg")
        .append("g")
        .attr("transform", "translate(0, 50)");
    row.append("rect")
        .attr("class", "luke")
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", "80")
        .style("width", "100");
    console.log("element added")
});


var rect = document.createElementNS(svgns, "rect");
rect.setAttributeNS(null, "class", "luke");
rect.setAttributeNS(null, "x", "0");
rect.setAttributeNS(null, "y", "0");
rect.setAttributeNS(null, "height", "80");
rect.setAttributeNS(null, "width", "100");
colNode.appendChild(rect);
