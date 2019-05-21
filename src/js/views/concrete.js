let data = require("./data/sun1906.csv");
let dataA = require("./data/sun1906a.csv");

const MODE_1 = {
    data: {url: data},
    mark: "bar",
    spec: {
        mark: "bar",
        x: {
            bin: true,
            field: "YEAR",
            type: "quantitative"
        },
        y: {
            field: "Jahr",
            type: "quantitative"
        }
    },
    mode: 1,
    text: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories."
};


const MODE_2 = {
    data: {url: data},
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "YEAR", type: "temporal"}, y: {field: "YEAR", type: "quantitative"}},
    },

    mode: 2,
    text: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale."
};

const MODE_3 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal"},
            y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}}
        },
    },
    data: {url: "data/sun1906.csv"},

    mode: 3,
    text: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. Bars Charts are distinguished from Histograms, as they do not display continuous developments over an interval. "
};

const MODE_4 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal"},
            y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}}
        },
    },
    data: {url: "data/sun1906.csv"},

    mode: 4,
    text: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. Bars Charts are distinguished from Histograms, as they do not display continuous developments over an interval. Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category."
};

const MODE_5 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal"},
            y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}},
            color: {field: "category", type: "nominal"}
        },
    },
    data: {url: "data/sun1906.csv"},

    mode: 5,
    text: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. Bars Charts are distinguished from Histograms, as they do not display continuous developments over an interval. Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category. One major flaw with Bar Charts is that labelling becomes problematic when there are a large number of bars."
};

const MODES = {
    "1": MODE_1,
    "2": MODE_2,
    "3": MODE_3,
    "4": MODE_4,
    "5": MODE_5,
};

export function getConcreteModeData(id) {
    switch (id) {
        case 1:
            console.log("A");
            return MODES["1"];
        case 2:
            return MODES["2"];
        case 3:
            return MODES["3"];
        case 4:
            return MODES["4"];
        case 5:
            return MODES["5"];
        default:
            return MODES["1"];
    }
}