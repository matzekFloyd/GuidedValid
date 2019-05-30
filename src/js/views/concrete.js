let data = require("./data/wahl.json");

//PARTEI NAMEN
const OEVP = "ÖVP";
const SPOE = "SPÖ";
const FPOE = "FPÖ";
const GRUENE = "GRÜNE";
const NEOS = "NEOS";
const SONSTIGE = "Sonstige";

let calculatePercentage = (W, G) => {
    let result = (W / G) * 100;
    return result.toFixed(1);
};

let getColor = (identifier) => {
    if (identifier === OEVP) return "#61C3D0";
    if (identifier === SPOE) return "#ED1C24";
    if (identifier === FPOE) return "#005CAA";
    if (identifier === GRUENE) return "#84B413";
    if (identifier === NEOS) return "#E84188";
    return "#DDDDDD";
};

const MODE_1 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal"},
            y: {field: "b", type: "quantitative", title: "Anzahl erhaltener Stimmen"}
        },
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
            x: {field: "a", type: "ordinal", sort: {encoding: "y"}, title: "Partei", scale: {rangeStep: null}},
            y: {field: "b", type: "quantitative", title: "Anzahl erhaltener Stimmen"},
        },
    },
    data: {
        url: data,
        values: [
            {a: OEVP, b: 0},
            {a: SPOE, b: 0},
            {a: FPOE, b: 0},
            {a: GRUENE, b: 0},
            {a: NEOS, b: 0},
            {a: SONSTIGE, b: 0}
        ]
    },
    mode: 2,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-success'>2</button> <mark class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </mark> </p>"
};

const MODE_3 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal", sort: {encoding: "y"}, title: "Partei", scale: {rangeStep: null}},
            y: {field: "b", type: "quantitative", title: "Anzahl erhaltener Stimmen"},
        },
    },
    data: {
        url: data,
        values: [
            {a: OEVP, b: data.G00000.ÖVP},
            {a: SPOE, b: data.G00000.SPÖ},
            {a: FPOE, b: data.G00000.FPÖ},
            {a: GRUENE, b: data.G00000.GRÜNE},
            {a: NEOS, b: data.G00000.NEOS},
            {
                a: SONSTIGE,
                b: parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA)
            }
        ]
    },
    mode: 3,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>2</button> <span class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </span> </p> <p> <button class='txtModeBtn btn btn-success'>3</button> <mark class='txtMode'> Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval. </mark> </p>"
};

const MODE_4 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal", sort: {encoding: "y"}, title: "Partei", scale: {rangeStep: null}},
            y: {field: "b", type: "quantitative", title: "Anzahl erhaltener Stimmen"},
            color: {field: "c", scale: false}
        },
    },
    data: {
        url: data,
        values: [
            {a: OEVP, b: data.G00000.ÖVP, c: getColor(OEVP)},
            {a: SPOE, b: data.G00000.SPÖ, c: getColor(SPOE)},
            {a: FPOE, b: data.G00000.FPÖ, c: getColor(FPOE)},
            {a: GRUENE, b: data.G00000.GRÜNE, c: getColor(GRUENE)},
            {a: NEOS, b: data.G00000.NEOS, c: getColor(NEOS)},
            {
                a: SONSTIGE,
                b: parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA),
                c: getColor(SONSTIGE)
            }
        ]
    },
    mode: 4,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>2</button> <span class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>3</button> <span class='txtMode'> Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval. </span> </p> <p> <button class='txtModeBtn btn btn-success'>4</button> <mark class='txtMode'> Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category. </mark> </p>"
};

const MODE_5 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal", sort: {encoding: "y"}, title: "Partei", scale: {rangeStep: null}},
            y: {field: "b", type: "quantitative", title: "Prozent erhaltener Stimmen"},
            color: {field: "c", scale: false}
        },
    },
    data: {
        url: data,
        values: [
            {a: OEVP, b: calculatePercentage(data.G00000.ÖVP, data.G00000.abgegeben), c: getColor(OEVP)},
            {a: SPOE, b: calculatePercentage(data.G00000.SPÖ, data.G00000.abgegeben), c: getColor(SPOE)},
            {a: FPOE, b: calculatePercentage(data.G00000.FPÖ, data.G00000.abgegeben), c: getColor(FPOE)},
            {a: GRUENE, b: calculatePercentage(data.G00000.GRÜNE, data.G00000.abgegeben), c: getColor(GRUENE)},
            {a: NEOS, b: calculatePercentage(data.G00000.NEOS, data.G00000.abgegeben), c: getColor(NEOS)},
            {
                a: SONSTIGE,
                b: calculatePercentage(parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA), data.G00000.abgegeben),
                c: getColor(SONSTIGE)
            }
        ]
    },
    mode: 5,
    text: "<p> <button class='txtModeBtn btn btn-secondary'>1</button> <span class='txtMode'> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>2</button> <span class='txtMode'> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>3</button> <span class='txtMode'> Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval. </span> </p> <p> <button class='txtModeBtn btn btn-secondary'>4</button> <span class='txtMode'> Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category. </span> </p> <p> <button class='txtModeBtn btn btn-success'>5</button> <mark class='txtMode'> One major flaw with Bar Charts is that labelling becomes problematic when there are a large number of bars. </mark> </p>"
};

const MODE_6 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal", sort: {encoding: "y"}, title: "Partei", scale: {rangeStep: null}},
            y: {field: "b", type: "quantitative", title: "Prozent erhaltener Stimmen"},
            color: {field: "c", scale: false}
        },
    },
    data: {
        url: data,
        values: [
            {a: OEVP, b: calculatePercentage(data.G00000.ÖVP, data.G00000.abgegeben), c: getColor(OEVP)},
            {a: SPOE, b: calculatePercentage(data.G00000.SPÖ, data.G00000.abgegeben), c: getColor(SPOE)},
            {a: FPOE, b: calculatePercentage(data.G00000.FPÖ, data.G00000.abgegeben), c: getColor(FPOE)},
            {a: GRUENE, b: calculatePercentage(data.G00000.GRÜNE, data.G00000.abgegeben), c: getColor(GRUENE)},
            {a: NEOS, b: calculatePercentage(data.G00000.NEOS, data.G00000.abgegeben), c: getColor(NEOS)},
            {
                a: SONSTIGE,
                b: calculatePercentage(parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA), data.G00000.abgegeben),
                c: getColor(SONSTIGE)
            }
        ]
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