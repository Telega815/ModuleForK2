 /**
   * Функция рачета стоимости
   * amount - количество человек, должно быть целочисленное и больше 0, валидации нет!!!
   * isEvening - булеан вечернее время
   * isRomantic - булеан романтик щет
   * form - форма для вывода результата (необязательно, тк функция возвращает результат)
   */
function calculate(amount, isEvening, isRomantic, form){
	var result;
	var checkbox = document.getElementById("cbCustom");
	var outputAmount = document.getElementById('outputAmount')
	changeColor(amount);
	outputAmount.value = amount.value;

	if (isRomantic){
		isEvening.disable;
		amount.value =2;
		changeColor(amount);
		outputAmount.value = amount.value;
		amount.disable;
		checkbox.style.background = "#6e93ff";
		if (form != null) form.value = 3 + " " + 500 + " руб.";
		return 3 + " " + 500;
	}

	checkbox.style.background = "#212121";

	amount = amount.value;
	if(isEvening.selectedIndex == 0) isEvening = false;
	else isEvening = true;

	result = (amount < 5 ? 0 : amount -5) * 100 + 500;
	result = isEvening ? result*2 : result;

	if (form != null) form.value = trim(result) + " руб.";
	return result;
}

function changeColor(slider){
	var res = ((slider.value-1)/11)*100;
	slider.style.background = "linear-gradient(to right, #6e93ff " + res +"%, #d3d3d3 "+res+"%)";
}

function trim(a){
	if (a > 999){
		return Math.floor(a/1000) + " " + ((a % 1000 != 0) ? (a % 1000) : "000") ;
	}
	else return a;
}

function clearSelection() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else { // старый IE
      document.selection.empty();
    }
    alert("finished");
  }
