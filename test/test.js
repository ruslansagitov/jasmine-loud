/* globals document */
'use strict';

describe('jasmine-loud', () => {
    let button;

    beforeEach(() => {
        button = document.createElement('button');
        button.innerHTML = 'Join';
        document.body.appendChild(button);
    });

    afterEach(() => {
        document.body.removeChild(button);
    });

    it('works for positive', () => {
        expect(button).toBeSaid(['Join', 'button']);
    });

    it('works for negative', () => {
        expect(button).not.toBeSaid(['button']);
    });
});
