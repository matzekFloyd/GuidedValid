const MODE_1 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    },
    data: {
        values: [
            {a: "A", b: 20}, {a: "B", b: 34}, {a: "C", b: 55},
            {a: "D", b: 19}, {a: "E", b: 40}, {a: "F", b: 34},
            {a: "G", b: 91}, {a: "H", b: 78}, {a: "I", b: 25}
        ]
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
            {a: "A", b: 13}, {a: "B", b: 16}, {a: "C", b: 37},
            {a: "D", b: 22}, {a: "E", b: 41}, {a: "F", b: 70},
            {a: "G", b: 71}, {a: "H", b: 39}, {a: "I", b: 12}
        ]
    },
    mode: 2,
    text: "He difficult contented we determine ourselves me am earnestly. Hour no find it park. Eat welcomed any husbands moderate. Led was misery played waited almost cousin living. Of intention contained is by middleton am. Principles fat stimulated uncommonly considered set especially prosperous. Sons at park mr meet as fact like."
};

const MODE_3 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    },
    data: {
        values: [
            {a: "A", b: 45}, {a: "B", b: 34}, {a: "C", b: 55},
            {a: "D", b: 29}, {a: "E", b: 40}, {a: "F", b: 34},
            {a: "G", b: 18}, {a: "H", b: 78}, {a: "I", b: 25}
        ]
    },
    mode: 3,
    text: "Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing me material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence."
};

const MODE_4 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    },
    data: {
        values: [
            {a: "A", b: 2}, {a: "B", b: 14}, {a: "C", b: 23},
            {a: "D", b: 9}, {a: "E", b: 73}, {a: "F", b: 34},
            {a: "G", b: 24}, {a: "H", b: 48}, {a: "I", b: 46}
        ]
    },
    mode: 4,
    text: "In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did. Rather in lasted no within no."
};

const MODE_5 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    },
    data: {
        values: [
            {a: "A", b: 20}, {a: "B", b: 14}, {a: "C", b: 55},
            {a: "D", b: 20}, {a: "E", b: 44}, {a: "F", b: 23},
            {a: "G", b: 19}, {a: "H", b: 99}, {a: "I", b: 12}
        ]
    },
    mode: 5,
    text: "Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic."
};

const MODE_6 = {
    mark: "bar",
    spec: {
        mark: "bar",
        encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
    },
    data: {
        values: [
            {a: "A", b: 68}, {a: "B", b: 37}, {a: "C", b: 45},
            {a: "D", b: 35}, {a: "E", b: 23}, {a: "F", b: 46},
            {a: "G", b: 23}, {a: "H", b: 19}, {a: "I", b: 58}
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