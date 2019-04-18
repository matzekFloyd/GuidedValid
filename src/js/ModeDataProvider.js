const MODE_1 = {
    mark: "bar",
    encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    data: {
        values: [
            {a: "A", b: 20}, {a: "B", b: 34}, {a: "C", b: 55},
            {a: "D", b: 19}, {a: "E", b: 40}, {a: "F", b: 34},
            {a: "G", b: 91}, {a: "H", b: 78}, {a: "I", b: 25}
        ]
    },
    mode: 1
};

const MODE_2 = {
    mark: "bar",
    encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    data: {
        values: [
            {a: "A", b: 13}, {a: "B", b: 16}, {a: "C", b: 37},
            {a: "D", b: 22}, {a: "E", b: 41}, {a: "F", b: 70},
            {a: "G", b: 71}, {a: "H", b: 39}, {a: "I", b: 12}
        ]
    },
    mode: 2
};

const MODE_3 = {
    mark: "bar",
    encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    data: {
        values: [
            {a: "A", b: 45}, {a: "B", b: 34}, {a: "C", b: 55},
            {a: "D", b: 29}, {a: "E", b: 40}, {a: "F", b: 34},
            {a: "G", b: 18}, {a: "H", b: 78}, {a: "I", b: 25}
        ]
    },
    mode: 3
};

const MODE_4 = {
    mark: "bar",
    encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    data: {
        values: [
            {a: "A", b: 2}, {a: "B", b: 14}, {a: "C", b: 23},
            {a: "D", b: 9}, {a: "E", b: 73}, {a: "F", b: 34},
            {a: "G", b: 24}, {a: "H", b: 48}, {a: "I", b: 46}
        ]
    },
    mode: 4
};

const MODE_5 = {
    mark: "bar",
    encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    data: {
        values: [
            {a: "A", b: 20}, {a: "B", b: 14}, {a: "C", b: 55},
            {a: "D", b: 20}, {a: "E", b: 44}, {a: "F", b: 23},
            {a: "G", b: 19}, {a: "H", b: 99}, {a: "I", b: 12}
        ]
    },
    mode: 5
};

const MODE_6 = {
    mark: "bar",
    encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    data: {
        values: [
            {a: "A", b: 68}, {a: "B", b: 37}, {a: "C", b: 45},
            {a: "D", b: 35}, {a: "E", b: 23}, {a: "F", b: 46},
            {a: "G", b: 23}, {a: "H", b: 19}, {a: "I", b: 58}
        ]
    },
    mode: 6
};

const MODES = {
    "1": MODE_1,
    "2": MODE_2,
    "3": MODE_3,
    "4": MODE_4,
    "5": MODE_5,
    "6": MODE_6
};

export function getModeData(id) {

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