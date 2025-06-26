const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result')

    if(height < 0 || height === '' || isNaN(height)){
        result.innerHTML = "Enter a valid height in cm.";
    }
    else if(weight < 0 || weight === '' || isNaN(weight)){
        result.innerHTML = "Enter a valid weight in kg.";
    }else{
        const bmi = weight / ((height / 100) ** 2);

        if (bmi < 18.5) {
            result.innerHTML = `BMI is ${bmi}, thin`
        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerHTML = `BMI is ${bmi}, Normal`
        } else if (bmi >= 25 && bmi < 30) {
            result.innerHTML = `BMI is ${bmi}, overweight`
        } else {
            result.innerHTML = `BMI is ${bmi}, obese`
        }
    }
})