import Human from '../lib/Human.js';
export default class ClassByFunction {
    static get(className) {
        return Function(`return (${className})`)();

        // Uncaught (in promise) SyntaxError: Cannot use import statement outside a module
//        return Function(`import Human from '../lib/Human.js'; return (${className})`)();
    }
}
