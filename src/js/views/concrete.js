let data = require("./data/sun1906.csv");

const MODE_1 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "a", type: "ordinal"}, y: {field: "Sunhours", title: "Sunhours", type: "quantitative"}},
    },
    data: {
        values: []
    },
    mode: 1,
    text: "<p> <button class='txtModeBtn btn btn-success'>1</button> <mark class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </mark> </p>"
};


const MODE_2 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "YEAR", title: "Year", type: "temporal", timeunit: "year"},
            y: {field: "Sunhours", title: "Sunhours", type: "quantitative"}
        },
    },
    mode: 2,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-success'>2</button> <mark class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </mark> </p>"
};

const MODE_3 = {
    data: {url: data},
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "YEAR", title: "Year", type: "temporal", timeunit: "year"}, y: {field: "Jahr", title: "Sunhours", type: "quantitative"}},
    },
    format: {
        type: "csv"
    },
    mode: 3,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>2</button> <span class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </span> </p> <p> <button class='txtModeBtn btn btn-success'>3</button> <mark class='txtMode'> Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval. </mark> </p>"
};

const MODE_4 = {
    data: {url: data},
    mark: "bar",
    spec: {
        mark: "bar",
        transform: [
            {
                calculate: "(parseFloat(datum.Mar) + parseFloat(datum.Apr) + parseFloat(datum.Mai) + parseFloat(datum.Jun)) / 4",
                as: "spring_hours"
            }
        ],
        encoding: {
            x: {field: "YEAR", title: "Year", type: "temporal", timeunit: "year"},
            y: {field: "spring_hours", title: "Sunhours during Spring", type: "quantitative"}
        },
    },
    format: {
        type: "csv"
    },
    mode: 4,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>2</button> <span class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>3</button> <span class='txtMode'> Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval. </span> </p> <p> <button class='txtModeBtn btn btn-success'>4</button> <mark class='txtMode'> Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category. </mark> </p>"
};

const MODE_5 = {
    data: {url: data},
    mark: "bar",
    spec: {
        mark: "bar",
        transform: [
            {
                calculate: "(parseFloat(datum.Mar) + parseFloat(datum.Apr) + parseFloat(datum.Mai) + parseFloat(datum.Jun)) / 4",
                as: "spring_hours"
            }
        ],
        encoding: {
            x: {field: "YEAR", type: "temporal", timeunit: "year"},
            y: {field: "spring_hours", title: "Sunhours during spring", type: "quantitative"},
            color: {
                condition: {
                    test: "parseInt(datum.YEAR) > 1945",
                    value: "#24B388"
                },
                value: "#FF9B80"
            }
        },
    },
    format: {
        type: "csv"
    },
    mode: 5,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>2</button> <span class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>3</button> <span class='txtMode'> Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>4</button> <span class='txtMode'> Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category. </span> </p> <p> <button class='txtModeBtn btn btn-success'>5</button> <mark class='txtMode'> One major flaw with Bar Charts is that labelling becomes problematic when there are a large number of bars. </mark> </p>"
};

const MODE_6 = {
    data: {url: data},
    mark: "bar",
    spec: {
        mark: "bar",
        transform: [
            {
                calculate: "(parseFloat(datum.Mar) + parseFloat(datum.Apr) + parseFloat(datum.Mai) + parseFloat(datum.Jun)) / 4",
                as: "spring_hours"
            }
        ],
        encoding: {
            x: {field: "YEAR", type: "temporal", timeunit: "year"},
            y: {field: "spring_hours", title: "Sunhours during spring", type: "quantitative"},
            color: {
                condition: {
                    test: "parseInt(datum.YEAR) > 1945",
                    value: "#24B388"
                },
                value: "#FF9B80"
            }
        },
    },
    format: {
        type: "csv"
    },
    mode: 6,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>2</button> <span class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>3</button> <span class='txtMode'> Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>4</button> <span class='txtMode'> Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category. </span> </p> <p> <button class='txtModeBtn btn btn-success'>5</button> <mark class='txtMode'> One major flaw with Bar Charts is that labelling becomes problematic when there are a large number of bars. </mark> </p>"
};

const MODES = {
    "1": MODE_1,
    "2": MODE_2,
    "3": MODE_3,
    "4": MODE_4,
    "5": MODE_5,
    "6": MODE_6,
};

export function getConcreteModeData(id) {
    switch (id) {
        case 1:
            return MODES["1"];
        case 2:
            return MODES["2"];
        case 3:
            return MODES["3"];
        case 4:
            return MODES["4"];
        case 5:
            return MODES["5"];
        case 6:
            return MODES["6"];
        default:
            return MODES["1"];
    }
}