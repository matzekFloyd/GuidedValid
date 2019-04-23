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
    text: "He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether. "
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
            {a: "F", b: 0}, {a: "G", b: 0}, {a: "H", b: 0}, {a: "I", b: 0}, {a: "J", b: 0},
            {a: "K", b: 0}, {a: "L", b: 0}, {a: "M", b: 0}, {a: "N", b: 0}, {a: "O", b: 0},
            {a: "P", b: 0}, {a: "Q", b: 0}, {a: "R", b: 0}, {a: "S", b: 0}, {a: "T", b: 0},
            {a: "U", b: 0}, {a: "V", b: 0}, {a: "W", b: 0}, {a: "X", b: 0}, {a: "Y", b: 0},
            {a: "Z", b: 0}
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
            {a: "A", b: 1}, {a: "B", b: 1}, {a: "C", b: 1}, {a: "D", b: 1}, {a: "E", b: 1},
            {a: "F", b: 1}, {a: "G", b: 1}, {a: "H", b: 1}, {a: "I", b: 1}, {a: "J", b: 1},
            {a: "K", b: 1}, {a: "L", b: 1}, {a: "M", b: 1}, {a: "N", b: 1}, {a: "O", b: 1},
            {a: "P", b: 1}, {a: "Q", b: 1}, {a: "R", b: 1}, {a: "S", b: 1}, {a: "T", b: 1},
            {a: "U", b: 1}, {a: "V", b: 1}, {a: "W", b: 1}, {a: "X", b: 1}, {a: "Y", b: 1},
            {a: "Z", b: 1}
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
            {a: "A", b: 80}, {a: "B", b: 48}, {a: "C", b: 86}, {a: "D", b: 88}, {a: "E", b: 3},
            {a: "F", b: 4}, {a: "G", b: 14}, {a: "H", b: 94}, {a: "I", b: 40}, {a: "J", b: 83},
            {a: "K", b: 87}, {a: "L", b: 18}, {a: "M", b: 39}, {a: "N", b: 69}, {a: "O", b: 95},
            {a: "P", b: 36}, {a: "Q", b: 5}, {a: "R", b: 11}, {a: "S", b: 57}, {a: "T", b: 22},
            {a: "U", b: 6}, {a: "V", b: 75}, {a: "W", b: 78}, {a: "X", b: 56}, {a: "Y", b: 52},
            {a: "Z", b: 99}
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
            color: {field: "a", type: "nominal", legend: null}
        },
    },
    data: {
        values: [
            {a: "A", b: 80}, {a: "B", b: 48}, {a: "C", b: 86}, {a: "D", b: 88}, {a: "E", b: 3},
            {a: "F", b: 4}, {a: "G", b: 14}, {a: "H", b: 94}, {a: "I", b: 40}, {a: "J", b: 83},
            {a: "K", b: 87}, {a: "L", b: 18}, {a: "M", b: 39}, {a: "N", b: 69}, {a: "O", b: 95},
            {a: "P", b: 36}, {a: "Q", b: 5}, {a: "R", b: 11}, {a: "S", b: 57}, {a: "T", b: 22},
            {a: "U", b: 6}, {a: "V", b: 75}, {a: "W", b: 78}, {a: "X", b: 56}, {a: "Y", b: 52},
            {a: "Z", b: 99}
        ]
    },
    mode: 5,
    text: "Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic."
};

const MODE_6 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {
            x: {field: "a", type: "ordinal"},
            y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}},
            color: {field: "a", type: "nominal"}
        },
    },
    data: {
        values: [
            {a: "A", b: 80}, {a: "B", b: 48}, {a: "C", b: 86}, {a: "D", b: 88}, {a: "E", b: 3},
            {a: "F", b: 4}, {a: "G", b: 14}, {a: "H", b: 94}, {a: "I", b: 40}, {a: "J", b: 83},
            {a: "K", b: 87}, {a: "L", b: 18}, {a: "M", b: 39}, {a: "N", b: 69}, {a: "O", b: 95},
            {a: "P", b: 36}, {a: "Q", b: 5}, {a: "R", b: 11}, {a: "S", b: 57}, {a: "T", b: 22},
            {a: "U", b: 6}, {a: "V", b: 75}, {a: "W", b: 78}, {a: "X", b: 56}, {a: "Y", b: 52},
            {a: "Z", b: 99}
        ]
    },
    mode: 6,
    text: "Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young."
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