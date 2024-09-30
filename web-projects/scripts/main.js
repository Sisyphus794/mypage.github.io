let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// 乘法计算输出到控制台
function chengfa(num1, num2){
    let result = num1 * num2;
    return result;
}
console.log(chengfa(2, 5));

// 通过点击，数字增加
let value = 0;
document.querySelector('button').addEventListener('click', function () {
    value += 1;
    target_num = document.querySelector('#num');
    target_num.textContent = value;
});

// 图片切换
let image = document.querySelector('img');
image.onclick = function(){
    let mysrc = image.getAttribute('src');
    if (mysrc === 'images/3.jpg') {
        image.setAttribute('src', 'images/2.jpg');
    } else {
        image.setAttribute('src', 'images/3.jpg')
    }
};