class ClassByImport {
    static async get(path) {
        const module = await import(path);
        return module.default;
    }
}
