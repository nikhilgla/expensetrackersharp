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

const searchName = document.querySelector('#searchName');
const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');


 async function searchIt() {
    console.log("Inside search bar");
    await axios.get(`http://localhost:4000/cricket/getplayer/${searchName.value}`)
    .then((ele) => {
        console.log("thik hai mil gya");
        console.log(ele);
        console.log(ele.data.newUserDetail[0]);
        const newObj = ele.data.newUserDetail[0];
        const l1 = `<h2>${newObj.name}</h2>`;
        const l2 = `<img src="${newObj.pic}" alt="">`;
        const l3 = `<h5>birth place is :${newObj.bplace}</h5>`;
        const l4 = `<h5>Matches :${newObj.matches}</h5>`;
        const l5 = `<h5>Runs :${newObj.runs}</h5>`;
        const l6 = `<h5>Fifty :${newObj.fifty}</h5>`;
        const l7 = `<h5>Hundred :${newObj.hundred}</h5>`;
        const l8 = `<h5>Wickets :${newObj.wickets}</h5>`;
        leftSide.innerHTML = leftSide.innerHTML + l1 + l2 +l3+l4+l5+l6+l7+l8;

        const edit=`<button class="btn btn-primary" type="button" onclick=editIt() >Edit</button>` ;

        const r1 = `<p>${newObj.career}</p>`;
        rightSide.innerHTML = rightSide.innerHTML + edit + r1;


    })
    .catch((err) => {console.log(err);})

}


async function onSubmit() {
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

    await axios.post(`http://localhost:4000/cricket/addplayer`, myObj)
        .then((ele) => {
            console.log(ele.data);
        })
        .catch((err) => { console.log(err); })

    resetForm();
}

function editIt(){
    console.log("works");
}

function resetForm() {
    namee.value = "";
}