// Your code here

// define the cat class
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Define the Dog class
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Define the Bird class
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      // Conditional output based on the sex of the bird
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example usage:
  const cat = new Cat("Sudhe", "female");
  console.log(cat.speak()); 
  
  const dog = new Dog("Sadam", "male");
  console.log(dog.speak()); 
  
  const maleBird = new Bird("Polly", "male");
  console.log(maleBird.speak()); 
  
  const femaleBird = new Bird("Tweety", "female");
  console.log(femaleBird.speak()); 
  
