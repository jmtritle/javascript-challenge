// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
console.log(data);

tableData.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    
});

function filterUfo() {
    var datafilter = tableData;
    var formfilter = d3.select("#datetime").node();
    var date = formfilter.value;
    if(date.length > 0) {
        datafilter = tableData.filter(tableData => tableData.datetime === date)
    };

    var formfilter = d3.select("#city").node();
    var city = formfilter.value;
    if(city.length > 0) {
        datafilter = tableData.filter(tableData => tableData.city === city)
    };

    var formfilter = d3.select("#state").node();
    var state = formfilter.value;
    if(state.length > 0) {
        datafilter = tableData.filter(tableData => tableData.state === state)
    };    
    
    var formfilter = d3.select("#country").node();
    var country = formfilter.value;
    if(country.length > 0) {
        datafilter = tableData.filter(tableData => tableData.country === country)
    };
    var formfilter = d3.select("#shape").node();
    var shape = formfilter.value;
    if(shape.length > 0) {
        datafilter = tableData.filter(tableData => tableData.shape === shape)
    };
    
    d3.selectAll("tr").remove();
    datafilter.forEach(function(ufoInfo) {
        var tr = tbody.append("tr");
        tr.append("td").text(ufoInfo.datetime);
        tr.append("td").text(ufoInfo.city);
        tr.append("td").text(ufoInfo.state);
        tr.append("td").text(ufoInfo.country);
        tr.append("td").text(ufoInfo.shape);
        tr.append("td").text(ufoInfo.durationMinutes);
        tr.append("td").text(ufoInfo.comments);
      }, this);

}


    

d3.select("#filter-btn").on("click",filterUfo);