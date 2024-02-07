let maths = document.querySelector('.maths');
let che = document.querySelector('.chemistry');
let bio = document.querySelector('.bio');
let cs = document.querySelector('.cs');
let rollno = document.querySelector('.rollno');
let btn = document.querySelector('.btn');
let name2  = document.querySelector('.name');

let rmaths = document.querySelector('.rmaths');
let rche = document.querySelector('.rchemistry');
let rbio = document.querySelector('.rbio');
let rcs = document.querySelector('.rcs');
let info = document.querySelector('.info');

if(btn)
{
    btn.addEventListener('click',function(){
        localStorage.setItem('key1',maths.value);
        localStorage.setItem('key2',che.value);
        localStorage.setItem('key3',bio.value);
        localStorage.setItem('key4',cs.value);
        localStorage.setItem('key5',rollno.value);
        localStorage.setItem('key6',name2.value);
    })
}


rmaths.innerHTML = localStorage.getItem('key1');
rche.innerHTML = localStorage.getItem('key2');
rbio.innerHTML = localStorage.getItem('key3');
rcs.innerHTML = localStorage.getItem('key4');

let value1  = localStorage.getItem('key6')
let value2  = localStorage.getItem('key5')

info.innerHTML = `
                <p><strong>Name: </strong> ${value1}</p>
                <p><strong>Roll Number: </strong> ${value2}</p> `

