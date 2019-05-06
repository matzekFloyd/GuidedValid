const MODE_1 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: null, y: {field: "b", type: "quantitative"}},
    },
    data: {
        values: []
    },
    mode: 1,
    text: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories."
};


const MODE_2 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    },
    data: {
        values: [
            {a: "A", b: 0}, {a: "B", b: 0}, {a: "C", b: 0}, {a: "D", b: 0}, {a: "E", b: 0},
            {a: "F", b: 0}, {a: "G", b: 0}, {a: "H", b: 0}, {a: "I", b: 0}, {a: "J", b: 0}
        ]
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
    data: {
        values: [
            {a: "A", b: 50}, {a: "B", b: 50}, {a: "C", b: 50}, {a: "D", b: 50}, {a: "E", b: 50},
            {a: "F", b: 50}, {a: "G", b: 50}, {a: "H", b: 50}, {a: "I", b: 50}, {a: "J", b: 50}
        ]
    },
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
    data: {
        values: [
            {a: "A", b: 80}, {a: "B", b: 48}, {a: "C", b: 86}, {a: "D", b: 88}, {a: "E", b: 13},
            {a: "F", b: 24}, {a: "G", b: 14}, {a: "H", b: 94}, {a: "I", b: 40}, {a: "J", b: 83}
        ]
    },
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
    data: {
        values: [
            {category: "B", a: "A", b: 80}, {category: "B", a: "B", b: 48}, {
                category: "B",
                a: "C",
                b: 86
            }, {category: "A", a: "D", b: 88}, {category: "B", a: "E", b: 13},
            {category: "B", a: "F", b: 24}, {category: "B", a: "G", b: 14}, {
                category: "A",
                a: "H",
                b: 94
            }, {category: "A", a: "I", b: 40}, {category: "C", a: "J", b: 83}
        ]
    },
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

export function getAbstractModeData(id) {
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
        default:
            return MODES["1"];
    }
}