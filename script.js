window.onload = function(){
let a = ''
let b = ''
let expressionResult = ''
let selectedOperation = null
// окно вывода результата
outputElement = document.getElementById("result")
// список объектов кнопок циферблата (id которых начинается с btn_digit_)
digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
function onDigitButtonClicked(digit) {
	if (!selectedOperation) {
	if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
	a += digit
	}
	outputElement.innerHTML = a
	} else {
	if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
	b += digit
	outputElement.innerHTML = b
	}	
}
}
// устанавка колбек-функций на кнопки циферблата по событию нажатия
digitButtons.forEach(button => {
	button.onclick = function() {
	const digitValue = button.innerHTML
	onDigitButtonClicked(digitValue)
	}
});
// установка колбек-функций для кнопок операций
document.getElementById("btn_op_mult").onclick = function() {
	if (a === '') return
	selectedOperation = 'x'
}
document.getElementById("btn_op_plus").onclick = function() {
	if (a === '') return
	selectedOperation = '+'
}
document.getElementById("btn_op_minus").onclick = function() {
	if (a === '') return
	selectedOperation = '-'
}
document.getElementById("btn_op_div").onclick = function() {
	if (a === '') return
	selectedOperation = '/'
}
// кнопка очищения
document.getElementById("btn_op_clear").onclick = function() {
	a = ''
	b = ''
	selectedOperation = ''
	expressionResult = ''
	outputElement.innerHTML = 0
}

// кнопка смены знака
document.getElementById("btn_op_sign").onclick = function() {
    if (a) {
		a = (-1 * parseFloat(a)).toString();
        outputElement.innerHTML = a;     
    }
}

// кнопка процента
document.getElementById("btn_op_percent").onclick = function() {
    if (a) {
        a = (parseFloat(a) / 100).toString();
        outputElement.innerHTML = a;     
    }
}

 // кнопка возведения в квадрат
document.getElementById("btn_op_square").onclick = function() {
    if (a) {
        a = (Math.pow(parseFloat(a), 2)).toString();
        outputElement.innerHTML = a;     
    }
}

// кнопка вычисления квадратного корня
document.getElementById("btn_op_sqrt").onclick = function() {
    if (a) {
        a = (Math.sqrt(parseFloat(a))).toString();
        outputElement.innerHTML = a;     
    }
}

// кнопка расчѐта факториала
document.getElementById("btn_op_factorial").onclick = function() {
    if (a) {
        const num = parseInt(a);
        if (num < 0){
            outputElement.innerHTML = "ERROR"; // Факториал отрицательного числа не определен
        } else {
            a = factorial(num).toString();
            outputElement.innerHTML = a;
        }
    }
}

// Функция для вычисления факториала
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
	
// кнопка удаления последнего символа (backspace)
document.getElementById("btn_op_backspace").onclick = function() {
    if (!selectedOperation) {
        a = a.slice(0, -1); // Удаляем последний символ из a
        outputElement.innerHTML = a || '0'; // Отображаем 0, если a пусто
    } else {
        b = b.slice(0, -1); // Удаляем последний символ из b
        outputElement.innerHTML = b || '0'; // Отображаем 0, если b пусто
    }
}

// кнопка расчѐта результата
document.getElementById("btn_op_equal").onclick = function() {
	if (a === '' || b === '' || !selectedOperation)
	return

	switch(selectedOperation) {
		case 'x':
		expressionResult = (+a) * (+b)
		break;
		case '+':
		expressionResult = (+a) + (+b)
		break;
		case '-':
		expressionResult = (+a) - (+b)
		break;
		case '/':
		expressionResult = (+a) / (+b)
		break;
	}

	a = expressionResult.toString()
	b = ''
	selectedOperation = null
	outputElement.innerHTML = a
}
};
