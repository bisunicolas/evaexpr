function handleClick() {
    var firstInput = document.getElementById("input1");
    var secondInput = document.getElementById("input2");
    var firstInputValue = firstInput.value;
    var secondInputValue = secondInput.value;
    var result = parseInt(firstInputValue) + parseInt(secondInputValue);
    alert(result);
}