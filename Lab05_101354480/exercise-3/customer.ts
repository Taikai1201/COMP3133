export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;


    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

    public getAge(){
        console.log(`Your age is: ${this.age}`)
    }

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age
    }

    
}

let customer = new Customer("John", "Smith", 12);

// customer.firstName = "John";
// customer.lastName = "Smith";

customer.greeter()



