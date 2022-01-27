var decrease = document.querySelector('#btnDecrease');
var reset = document.querySelector('#btnReset');
var increase = document.querySelector('#btnIncrease');
var value = document.querySelector('#value');

var count = 0

increase.addEventListener('click', function(){
    count++
    value.innerHTML = count;
});

reset.addEventListener('click', function(){
    count = 0
    value.innerHTML = count;
});

decrease.addEventListener('click', function(){
    count--
    value.innerHTML = count;
});


