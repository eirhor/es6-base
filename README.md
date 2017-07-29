# ES6 Base class
This base class is meant to simplify the onload logic, and have the code run on page load. If a class is extending base, it will automatically run the init() function on load, as that is set in the constructor of base.

Also includes the DataStore class, and initializes it into the `Base.dataStore` property, where you can easily access it from any class that extends Base.

## Installation
```
npm install --save eirhor-es6-base
```

## Example of usage:
```js
import Base from 'eirhor-es6-base';

class MyClass extends Base {
  init() {
    Console.Log('Will be ran when page is loaded.');

    this.dataStore.add({
      test: "test"
    })
  }
}
```
