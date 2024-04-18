function calculate() {
    var weight = document.querySelector("#wt").value;
    var height = document.getElementById("ht").value;
    var mass = parseFloat(weight) / ((parseFloat(height)/100) ** 2);
     console.log(weight);
    var category;
    var t = document.getElementById('#wt');
    console.log(t);

    if (mass <= 18.5) {
        category = "Underweight";
    } else if (mass < 25) {
        category = "Normal weight";
    } else if (mass < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    document.getElementById("bmi").value = mass.toFixed(2);
    document.getElementById("category").value = category;
}
alert(mass);