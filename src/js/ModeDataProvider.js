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
    text: "He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for. "
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
    text: "He difficult contented we determine ourselves me am earnestly. Hour no find it park. Eat welcomed any husbands moderate. Led was misery played waited almost cousin living. Of intention contained is by middleton am. Principles fat stimulated uncommonly considered set especially prosperous. Sons at park mr meet as fact like."
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
    text: "Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing me material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence."
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
    text: "In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did. Rather in lasted no within no."
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
            {category: "B", a: "A", b: 80}, {category: "B", a: "B", b: 48}, {category: "B", a: "C", b: 86}, {category: "A",a: "D", b: 88}, {category: "B",a: "E", b: 13},
            {category: "B", a: "F", b: 24}, {category: "B", a: "G", b: 14}, {category: "A",a: "H", b: 94}, {category: "A",a: "I", b: 40}, {category: "C",a: "J", b: 83}
        ]
    },
    mode: 5,
    text: "Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young."
};

const MODES = {
    "1": MODE_1,
    "2": MODE_2,
    "3": MODE_3,
    "4": MODE_4,
    "5": MODE_5,
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
        default:
            return MODES["1"];
    }
}