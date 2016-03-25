d3.csv("/datasets/profs-difficulty/profs-d3.csv", function(data) {

  var xRange = [50, 600],
      circleR = 8;

  var dpmtNames = data.map(function(d) { return d.Subject });
  dpmtNames = d3.set(dpmtNames.sort()).values();

  d3.select("#pick-dpmt")
    .selectAll("option")
    .data(dpmtNames)
    .enter()
    .append("option")
    .attr("value", function(d) { return d })
    .html(function(d) { return d })

  $("#pick-dpmt").change(function() {
      var selectedDpmt = $(this).val();
      pickDpmt(selectedDpmt);
  }).change();

  function pickDpmt(dpmt) {
    var newData = data.filter(function(d) { return d.Subject === dpmt }),
        gradesExtent = d3.extent(newData, function(d) { return d.ProfGrade });
        xScale = d3.scale.linear().domain(gradesExtent).range(xRange),
        y = 150;

    var groups = newData.map(function(d) { return d.Group });
    groups = d3.set(groups.sort()).values();

    var nestedData = d3.nest()
        .key(function(d) { return d.Group })
        .entries(newData);

        console.log(nestedData);

    var svgData = d3.select("#viz-container")
      .selectAll("svg")
      .data(nestedData, function(d) { return Math.random() + dpmt; })

    var svgGroups = svgData.enter()
        .append("svg");

    svgGroups.append("text")
        .attr("x", 700)
        .attr("y", 100)
        .attr("class", "group-label")
        .text(function(d, i) { return "Group " + (i + 1); })

    var profData = svgGroups.selectAll("g")
        .data(function(d) { return d.values });

    var profG = profData.enter()
        .append("g")
        .translate(function(d) { return [xScale(d.ProfGrade), y] })

    var circles = profG.append("circle")
      .attr("class", "prof-circle")
      .attr("r", circleR)
      .attr("cx", 0)
      .attr("cy", 0)
      .on("mouseover", function(d, i) { return mouseOverCircle(d); })
      .on("mouseleave", function(d, i) { return mouseLeaveCircle(d); })

    var names = profG.append("text")
      .attr("class", "prof-label")
      .attr("x", -circleR / 1.2)
      .attr("y", function(d, i) { return i % 2 === 0 ? 20 : -20 })
      .text(function(d) { return getInitials(d.Instructor) })

    function mouseOverCircle(d) {
      profG.filter(function(p) { return p === d; })
        .select("circle")
        .attr("class", "selected-prof-circle")
    }

    function mouseLeaveCircle(d) {
      profG.filter(function(p) { return p === d; })
        .select("circle")
        .attr("class", "prof-circle")
    }

    profData.exit().remove()
    svgData.exit().remove()
  }

});



function getInitials(fullName) {
  var firstNameInitial = fullName.split(", ")[1].split("")[0]
  var lastNameInitial = fullName.split("")[0]
  return firstNameInitial + lastNameInitial;
}

// test viz
d3.select("#viz-test").append("svg")

function update(data) {
  var g = d3.select("#viz-test svg").selectAll("g")
  .data(data, function(d) { return d; })

  g.enter()
    .append("g")
    .translate(function(d) { return [d * 50 + 60, 80]; })

  g.append("circle")
    .style("fill", "indianred")
    .attr("r", 8)
    .attr("cx", 0)
    .attr("cy", 0)
    .style("opacity", 0)
    .transition()
    .duration(300)
    .style("opacity", 2)

  g.exit().transition().duration(300).style("opacity", 0).remove()
}

var data =  [5, 6, 7, 8, 9, 10].map(function(d) { return d * Math.random() });
update(data);
setInterval(function() {
  var data =  [5, 6, 7, 8, 9, 10].map(function(d) { return d * Math.random() });
  update(data);
}, 2000);