 /**
   * 
   */
function changeResultRomanting(amount){
	var result;
	var slider = document.getElementById("amountSlider");
	var selectList = document.getElementById("selectList");
	var checkbox = document.getElementById("cbCustom");
	var outputCounter = document.getElementById('outputCounter');
	var outputResult = document.getElementById("outputResult");

	if (document.getElementById("romantingCheckbox").checked){
		selectList.disable;
		slider.value = 2;
		outputCounter.value = slider.value;
		changeColor(slider);
		slider.disable;
		checkbox.style.background = "#6e93ff";
		outputResult.value = 3 + " " + 500 + " руб.";
	}else{
		changeResult();
	}
	
}

/**
   * 
   */
function changeResult(){
	if (document.getElementById("romantingCheckbox").checked) {
		changeResultRomanting();
		return;
	}
	var result;
	var amount;
	var isEvening;
	var slider = document.getElementById("amountSlider");
	var selectList = document.getElementById("selectList");
	var checkbox = document.getElementById("cbCustom");
	var outputCounter = document.getElementById('outputCounter');
	var outputResult = document.getElementById("outputResult");

	

	changeColor(slider);
	checkbox.style.background = "#212121";
	amount = slider.value;
	outputCounter.value = amount;

	if(selectList.selectedIndex == 0) isEvening = false;
	else isEvening = true;

	result = (amount < 5 ? 0 : amount -5) * 100 + 500;
	result = isEvening ? result*2 : result;

	outputResult.value = trim(result) + " руб.";
}

/**
   * 
   */
function changeColor(slider){
	var res = ((slider.value-1)/11)*100;
	slider.style.background = "linear-gradient(to right, #6e93ff " + res +"%, #d3d3d3 "+res+"%)";
}

/**
   * 
   */
function trim(a){
	if (a > 999){
		return Math.floor(a/1000) + " " + ((a % 1000 != 0) ? (a % 1000) : "000") ;
	}
	else return a;
}

