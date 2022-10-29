

let BurderOpen = document.getElementById('burgermenu');
BurderOpen.addEventListener('click', function(event){
    if (BurderOpen.classList == 'open'){
        BurderOpen.classList.remove('open');
        console.log('1');
        event.stopPropagation();
    }
    else {
        BurderOpen.classList.add('open');
        console.log('2');
        event.stopPropagation();
    } 
})

// BurderOpen.addEventListener('click', function(){
//     BurderOpen.classList.toggle('open');
// })