// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
console.log(data);

// pulling the data on the initial page load
tableData.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    
});

// setting up the filterUFO function
// important note: this code will only function for one item
// no filtering for date and state, for instance
// just date or state; it could be better, but I'm just 
// happy it works as-is

function filterUfo() {
    // setting the datafilter to contain the tableData
    var datafilter = tableData;
    // setting the date from the #datetime input, if a date was set
    var formfilter = d3.select("#datetime").node();
    var date = formfilter.value;
    if(date.length > 0) {
        datafilter = tableData.filter(tableData => tableData.datetime === date)
    };
    // setting the city from the #city input, if a city was set
    var formfilter = d3.select("#city").node();
    var city = formfilter.value;
    if(city.length > 0) {
        datafilter = tableData.filter(tableData => tableData.city === city)
    };
    // setting the state from the #state input, if a state was set
    var formfilter = d3.select("#state").node();
    var state = formfilter.value;
    if(state.length > 0) {
        datafilter = tableData.filter(tableData => tableData.state === state)
    };    
    // setting the country from the #counry input, if a country was set
    var formfilter = d3.select("#country").node();
    var country = formfilter.value;
    if(country.length > 0) {
        datafilter = tableData.filter(tableData => tableData.country === country)
    };
    // setting the shape from the #shape input, if a shape was set
    var formfilter = d3.select("#shape").node();
    var shape = formfilter.value;
    if(shape.length > 0) {
        datafilter = tableData.filter(tableData => tableData.shape === shape)
    };
    // clearing the old table data
    d3.selectAll("tr").remove();

    // pulling the datafilter information and slotting accordingly into a new table
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

// PUSH BUTTON MAKE GO

d3.select("#filter-btn").on("click",filterUfo);