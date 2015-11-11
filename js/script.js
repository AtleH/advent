$(document).ready(function() {

  var colsPerRow = 6;
  for (row = 1; row <= 4; row++) {
    var yTransform = 50 + (row-1) * 100;
    var rowGroup = d3.select("svg")
        .append("g")
        .attr("transform", "translate(0, " + yTransform + ")");
    for (col = 1; col <= colsPerRow; col++) {
      var hatchNo = (row-1) * colsPerRow + col;
      var xTransform = 50 + (col - 1) * 150;
      cell = rowGroup.append("g")
          .attr("transform", "translate(" + xTransform + ",0)")
          .on("click", function() {
            var element = d3.select(this);
            console.log("clicked: ", element);
          });
      cell.append("text")
          .attr("id", hatchNo)
          .attr("class", "hatch")
          .attr("x", "28")
          .attr("y", "48")
          .text(hatchNo);
      cell.append("rect")
          .attr("class", "hatch")
          .attr("x", 0)
          .attr("y", 0)
          .attr("height", "80")
          .style("width", "100");
    }
  }
});

function hatchOpener(d, i) {
  var hatchElement = d3.select(this);
  console.log("Opening hatch: " + this.id);
}
