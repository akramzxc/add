const color = prompt("Выберите цвет")

switch (color) {
    case ("red"): 
        alert('Stop');
    break;
    case ("yellow") :
        alert('Wait');
    break;
    case ("green"): 
        alert('Go');
    break;
    default:
        alert("unknown color");
}