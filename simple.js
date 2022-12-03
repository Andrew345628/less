function Singleton() {
    const {instance} = Singleton;
    if (instance) return instance;
    Singleton.instance = this;
}

console.assert(new Singleton() === new Singleton());
console.log('равны');

const a1 = new Singleton();
Singleton.instance = null;
console.log('удаление');
const a2 = new Singleton();
if (a1 !== a2) console.log('рфвны');