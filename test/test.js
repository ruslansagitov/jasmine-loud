'use strict';

describe('jasmine-loud', function() {
    beforeEach(function() {
        this.button = document.createElement('button');
        this.button.innerHTML = 'Join';
    });

    it('works', function() {
        expect(this.button).toBeSaid(['Join', 'button']);
    });
});
