describe('setLineWidth tests', () => {
    let store;

    beforeEach(() => {
        store = new Store();
    });

    it(`should set 1 if 1 is received`, () => {
        //Given
        let width = 1;
        const expected = 1;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 8 if 8 is received`, () => {
        //Given
        let width = 8;
        const expected = 8;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 10 if 10 is received`, () => {
        //Given
        let width = 10;
        const expected = 10;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 5 if 11 is received`, () => {
        //Given
        let width = 11;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 5 if 15 is received`, () => {
        //Given
        let width = 15;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set nothing if '8' is received`, () => {
        //Given
        let width = '8';
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 5 if -4 is received`, () => {
        //Given
        let width = -4;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 5 if 0 is received`, () => {
        //Given
        let width = 0;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 5 if undefined is received`, () => {
        //Given
        let width = undefined;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.lineWidth;

        //Then
        assert.strictEqual(actual, expected);
    });
});

describe('getLineWidth tests', () => {
    let store;

    beforeEach(() => {
        store = new Store();
    });

    it(`should get 1 if 1 is set`, () => {
        //Given
        let width = 1;
        const expected = 1;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 8 if 8 is set`, () => {
        //Given
        let width = 8;
        const expected = 8;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 10 if 10 is set`, () => {
        //Given
        let width = 10;
        const expected = 10;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 5 if 11 is set`, () => {
        //Given
        let width = 11;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 5 if 15 is set`, () => {
        //Given
        let width = 15;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get nothing if '8' is set`, () => {
        //Given
        let width = '8';
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 5 if -4 is set`, () => {
        //Given
        let width = -4;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 5 if 0 is set`, () => {
        //Given
        let width = 0;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 5 if undefined is set`, () => {
        //Given
        let width = undefined;
        const expected = 5;

        //When
        store.setLineWidth(width);
        const actual = store.getLineWidth();

        //Then
        assert.strictEqual(actual, expected);
    });
});

describe('setStrokeStyle tests', () => {
    let store;

    beforeEach(() => {
        store = new Store();
    });

    it(`should set 'black' if 'black' is received`, () => {
        //Given
        let color = 'black';
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 'white' if 'white' is received`, () => {
        //Given
        let color = 'white';
        const expected = 'white';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set '#ffffff' if '#ffffff' is received`, () => {
        //Given
        let color = '#ffffff';
        const expected = '#ffffff';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set '#000000' if '#000000' is received`, () => {
        //Given
        let color = '#000000';
        const expected = '#000000';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set '#454545' if '#454545' is received`, () => {
        //Given
        let color = '#454545';
        const expected = '#454545';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 45 if 'black' is received`, () => {
        //Given
        let color = 45;
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set -45' if 'black' is received`, () => {
        //Given
        let color = -45;
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set 0 if 'black' is received`, () => {
        //Given
        let color = null;
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should set undefined if 'black' is received`, () => {
        //Given
        let color = undefined;
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.strokeStyle;

        //Then
        assert.strictEqual(actual, expected);
    });
});

describe('getStrokeStyle tests', () => {
    let store;

    beforeEach(() => {
        store = new Store();
    });

    it(`should get 'black' if 'black' is set`, () => {
        //Given
        let color = 'black';
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 'white' if 'white' is set`, () => {
        //Given
        let color = 'white';
        const expected = 'white';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get '#ffffff' if '#ffffff' is set`, () => {
        //Given
        let color = '#ffffff';
        const expected = '#ffffff';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get '#000000' if '#000000' is set`, () => {
        //Given
        let color = '#000000';
        const expected = '#000000';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get '#454545' if '#454545' is set`, () => {
        //Given
        let color = '#454545';
        const expected = '#454545';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 45 if 'black' is set`, () => {
        //Given
        let color = 45;
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get -45' if 'black' is set`, () => {
        //Given
        let color = -45;
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get 0 if 'black' is set`, () => {
        //Given
        let color = null;
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should get undefined if 'black' is set`, () => {
        //Given
        let color = undefined;
        const expected = 'black';

        //When
        store.setStrokeStyle(color);
        const actual = store.getStrokeStyle();

        //Then
        assert.strictEqual(actual, expected);
    });
});