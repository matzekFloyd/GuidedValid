let data = require("./data/wahl.json");

//PARTEI NAMEN
const OEVP = "ÖVP";
const SPOE = "SPÖ";
const FPOE = "FPÖ";
const GRUENE = "GRÜNE";
const NEOS = "NEOS";
const SONSTIGE = "Sonstige";

export class ConcreteDataProvider {

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

    calculatePercentage = (W, G) => {
        let result = (W / G) * 100;
        return result.toFixed(1);
    };

    getColor = (identifier) => {
        if (identifier === OEVP) return "#61C3D0";
        if (identifier === SPOE) return "#ED1C24";
        if (identifier === FPOE) return "#005CAA";
        if (identifier === GRUENE) return "#84B413";
        if (identifier === NEOS) return "#E84188";
        return "#DDDDDD";
    };

    constructor() {
        this.mode_1 = {
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
            text: {
                one: "<mark> As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </mark>"
            }
        };

        this.mode_2 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", title: "Partei", scale: {rangeStep: null}},
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
            text: {
                one: "As known as Bar Graph or Column Graph. The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. </span>",
                two: "<mark> One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale. </mark>"
            }
        };

        this
            .mode_3 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", title: "Partei", scale: {rangeStep: null}},
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
                    x: {field: "a", type: "ordinal", title: "Partei", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", title: "Anzahl erhaltener Stimmen"},
                    color: {field: "c", type: "nominal", scale: false}
                },
            },
            data: {
                url: data,
                values: [
                    {a: OEVP, b: data.G00000.ÖVP, c: this.getColor(OEVP)},
                    {a: SPOE, b: data.G00000.SPÖ, c: this.getColor(SPOE)},
                    {a: FPOE, b: data.G00000.FPÖ, c: this.getColor(FPOE)},
                    {a: GRUENE, b: data.G00000.GRÜNE, c: this.getColor(GRUENE)},
                    {a: NEOS, b: data.G00000.NEOS, c: this.getColor(NEOS)},
                    {
                        a: SONSTIGE,
                        b: parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA),
                        c: this.getColor(SONSTIGE)
                    }
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

        this
            .mode_5 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", sort: {encoding: "y"}, title: "Partei", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", title: "Prozent erhaltener Stimmen"},
                    color: {field: "c", type: "ordinal", scale: false}
                },
            },
            data: {
                url: data,
                values: [
                    {
                        a: OEVP,
                        b: this.calculatePercentage(data.G00000.ÖVP, data.G00000.abgegeben),
                        c: this.getColor(OEVP)
                    },
                    {
                        a: SPOE,
                        b: this.calculatePercentage(data.G00000.SPÖ, data.G00000.abgegeben),
                        c: this.getColor(SPOE)
                    },
                    {
                        a: FPOE,
                        b: this.calculatePercentage(data.G00000.FPÖ, data.G00000.abgegeben),
                        c: this.getColor(FPOE)
                    },
                    {
                        a: GRUENE,
                        b: this.calculatePercentage(data.G00000.GRÜNE, data.G00000.abgegeben),
                        c: this.getColor(GRUENE)
                    },
                    {
                        a: NEOS,
                        b: this.calculatePercentage(data.G00000.NEOS, data.G00000.abgegeben),
                        c: this.getColor(NEOS)
                    },
                    {
                        a: SONSTIGE,
                        b: this.calculatePercentage(parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA), data.G00000.abgegeben),
                        c: this.getColor(SONSTIGE)
                    }
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

        this
            .mode_6 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", sort: {encoding: "y"}, title: "Partei", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", title: "Prozent erhaltener Stimmen"},
                    color: {field: "c", type: "nominal", scale: false}
                },
            },
            data: {
                url: data,
                values: [
                    {
                        a: OEVP,
                        b: this.calculatePercentage(data.G00000.ÖVP, data.G00000.abgegeben),
                        c: this.getColor(OEVP)
                    },
                    {
                        a: SPOE,
                        b: this.calculatePercentage(data.G00000.SPÖ, data.G00000.abgegeben),
                        c: this.getColor(SPOE)
                    },
                    {
                        a: FPOE,
                        b: this.calculatePercentage(data.G00000.FPÖ, data.G00000.abgegeben),
                        c: this.getColor(FPOE)
                    },
                    {
                        a: GRUENE,
                        b: this.calculatePercentage(data.G00000.GRÜNE, data.G00000.abgegeben),
                        c: this.getColor(GRUENE)
                    },
                    {
                        a: NEOS,
                        b: this.calculatePercentage(data.G00000.NEOS, data.G00000.abgegeben),
                        c: this.getColor(NEOS)
                    },
                    {
                        a: SONSTIGE,
                        b: this.calculatePercentage(parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA), data.G00000.abgegeben),
                        c: this.getColor(SONSTIGE)
                    }
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