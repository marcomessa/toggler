# Toggler
This was inspired by [Zurb Foundation's one.](https://foundation.zurb.com/sites/docs/toggler.html)

With Toggler you can easly set up class changes on click events, without worring of writing the same js code every time.

Inside your markup add ``data-toggle="myId"`` on your button element (or any other element you wont to interact with) and ``data-toggler="all the classes you want to toggle"`` to your target element. You can toggle many id with a single item and

#### Installation
```
npm install @marcomessa/toggler
```
#### Usage
In you main js file:
```js
import Toggler from '@marcomessa/toggler';
const toggler = new Toggler;
```

In your markup
```html
<div id="myId" data-toggler="class1 class2 class3"></div>
<div id="myOtherId" data-toggler="class2 class3"></div>

<button data-toggle="myId">Button 1</button>
<button data-toggle="myId myOtherId">Button 2</button>

```
