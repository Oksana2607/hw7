describe('Calculator', () => {
    const userInput = document.getElementById('textBox');
    const numbersBtn = document.querySelectorAll('.calculator__btn');

    function getNumBtn(n) { //получить элемент кнопки по цифре которую она представляет
        n = n.toString();
        for (let i = 0; i < numbersBtn.length; i++) {
            if (n === numbersBtn[i].value) {
                return numbersBtn[i];
            }
        }
    }

    const operationsBtn = document.querySelectorAll('.calculator__operation');

    function getOperationBtn(s) { //получить элемент кнопки по знаку
        s = s.toString();
        for (let i = 0; i < operationsBtn.length; i++) {
            if (s === operationsBtn[i].value) {
                return operationsBtn[i];
            }
        }
    }

    describe('click button', () => {

        beforeEach(() => {
            const btn = document.getElementById('btnAC');
            btn.click();
        });

        for (let i = 0; i < numbersBtn.length; i++) {
            it(`should display ${numbersBtn[i].value}`, () => {
                numbersBtn[i].click();
                assert.equal(userInput.value, numbersBtn[i].value);
            });
        }

        it('should display 725590', () => {
            getNumBtn(7).click();
            getNumBtn(2).click();
            getNumBtn(5).click();
            getNumBtn(5).click();
            getNumBtn(9).click();
            getNumBtn(0).click();
        });
    });

    describe('Buttons and result', () => {
        beforeEach(() => {
            const btn = document.getElementById('btnAC');
            btn.click();
        });

        it('5*5 should return 25', () => {
            //Given
            getNumBtn(5).click();
            getOperationBtn('*').click();
            getNumBtn(1).click();
            getOperationBtn('*').click();
            getNumBtn(2).click();
            getOperationBtn('=').click();

            const expected = '10';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('0*5 should return 0', () => {
            //Given
            getNumBtn(0).click();
            getOperationBtn('*').click();
            getNumBtn(5).click();
            getOperationBtn('=').click();

            const expected = '0';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5*0 should return 0', () => {
            //Given
            getNumBtn(5).click();
            getOperationBtn('*').click();
            getNumBtn(0).click();
            getOperationBtn('=').click();

            const expected = '0';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5*1*2 should return 10', () => {
            getNumBtn(5).click();
            getOperationBtn('*').click();
            getNumBtn(1).click();
            getOperationBtn('*').click();
            getNumBtn(2).click();
            getOperationBtn('=').click();

            const expected = '10';
            //When

            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5*1*2*350 should return 3500', () => {
            //Given
            getNumBtn(5).click();
            getOperationBtn('*').click();
            getNumBtn(1).click();
            getOperationBtn('*').click();
            getNumBtn(2).click();
            getOperationBtn('*').click();
            getNumBtn(3).click();
            getNumBtn(5).click();
            getNumBtn(0).click();
            getOperationBtn('=').click();

            const expected = '3500';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5-5 should return 0', () => {
            //Given
            getNumBtn(5).click();
            getOperationBtn('-').click();
            getNumBtn(5).click();
            getOperationBtn('=').click();

            const expected = '0';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5-10 should return -5', () => {
            //Given
            getNumBtn(5).click();
            getOperationBtn('-').click();
            getNumBtn(1).click();
            getNumBtn(0).click();
            getOperationBtn('=').click();

            const expected = '-5';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5+10 should return 15', () => {
            //Given
            getNumBtn(5).click();
            getOperationBtn('+').click();
            getNumBtn(1).click();
            getNumBtn(0).click();
            getOperationBtn('=').click();

            const expected = '15';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('-5+10 should return 5', () => {
            //Given
            getOperationBtn('-').click();
            getNumBtn(5).click();
            getOperationBtn('+').click();
            getNumBtn(1).click();
            getNumBtn(0).click();
            getOperationBtn('=').click();

            const expected = '5';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5+10+0 should return 15', () => {
            //Given
            getNumBtn(5).click();
            getOperationBtn('+').click();
            getNumBtn(1).click();
            getNumBtn(0).click();
            getOperationBtn('+').click();
            getNumBtn(0).click();
            getOperationBtn('=').click();

            const expected = '15';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('10 / 5 should return 2', () => {
            //Given
            getNumBtn(1).click();
            getNumBtn(0).click();
            getOperationBtn('/').click();
            getNumBtn(5).click();
            getOperationBtn('=').click();

            const expected = '2';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('0 / 5 should return 0', () => {
            //Given
            getNumBtn(0).click();
            getOperationBtn('/').click();
            getNumBtn(5).click();
            getOperationBtn('=').click();

            const expected = '0';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5 / 0 should return "Error"', () => {
            //Given
            getNumBtn(5).click();
            getOperationBtn('/').click();
            getNumBtn(0).click();
            getOperationBtn('=').click();

            const expected = 'Error';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });
    });

    describe('decimal', function () {
        beforeEach(() => {
            const btn = document.getElementById('btnAC');
            btn.click();
        });

        it('1 . 5 should return "1.5"', () => {
            //Given
            const point = document.getElementById('btnPoint');
            getNumBtn(1).click();
            point.click();
            getNumBtn(5).click();

            const expected = '1.5';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('0 . 8 should return "0.8"', () => {
            //Given
            const point = document.getElementById('btnPoint');
            getNumBtn(0).click();
            point.click();
            getNumBtn(8).click();

            const expected = '0.8';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('5 . 7 should return "5.7"', () => {
            //Given
            const point = document.getElementById('btnPoint');
            getOperationBtn('-').click();
            getNumBtn(5).click();
            point.click();
            getNumBtn(7).click();

            const expected = '5.7';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });
    });

    describe('AC', () => {
        beforeEach(() => {
            const btn = document.getElementById('btnAC');
            btn.click();
        });

        const caBtn = document.getElementById('btnAC');

        it('clears "5 7 0" if "AC" is pressed', () => {
            //Given
            getNumBtn(5).click();
            getNumBtn(7).click();
            getNumBtn(0).click();
            caBtn.click();

            const expected = '0';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('clears "5 7 0 8 + 5" if "AC" is pressed', () => {
            //Given
            getNumBtn(5).click();
            getNumBtn(7).click();
            getNumBtn(0).click();
            caBtn.click();
            getNumBtn(8).click();
            getOperationBtn('+').click();
            getNumBtn(5).click();
            caBtn.click();

            const expected = '0';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });

        it('clears "5 7 4 9 * 8" if "AC" is pressed', () => {
            //Given
            getNumBtn(5).click();
            getNumBtn(7).click();
            getNumBtn(4).click();
            caBtn.click();
            getNumBtn(9).click();
            getOperationBtn('*').click();
            getNumBtn(8).click();
            caBtn.click();

            const expected = '0';

            //When
            const actual = document.getElementById('textBox').value;

            //Then
            assert.equal(actual, expected);
        });
    });

    describe('setModelNumberValue', () => {

        const testData = [
            {
                operand_1: 0,
                operand_2: 0,
                operator: "",
                result: 0,
                expected: {operand_1: 0, operand_2: 0, operator: "", result: 0},
            },
            {
                operand_1: 1,
                operand_2: 2,
                operator: "+",
                result: 3,
                expected: {operand_1: 1, operand_2: 2, operator: "+", result: 3},
            },
            {
                operand_1: 5,
                operand_2: 1,
                operator: "-",
                result: 4,
                expected: {operand_1: 5, operand_2: 1, operator: "-", result: 4},
            },
            {
                operand_1: 5,
                operand_2: 5,
                operator: "*",
                result: 25,
                expected: {operand_1: 5, operand_2: 5, operator: "*", result: 25},
            },
            {
                operand_1: 10,
                operand_2: 2,
                operator: "/",
                result: 5,
                expected: {operand_1: 10, operand_2: 2, operator: "/", result: 5},
            },
            {
                operand_1: 10,
                operand_2: 0,
                operator: "/",
                result: "Error",
                expected: {operand_1: 10, operand_2: 0, operator: "/", result: "Error"},
            },
        ];

        testData.forEach(data => {
           const {operand_1, operand_2, operator, result, expected} = data;

           setModelNumberValue(operand_1, operand_2, operator, result);

           const actual = model.pop();

           it(`model last example ${operand_1} ${operator} ${operand_2} = ${result}`, () => {
               assert.deepEqual(actual, expected);
           });
        });
    });
});
