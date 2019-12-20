# Unit 4 Assessment - Object-Oriented JavaScript
## Short Response Section

### Directions
Answer each of the questions below clearly and concisely. Include code snippets when appropriate to illustrate your responses. Write your solutions directly in this markdown file.

**1. What is `this`?**
  "this" refers to the execution context at the time that the program is ran


**2. What will the following code produce? Why?** 

  ```javascript
  let a = 10;
  let b = 10;
  let c = {
    a: -10,
    b: -10,
  };

  function add() {
    return this.a + b;
  }

  c.add = add;

  console.log(add());
  console.log(c.add());
  ```

This will log NaN first, because you are calling the function in the global scope therefore "this" at the execution time is referring to the global object and is looking for a property named "a", but there is no 'a' property so it will try to add an undefined value to a variable that is assigned to 10. Then it will log 0, because "this" at execution time is referring to the object c, which does have a property of a, whose value is -10, so when adding that property and the variable b it will log 0.
**3. What is a closure? How does it allow us to create private data?**
  A closure is an inner function that gives you access to the content in the outer function, and allows you ti do something with that data and create abstractions. This allows us to create private data because closure's data can't be accessed from anywhere else in the program even in it's outer function it can't be accessed.

**4. What will the following code log to the console? Why?**

  ```javascript
  function createGreeting(greeting){
    return function(name){
      return `${greeting}, ${name}!`
    }
  }

  console.log( createGreeting("Hello") )
  console.log( createGreeting("Buona sera")("Reuben") )
  ```
This will first log the closure in the function, since it is only given one argument, it will invoke createGreeting but won't invoke the inner function just return it. Then it will log "Buona sera Reuben", because the function createGreeting is given two arguments, which first invokes the function itself and then invokes the inner function that returns the greeting sentence.

**5. What is encapsulation? How do constructors and prototypes in JavaScript help us write encapsulated programs?**
Encapsulation is when we "store" specific functions in properties. Constructors help us create encapsulations by setting the methods on the object and only being accessible from object instances created from that class. Prototypes help us create encapsulations by allowing us to create methods, that will only be accessible by inheritance. 


**6. What is the difference between an object's prototype and the prototype property of a function? What is the relationship between the two?**
The difference between an object's prototype is that object prototypes can be overwritten to do whatever we want. While prototypes of functions can't be overwritten since functions are meant to do specific things. Their relationship between them is that a function is a type of object and inherits the object prototype but it also has it's own prototype properties that are then inherited by function instances.

**7. What is polymorphism? Illustrate using code.**
Polymorphism is when you set different class to have shared methods and properties between them causing a "relationship" between them. 

Ex:
```javascript
  class Person {
    constructor(name){
      this.name = name;
    }
    
    breathe(){
      return 'inhale';
    }
  }

  class Child {
    cries(){
      return 'wahhhh';
    }
  }
  
  
  Child.prototype = new Person();
  Child.prototype.constructor = Child;
```

With line 78 we are assigning the Child class prototype to have shared methods and properties to the person class, and therefore there is a relationship between the Child and the Person class. With line 79 we are also setting the contructor to be reassigned to it's original constructor