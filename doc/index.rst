jasmine-loud
============

.. rubric:: Jasmine matchers for Loud, web accessibility testing helper

Getting Started
---------------

Get a release tarball, or clone the `repository`_, or use `npm`_ and
`browserify`_, or `bower`_:

::

   bower install jasmine-loud --save-dev

Add :file:`./lib/jasmine-loud.js` to a testing page:

.. code-block:: html

   <script src="/path/to/jasmine-loud/lib/jasmine-loud.js"></script>

Test with `Jasmine`_.

Matchers
--------

toBeSaid()
~~~~~~~~~~

.. code-block:: js

   describe('jasmine-loud', function() {
       beforeEach(function() {
           this.button = document.createElement('button');
           this.button.innerHTML = 'Join';
       });

       it('works', function() {
           expect(this.button).toBeSaid(['Join', 'button']);
       });
   });

.. _repository: https://github.com/ruslansagitov/jasmine-loud
.. _npm: https://github.com/npm/npm
.. _browserify: https://github.com/substack/node-browserify
.. _bower: http://bower.io
.. _Jasmine: http://jasmine.github.io/
