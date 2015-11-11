// Code goes here

$(document).ready(function(){
  var calendarRoot = document.getElementById("calendar-root");
  //calendarRoot.appendChild("<rect class='luke' x='0' y='0' height='80' width='100'></rect>");
  //$('#calendar-root').append($("<rect class='luke' x='0' y='0' height='800' width='600'></rect>"));
  var svgns = "http://www.w3.org/2000/svg";
  var colsPerRow = 6;
  for (row = 1; row <= 4; row++) {
    var rowNode = document.createElementNS(svgns, "G");
    var yTransform = 50 + (row-1) * 100;
    rowNode.setAttributeNS(null, "transform", "translate(0," + yTransform + ")");
    calendarRoot.appendChild(rowNode);
    for (col = 1; col <= colsPerRow; col++) {
      var colNode = document.createElementNS(svgns, "G");
      var xTransform = 50 + (col-1) * 150;
      //$("#calendar-root").append("<g/>", {transform: "translate(" + xTransform + ",0)"});
      //var colNode = document.createElement("G");
      colNode.setAttributeNS(null, "transform", "translate(" + xTransform + ",0)");
      //colNode.setAttribute("onClick", "hatch_open('days/1.html')");
      var rect = document.createElementNS(svgns, "rect");
      rect.setAttributeNS(null, "class", "luke");
      rect.setAttributeNS(null, "x", "0");
      rect.setAttributeNS(null, "y", "0");
      rect.setAttributeNS(null, "height", "80");
      rect.setAttributeNS(null, "width", "100");
      colNode.appendChild(rect);
      var text = document.createElementNS(svgns, "text");
      text.setAttributeNS(null, "class", "luketext");
      text.setAttributeNS(null, "x", "28");
      text.setAttributeNS(null, "y", "48");
      text.textContent = '99';
      colNode.appendChild(text);
      rowNode.appendChild(colNode);
      //console.log((row - 1) * colsPerRow + col);
    }
  }
});

function hatch_open (url) {
  window.location.href = url;
}