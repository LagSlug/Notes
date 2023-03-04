### Basic Types

typescript

```typescript
let num: number = 10;
let str: string = 'Hello';
let bool: boolean = true;
let arr: number[] = [1, 2, 3];
let tup: [string, number] = ['apple', 10];
```

### Functions

typescript

```typescript
function add(a: number, b: number): number {
    return a + b;
}
const multiply = (a: number, b: number): number => {
    return a * b;
};
const optionalParams = (a: number, b?: number) => { // b is an optional parameter };
```

### Interfaces

typescript

`interface Person {   name: string;   age: number;   email?: string; // optional property }  const person: Person = {   name: 'John',   age: 30,   email: 'john@example.com', };`

### Classes

typescript

``class Car {   private model: string;   public year: number;    constructor(model: string, year: number) {     this.model = model;     this.year = year;   }    public drive(): void {     console.log(`Driving a ${this.model}`);   } }  const myCar = new Car('Tesla', 2022); myCar.drive(); // Output: Driving a Tesla``

### Enums

typescript

`enum Color {   Red,   Green,   Blue, }  let c: Color = Color.Red; console.log(c); // Output: 0`

### Generics

typescript

`function identity<T>(arg: T): T {   return arg; }  const num = identity<number>(5); // returns 5 const str = identity<string>('hello'); // returns 'hello'`

### Type Aliases

typescript

`type Point = {   x: number;   y: number; };  const point: Point = { x: 1, y: 2 };`

### Type Assertions

typescript

```typescript
const someValue: any = 'this is a string';
const strLength: number = (someValue as string).length;
```