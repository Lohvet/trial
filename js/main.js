function Solve(){

    document.getElementById('answer').innerHTML = "";
    document.getElementById('solution').innerHTML = "";
    document.getElementById('value').innerHTML = "";

    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;

    if ((base == '') || (parseFloat(base) == 0)){
        alert("Base value is not provided");
        return false;
    }
    if((height == '') || (parseFloat(height) == 0)){
        alert("Height value is not provided");
        return false;
    }

    solution.innerHTML = "Solution: ";
    var value = ((parseFloat(base) * parseFloat(height)) / 2);

    answer.innerHTML = "Area = b * h / 2 = " +value;
}
