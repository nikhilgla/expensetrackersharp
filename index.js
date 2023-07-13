console.log("JS start");

const myForm = document.querySelector('.my-form');
const amount = document.querySelector('#amount');
const categ = document.querySelector('#category');
const desc = document.querySelector('#desc');
var itemList = document.querySelector('.items')

myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    console.log(amount.value);

    
	let myObj = {
        amount:amount.value,
        categ:categ.value,
        desc:desc.value
    }
	localStorage.setItem(desc.value, JSON.stringify(myObj));
    console.log(localStorage.getItem(desc.value));
    //console.log(JSON.parse(localStorage.getItem(desc.value)));

    const childli =`<li class="item" id=${desc.value}>${amount.value}-${categ.value}-${desc.value}<button onclick=deleteExp('${desc.value}') class="btn btn-danger btn-sm float-right delete">X</button><button onclick=insertExp('${desc.value}','${amount.value}','${categ.value}') class="btn btn-success btn-sm float-right insert">Ins</button></li>`
    itemList.innerHTML=itemList.innerHTML + childli;


    resetForm();
}

function deleteExp(desc){
    const cc = document.getElementById(desc)
    //var li = cc.parentElement;
    itemList.removeChild(cc);
    localStorage.removeItem(desc);
}
function insertExp(descc , amountt , categg){
    const cc = document.getElementById(descc)
    itemList.removeChild(cc);
    localStorage.removeItem(descc);
    amount.value = amountt;
    desc.value = descc;
    categ,value = categg;
}

// reset the form
function resetForm() {
    amount.value = '';
    categ.value = '';
    desc.value = '';
   }