# ES6 Base class
This base class is meant to simplify the onload logic, and have the code run on page load. If a class is extending base, it will automatically run the init() function on load, as that is set in the constructor of base.

## Example of usage:
```js
import Base from 'es6-base';

class MyClass extends Base {
  init() {
    Console.Log('Will be ran when page is loaded.');
  }
}
```
