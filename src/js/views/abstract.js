export class AbstractDataProvider {

    getData(id) {
        switch (id) {
            case 1:
                return this.mode_1;
            case 2:
                return this.mode_2;
            case 3:
                return this.mode_3;
            case 4:
                return this.mode_4;
            case 5:
                return this.mode_5;
            case 6:
                return this.mode_6;
            default:
                return this.mode_1;
        }
    }

    constructor() {

        this.mode_1 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {x: {field: "a", type: "ordinal", scale: {rangeStep: null}}, y: {field: "b", type: "quantitative"}},
            },
            data: {
                values: []
            },
            mode: 1,
            text: {
                one: "<mark> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </mark>"
            }
        };

        this.mode_2 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative"}
                },
            },
            data: {
                values: [
                    {a: "A", b: 0}, {a: "B", b: 0}, {a: "C", b: 0}, {a: "D", b: 0}, {a: "E", b: 0},
                    {a: "F", b: 0}, {a: "G", b: 0}, {a: "H", b: 0}, {a: "I", b: 0}, {a: "J", b: 0}
                ]
            },
            mode: 2,
            text: {
                one: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span>",
                two: "<mark> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </mark>"
            }
        };

        this.mode_3 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
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
            text: {
                one: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories.",
                two: "One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale.",
                three: "<mark> Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval. </mark>"
            }
        };

        this.mode_4 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
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
            text: {
                one: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories.",
                two: "One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale.",
                three: "Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval.",
                four: "<mark> Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category. </mark> </p>"
            }
        };

        this.mode_5 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}},
                    color: {field: "category", type: "nominal"}
                },
            },
            data: {
                values: [
                    {category: "2", a: "A", b: 80}, {category: "2", a: "B", b: 48}, {
                        category: "2",
                        a: "C",
                        b: 86
                    }, {category: "1", a: "D", b: 88}, {category: "3", a: "E", b: 13},
                    {category: "2", a: "F", b: 24}, {category: "2", a: "G", b: 14}, {
                        category: "1",
                        a: "H",
                        b: 94
                    }, {category: "1", a: "I", b: 40}, {category: "3", a: "J", b: 83}
                ]
            },
            mode: 5,
            text: {
                one: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories.",
                two: "One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale.",
                three: "Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval.",
                four: "Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category.",
                five: "<mark> One major flaw with Bar Charts is that labelling becomes problematic when there are a large number of bars. </mark>"
            }
        };

        this.mode_6 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}},
                    color: {field: "category", type: "nominal"}
                },
            },
            data: {
                values: [
                    {category: "2", a: "A", b: 80}, {category: "2", a: "B", b: 48}, {
                        category: "2",
                        a: "C",
                        b: 86
                    }, {category: "1", a: "D", b: 88}, {category: "3", a: "E", b: 13},
                    {category: "2", a: "F", b: 24}, {category: "2", a: "G", b: 14}, {
                        category: "1",
                        a: "H",
                        b: 94
                    }, {category: "1", a: "I", b: 40}, {category: "3", a: "J", b: 83}
                ]
            },
            mode: 6,
            text: {
                one: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories.",
                two: "One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale.",
                three: "Bar Charts are distinguished from Histograms, as they do not display continuous developments over an interval.",
                four: "Bar Chart's discrete data is categorical data and therefore answers the question of \"how many?\" in each category.",
                five: "One major flaw with Bar Charts is that labelling becomes problematic when there are a large number of bars."
            }
        };
    }

}