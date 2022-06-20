var weightInput = document.querySelector(".weight");
var heightInput = document.querySelector(".height");
var calculateButton = document.querySelector(".calculate-button");
var result = document.querySelector(".result");
var resultStatement = document.querySelector(".result-statement");
var weight;
var height;
var BMI;


 if((weight === '') || (weight < 0) || (isNaN(weight))){
        resultStatement.innerText = "Please provide a valid weight";
        
    } else if(height === '' || weight < 0 || isNaN(height)){
        resultStatement.innerText = "Please provide a valid height";
    }

calculateButton.addEventListener("click", ()=>{
    weight = weightInput.value;
    height = heightInput.value;
    BMI = weight/(height**2);
    result.innerText = BMI;
    

  if(BMI < 18.5){
        resultStatement.innerText = "Your BMI shows that you are UNDERWEIGHT";    
    }else if((BMI >18.5) && (BMI < 24.9)){
        resultStatement.innerText = "Your BMI shows that you have a HEALTHY weight";
    }else if((BMI > 25) && (BMI < 29.9 )){
        resultStatement.innerText = "Your BMI shows that you are OVERWEIGHT";
    }else {resultStatement.innerText = "Your BMI shows that you are OBESE";
}
})

