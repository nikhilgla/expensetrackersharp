console.log("JS start");

const myForm = document.querySelector('.my-form');
const price = document.querySelector('#price');
const titleInput = document.querySelector('#title');
const emailInput = document.querySelector('#description');
var itemList = document.querySelector('.items')
// var tot = document.querySelector('.totalamount');

myForm.addEventListener('submit', onSubmit);

var total = Number("0");

window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:4000/user/booking')
        .then((ele) => {
            console.log(ele);

            for (var i = 0; i < ele.data.AllData.length; i++) {
                showOnScreen(ele.data.AllData[i]);
            }
        })
        .catch((err) => { console.log(err); })

})

async function onSubmit(e) {
    e.preventDefault();
    console.log(titleInput.value);


    let myObj = {
        title: titleInput.value,
        price: price.value,
        description:emailInput.value
    }
    console.log(myObj);
    
        await axios.post('http://localhost:4000/user/booking', myObj)
            .then((ele) => {
                console.log(ele.data);
                showOnScreen(ele.data.newUserDetail)
            })
            .catch((err) => { console.log(err); })

    resetForm();
}

async function showOnScreen(userObj) {
    // this.total = this.total + Number(userObj.amount);
    // console.log(this.total);

    const childli = `<li class="item" id=${userObj.title}>${userObj.title} - ${userObj.price} - ${userObj.description} <button onclick=deleteExp('${userObj.title}','${userObj.id}') class="btn btndel btn-danger btn-sm float-right delete">X</button>  <button onclick=insExp('${userObj.title}','${userObj.id}') class="btn btn-success btn-sm float-right delete">Ins</button></li>`
    itemList.innerHTML = itemList.innerHTML + childli;

    // const childtotal = `<h3>Total Value worth of Products : ${this.total}</h3>`;
    // tot.innerHTML = childtotal;

}

async function deleteExp(name, id ) {
    const cc = document.getElementById(name);
    //var li = cc.parentElement;
    itemList.removeChild(cc);
    
    // this.total = this.total - Number(amount);
    // const childtotal = `<h3>Total Value worth of Products : ${this.total}</h3>`;
    // tot.innerHTML = childtotal;

    await axios.delete(`http://localhost:4000/user/booking/${id}`)
        .then((ele) => { console.log(ele.data) })
        .catch((err) => { console.log(err); });
}

async function insExp(name, id ) {
    const cc = document.getElementById(name);
    //var li = cc.parentElement;
    itemList.removeChild(cc);
    
    // this.total = this.total - Number(amount);
    // const childtotal = `<h3>Total Value worth of Products : ${this.total}</h3>`;
    // tot.innerHTML = childtotal;

    await axios.post(`http://localhost:4000/user/booking/ins/${id}`)
        .then((ele) => { 
            console.log(ele.data);
            titleInput.value = ele.data.newUserDetail.title;
            price.value = ele.data.newUserDetail.price;
            emailInput.value = ele.data.newUserDetail.description;
         })
        .catch((err) => { console.log(err); });
}

// reset the form
function resetForm() {
    titleInput.value = '';
    price.value = '';
    emailInput.value = '';
}