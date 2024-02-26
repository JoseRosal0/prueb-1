const kitkat_Btn = document.querySelector('#p0');
//console.log(kitkat_Btn);
const samba_Btn = document.querySelector('#p1');
const cocosette_Btn = document.querySelector('#p2');
const polvorosas_Btn = document.querySelector('#p3');
const oreo_Btn = document.querySelector('#p4');
const ruffles_Btn = document.querySelector('#p5');
const doritos_Btn = document.querySelector('#p6');
const twix_Btn = document.querySelector('#p7');
const Mms_Btn = document.querySelector('#p8');
const lays_Btn = document.querySelector('#p9');
const chicles_Btn = document.querySelector('#p10');
const clubSocial_Btn = document.querySelector('#p11');
const torta_Btn = document.querySelector('#p12');

cargarEventListener();

function cargarEventListener(){
    kitkat_Btn.addEventListener('click',agregarChuche);
    samba_Btn.addEventListener('click',agregarChuche);
    cocosette_Btn.addEventListener('click',agregarChuche);
    polvorosas_Btn.addEventListener('click',agregarChuche);
    oreo_Btn.addEventListener('click',agregarChuche);
    ruffles_Btn.addEventListener('click',agregarChuche);
    doritos_Btn.addEventListener('click',agregarChuche);
    twix_Btn.addEventListener('click',agregarChuche);
    Mms_Btn.addEventListener('click',agregarChuche);
    lays_Btn.addEventListener('click',agregarChuche);
    chicles_Btn.addEventListener('click',agregarChuche);
    clubSocial_Btn.addEventListener('click',agregarChuche);
    torta_Btn.addEventListener('click',agregarChuche);

}

function agregarChuche(e){
    e.preventDefault();
    console.log('hola')
}






