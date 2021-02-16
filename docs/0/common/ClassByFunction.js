class ClassByFunction {
    static get(className) {
        return Function(`return (${className})`)();
    }
}
