console.log("js start");

const myForm = document.querySelector('.my-form');
const namee = document.querySelector('#name');
const dob = document.querySelector('#dob');
const pic = document.querySelector('#pic');
const bplace = document.querySelector('#bplace');
const career = document.querySelector('#career');
const matches = document.querySelector('#matches');
const runs = document.querySelector('#runs');
const fifty = document.querySelector('#fifty');
const hundred = document.querySelector('#hundred');
const wickets = document.querySelector('#wickets');
const avg = document.querySelector('#avg');



function searchIt() {
    
    console.log("eadf");
}
console.log("fjh");


function onSubmit() {
    console.log("ufuusf");
    
    console.log(namee.value);


    let myObj = {
        name: namee.value,
        dob: dob.value,
        pic: pic.value,
        bplace: bplace.value,
        career: career.value,
        matches: matches.value,
        runs: runs.value,
        fifty: fifty.value,
        hundred: hundred.value,
        wickets: wickets.value,
        avg: avg.value
    }
    console.log(myObj);

    // await axios.post('http://localhost:4000/user/booking', myObj)
    //     .then((ele) => {
    //         console.log(ele.data);
    //     })
    //     .catch((err) => { console.log(err); })

    resetForm();
}
function resetForm() {
    namee.value = "";
}