/* globals document */
'use strict';

describe('jasmine-loud', function() {
    beforeEach(function() {
        this.button = document.createElement('button');
        this.button.innerHTML = 'Join';
        document.body.appendChild(this.button);
    });

    afterEach(function() {
        document.body.removeChild(this.button);
    });

    it('works for positive', function() {
        expect(this.button).toBeSaid(['Join', 'button']);
    });

    it('works for negative', function() {
        expect(this.button).not.toBeSaid(['button']);
    });
});
