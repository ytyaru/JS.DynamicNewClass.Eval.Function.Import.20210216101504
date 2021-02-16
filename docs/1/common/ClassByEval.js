import Human from '../lib/Human.js';
export default class ClassByEval {
    static get(className) {
        return eval(className);
    }
}
