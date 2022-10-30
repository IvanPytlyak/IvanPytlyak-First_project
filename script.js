

let header = document.querySelector('header');
let BurderOpen = document.getElementById('burgermenu');
let closes = document.getElementById('burgermenu_close');

BurderOpen.addEventListener('click', function(){
    if (header.classList == 'open'){
        header.classList.remove('open');   
    }
    else {
        header.classList.add('open');  
    } 
})


BurderOpen.addEventListener('click', function(event){
    if (BurderOpen.classList == 'opens'){
        BurderOpen.classList.remove('opens');
        event.stopPropagation();
    }
    else {
        BurderOpen.classList.add('opens');
        event.stopPropagation();
    } 
})


if (header.classList =='open'){
close.addEventListener('click', function(){
    

    if (closes.classList == 'close'){
        closes.classList.remove('close');
        
    }
    else {
        closes.classList.add('close');
       
    }

});

}











// BurderOpen.addEventListener('click', function(event){
//     if (BurderOpen.classList == 'open'){
//         BurderOpen.classList.remove('open');
//         console.log('1');
//         event.stopPropagation();
//     }
//     else {
//         BurderOpen.classList.add('open');
//         console.log('2');
//         event.stopPropagation();
//     } 
// })

// BurderOpen.addEventListener('click', function(){
//     BurderOpen.classList.toggle('open');
// })