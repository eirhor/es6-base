# ES6 Base class
I created this simple base class for other classes in my projects to extend. The reason for this being that it feels excessive to write onLoad functionality every time I create a class.

## Example of usage:
```js
import Base from 'es6-base';

class MyClass extends Base {
  init() {
    Console.Log('Code to be initialized');
  }
}
```
