import {getAbstractModeData} from "./views/abstract.js"
import {getConcreteModeData} from "./views/concrete";
import {ABSTRACT, CONCRETE} from "./constants";

export function getModeData(id, view) {
    if (view === ABSTRACT) return getAbstractModeData(id);
    else if (view === CONCRETE) return getConcreteModeData(id);
}