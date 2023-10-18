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
            const l23 = `<h5>DOB :${newObj.dob}</h5>`;
            const l3 = `<h5>birth place is :${newObj.bplace}</h5>`;
            const l4 = `<h5>Matches :${newObj.matches}</h5>`;
            const l5 = `<h5>Runs :${newObj.runs}</h5>`;
            const l6 = `<h5>Fifty :${newObj.fifty}</h5>`;
            const l7 = `<h5>Hundred :${newObj.hundred}</h5>`;
            const l8 = `<h5>Average :${newObj.avg}</h5>`;
            const l9 = `<h5>Wickets :${newObj.wickets}</h5>`;
            leftSide.innerHTML =  l1 + l2 + l23 + l3 + l4 + l5 + l6 + l7 + l8 + l9;

            const edit = `<button class="btn btn-primary" type="button" onclick=editIt() >Edit</button>`;

            const r1 = `<p>${newObj.career}</p>`;
            rightSide.innerHTML =  edit + r1;


        })
        .catch((err) => { console.log(err); })

}

async function editIt() {
    console.log("Inside edit player");
    await axios.get(`http://localhost:4000/cricket/getplayer/${searchName.value}`)
        .then((ele) => {
            console.log(ele.data.newUserDetail[0]);
            const newObj = ele.data.newUserDetail[0];
            namee.value = newObj.name;
            dob.value = newObj.dob;
            pic.value = newObj.pic;
            bplace.value = newObj.bplace;
            career.value = newObj.career;
            matches.value = newObj.matches;
            runs.value = newObj.runs;
            fifty.value = newObj.fifty;
            hundred.value = newObj.hundred;
            wickets.value = newObj.wickets;
            avg.value = newObj.avg;



        });

        document.querySelector("#ebutton").className = "btn btn-success visible";
        document.querySelector("#sbutton").className = "btn btn-success invisible";
}

async function onEdit(){
    console.log("editing this player");
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

    await axios.put(`http://localhost:4000/cricket/editplayer/${myObj.name}`, myObj)
        .then((ele) => {
            console.log(ele.data.newUserDetail);
            const l1 = `<h2>${namee.value}</h2>`;
            const l2 = `<img src="${pic.value}" alt="">`;
            const l23 = `<h5>DOB :${dob.value}</h5>`;
            const l3 = `<h5>birth place is :${bplace.value}</h5>`;
            const l4 = `<h5>Matches :${matches.value}</h5>`;
            const l5 = `<h5>Runs :${runs.value}</h5>`;
            const l6 = `<h5>Fifty :${fifty.value}</h5>`;
            const l7 = `<h5>Hundred :${hundred.value}</h5>`;
            const l8 = `<h5>Average :${avg.value}</h5>`;
            const l9 = `<h5>Wickets :${wickets.value}</h5>`;
            leftSide.innerHTML =  l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9;

            const edit = `<button class="btn btn-primary" type="button" onclick=editIt() >Edit</button>`;

            const r1 = `<p>${career.value}</p>`;
            rightSide.innerHTML =  edit + r1;
        })
        .catch((err) => { console.log(err); })

    resetForm();
    document.querySelector("#ebutton").className = "btn btn-success invisible";
    document.querySelector("#sbutton").className = "btn btn-success visible";



}


async function onSubmit() {
    console.log("new player created");

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


function resetForm() {
    namee.value = "";
    dob.value = "";
    pic.value = "";
    bplace.value = "";
    career.value = "";
    matches.value = "";
    runs.value = "";
    fifty.value = "";
    hundred.value = "";
    wickets.value = "";
    avg.value = "";
}