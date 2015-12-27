# jasmine-loud

[Jasmine][] matchers for [Loud][], web accessibility testing helper

## Getting Started

Get a release tarball, or clone the repository, or use [npm][] and
[browserify][], or [bower][]:

```
bower install jasmine-loud --save-dev
```

Add `./lib/jasmine-loud.js` to a testing page:

```html
<script src="/path/to/jasmine-loud/lib/jasmine-loud.js"></script>
```

## Jasmine Matchers

### toBeSaid()

```js
describe('jasmine-loud', function() {
    beforeEach(function() {
        this.button = document.createElement('button');
        this.button.innerHTML = 'Join';
    });

    it('works', function() {
        expect(this.button).toBeSaid(['Join', 'button']);
    });
});
```

 [Jasmine]: <http://jasmine.github.io/> "Jasmine — Behavior-Driven JavaScript"
 [Loud]: <https://github.com/ruslansagitov/loud> "Loud — Web accessibility testing helper"
 [npm]: <https://github.com/npm/npm> "npm — A package manager for JavaScript"
 [browserify]: <https://github.com/substack/node-browserify> "browserify — Browser-side require() the Node.js way"
 [bower]: <https://github.com/bower/bower> "Bower — A package manager for the web"
