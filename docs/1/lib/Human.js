export default class Human {
    #name
    #age
    constructor(name='Andy', age=20) {
        this.#name = name;
        this.#age = age;
    }
    intro() {
        const msg = `My name is ${this.#name}. I am ${this.#age} years old.`;
        console.log(msg);
        alert(msg);
    }
}
