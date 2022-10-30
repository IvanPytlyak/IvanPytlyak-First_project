

let header = document.querySelector('header');
let BurderOpen = document.getElementById('burgermenu');
let closes = document.getElementById('burgermenu_close');

BurderOpen.addEventListener('click', function(){
   
        header.classList.add('open');
        BurderOpen.classList.add('opens');     
 
})

closes.addEventListener('click', function(){
   
        header.classList.remove('open');
        BurderOpen.classList.remove('opens');      
    
});







// BurderOpen.addEventListener('click', function(event){
//     if (BurderOpen.classList == 'opens'){
//         BurderOpen.classList.remove('opens');
//         event.stopPropagation();
//     }
//     else {
//         BurderOpen.classList.add('opens');
//         event.stopPropagation();
//     } 
// })
















// BurderOpen.addEventListener('click', function(){
//     if (header.classList == 'open'){
//         header.classList.remove('open');   
//     }
//     else {
//         header.classList.add('open');  
//     } 
// })


// BurderOpen.addEventListener('click', function(event){
//     if (BurderOpen.classList == 'opens'){
//         BurderOpen.classList.remove('opens');
//         event.stopPropagation();
//     }
//     else {
//         BurderOpen.classList.add('opens');
//         event.stopPropagation();
//     } 
// })


// if (header.classList =='open'){
// closes.addEventListener('click', function(){
    

//     if (closes.classList == 'closes'){
//         closes.classList.remove('closes');
        
//     }
//     else {
//         closes.classList.add('closes');
       
//     }

// });

// }










// BurderOpen.addEventListener('click', function(){
//     BurderOpen.classList.toggle('open');
// })