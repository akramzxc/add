const num = prompt ('Введите число!!!!')
const num2 = prompt ('Введите число!!!!')

if (num2<num) {
    alert (num2 + " короче " + num)
}else if (num2>num) {
    alert (num2 + " длиннее " + num)
}else {
    alert ("равно")
}