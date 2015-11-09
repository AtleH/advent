// Code goes here

$(document).ready(function(){
  var calendarRoot = document.getElementById("calendar-root");
  var colsPerRow = 6;
  for (row = 1; row <= 4; row++) {
    var rowNode = document.createElement("G");
    var yTransform = 50 + (row-1) * 100;
    rowNode.setAttribute("transform", "translate(0," + yTransform + ")");
    calendarRoot.appendChild(rowNode);
    for (col = 1; col <= colsPerRow; col++) {
      var colNode = document.createElement("G");
      var xTransform = 50 + (col-1) * 150;
      //$("#calendar-root").append("<g/>", {transform: "translate(" + xTransform + ",0)"});
      //var colNode = document.createElement("G");
      colNode.setAttribute("transform", "translate(" + xTransform + ",0)");
      //colNode.setAttribute("onClick", "hatch_open('days/1.html')");
      var rect = document.createElement("rect");
      rect.setAttribute("class", "luke");
      rect.setAttribute("x", "0");
      rect.setAttribute("y", "0");
      rect.setAttribute("height", "80");
      rect.setAttribute("width", "100");
      colNode.appendChild(rect);
      var text = document.createElement("text");
      text.setAttribute("class", "luketext");
      text.setAttribute("x", "28");
      text.setAttribute("y", "48");
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