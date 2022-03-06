class Person{
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.th = this;
    }

    greeting(){
        console.log(`Меня зовут ${this.firstname} ${this.lastname}`);
    }

    sayHi(th){
        setInterval(function (){
            this.greeting();
        }, 1000);
    }
}

let firstname = 'Юрий';
let lastname = 'Фазлы'

const newPerson = new Person(firstname, lastname);

//newPerson.greeting(firstname, lastname);

newPerson.sayHi();