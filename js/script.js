var openHatches;
var cookieName = 'openHatches';

$(document).ready(function () {

    var colsPerRow = 6;
    for (row = 1; row <= 4; row++) {
        var yTransform = 50 + (row - 1) * 100;
        var rowGroup = d3.select("svg")
            .append("g")
            .attr("transform", "translate(0, " + yTransform + ")");
        for (col = 1; col <= colsPerRow; col++) {
            var hatchNo = (row - 1) * colsPerRow + col;
            var xTransform = 50 + (col - 1) * 150;
            cell = rowGroup.append("g")
                .attr("transform", "translate(" + xTransform + ",0)")
                .on("click", function () {
                    var no = d3.select(this)
                        .selectAll('rect')
                        .attr('id');
                    hatchOpener(no);
                    window.open('day.html?day=' + no, '_self');
                });
            cell.append("text")
                .attr("class", "hatch")
                .attr("x", "28")
                .attr("y", "48")
                .text(hatchNo);
            cell.append("rect")
                .attr("id", hatchNo)
                .attr("class", "hatch")
                .attr("x", 0)
                .attr("y", 0)
                .attr("height", "80")
                .style("width", "100");
        }

        openHatches = getCookie(cookieName);
        openHatches.forEach(function (isOpen, index) {
            if (isOpen) {hatchOpener(index)}
        })
    }
});

function hatchOpener(day) {
    console.log("Opening hatch: " + day);
    d3.select('rect[id="' + day + '"]')
        .style({fill: "rgba(0,0,0,0.7)"});
    openHatches[day] = true;
    console.log(openHatches);
    setCookie(cookieName, openHatches, 180);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + JSON.stringify(cvalue) + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            var cookieValue = c.substring(name.length, c.length);
            return JSON.parse(cookieValue);
        }
    }
    return new Array(24).fill(false);
}