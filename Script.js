
var flData = "https://raw.githubusercontent.com/Jpilcicki/225Projects/main/Project5/fldata.csv"
var gaData = "https://raw.githubusercontent.com/Jpilcicki/225Projects/main/Project5/gadata.csv"
var nyData = "https://raw.githubusercontent.com/Jpilcicki/225Projects/main/Project5/nydata.csv"
var caData = "https://raw.githubusercontent.com/Jpilcicki/225Projects/main/Project5/cadata.csv"
var vaData = "https://raw.githubusercontent.com/Jpilcicki/225Projects/main/Project5/vadata.csv"

Plotly.d3.csv(flData, function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Positive Covid Cases',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'FLDATA.Positive'),
        line: {color: '#21A216'}
    }

    var t2 = {
        type: "scatter",
        mode: "lines",
        name: 'Hospitalizations',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'FLDATA.HospitalizedCumulative'),
        line: {color: '#e63946'}
    }

    var data = [t1, t2];
    var layout = {
        title: {
            text : 'Custom: Florida Positive Cases and Hospitalizations'
        },
        xaxis: {
            title : {
                text : 'Dates'
            }
        } ,
        yaxis : {
            title : {
                text : 'Number'
            }
        }
    };
    Plotly.newPlot('flChart', data, layout);
})






Plotly.d3.csv(gaData, function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Positive Covid Cases',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'GADATA.Positive'),
        line: {color: '#21A216'}
    }

    var t2 = {
        type: "scatter",
        mode: "lines",
        name: 'Hospitalizations',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'GADATA.HospitalizedCumulative'),
        line: {color: '#e63946'}

    }

    var data = [t1, t2];
    var layout = {
        title: {
            text : 'Custom: Georgia Positive Covid Cases and Hospitalizations'
        },
        xaxis: {
            title : {
                text : 'Dates'
            }
        } ,
        yaxis : {
            title : {
                text : 'Number'
            }
        }
    };
    Plotly.newPlot('gaChart', data, layout);
})





Plotly.d3.csv(nyData, function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Positive Covid Cases',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'NYDATA.Positive'),
        line: {color: '#21A216'}
    }

    var t2 = {
        type: "scatter",
        mode: "lines",
        name: 'Hospitalizations',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'NYDATA.HospitalizedCumulative'),
        line: {color: '#e63946'}
    }

    var data = [t1, t2];
    var layout = {
        title: {
            text : 'Custom: New York Positive Cases and Hospitalizations'
        },
        xaxis: {
            title : {
                text : 'Dates'
            }
        } ,
        yaxis : {
            title : {
                text : 'Number'
            }
        }
    };
    Plotly.newPlot('nyChart', data, layout);
})






Plotly.d3.csv(caData, function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Positive Covid Cases',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'CADATA.Positive'),
        line: {color: '#21A216'}
    }

    var t2 = {
        type: "scatter",
        mode: "lines",
        name: 'Hospitalizations',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'CADATA.HospitalizedCumulative'),
        line: {color: '#e63946'}

    }

    var data = [t1, t2];
    var layout = {
        title: {
            text : 'Custom: California Positive Covid Cases and Hospitalizations'
        },
        xaxis: {
            title : {
                text : 'Dates'
            }
        } ,
        yaxis : {
            title : {
                text : 'Number'
            }
        }
    };
    Plotly.newPlot('caChart', data, layout);
})





Plotly.d3.csv(vaData, function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Positive Covid Cases',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'VADATA.Positive'),
        line: {color: '#21A216'}
    }

    var t2 = {
        type: "scatter",
        mode: "lines",
        name: 'Hospitalizations',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'VADATA.HospitalizedCumulative'),
        line: {color: '#e63946'}

    }

    var data = [t1, t2];
    var layout = {
        title: {
            text : 'Custom: Virginia Positive Covid Cases and Hospitalizations'
        },
        xaxis: {
            title : {
                text : 'Dates'
            }
        } ,
        yaxis : {
            title : {
                text : 'Number'
            }
        }
    };
    Plotly.newPlot('vaChart', data, layout);
})