//Container1------------------------------------------------------------------
let container = document.getElementById("container");

let ptag1 = document.createElement("p");
ptag1.innerHTML = "Filter by Department: ";
let select1 = document.getElementById("select1");
select1.addEventListener("change" , function(){
    select1.value;
})

let ptag2 = document.createElement("p");
ptag2.innerHTML = "Filter by Gender: ";
let select2 = document.getElementById("select2");
select2.addEventListener("change" , function(){
    select2.value;
})

let ptag3 = document.createElement("p");
ptag3.innerHTML = "Sort by Salary: ";
let select3 = document.getElementById("select3");
select3.addEventListener("change" , function(){
    select3.value;
})

container.append(ptag1, select1 , ptag2 , select2 , ptag3 , select3);


// Container2---------------------------------------------------------------------
let container2 = document.getElementById("container2");

let sNo = document.createElement("h3");
sNo.innerHTML = "S. no";

let name = document.createElement("h3");
name.innerHTML = "Name";

let gender = document.createElement("h3");
gender.innerHTML = "Gender";

let department = document.createElement("h3");
department.innerHTML = "Department";

let salary = document.createElement("h3");
salary.innerHTML = "Salary";

container2.append(sNo , name , gender , department , salary);


// Container3----------------------------------------------------------------------------
let container3 = document.getElementById("container3");


//Data-fetch async function--------------------------------------------------------------
async function fetchData(){
    let BASE_LINK = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";
    // if(order!=undefined){
    //     BASE_LINK += "?order=asc" + select3.value;
    // }

    try {
        let res = await fetch(BASE_LINK);
        let data = await res.json();
        console.log(data);
        showData(data.data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();

function showData(data){
    data.forEach(element => {
        let div1 = document.createElement("div");
        div1.className = "div1";
        let div2 = document.createElement("div");
        div2.className = "div1";
        let div3 = document.createElement("div");
        div3.className = "div1";
        let div4 = document.createElement("div");
        div4.className = "div1";
        let div5 = document.createElement("div");
        div5.className = "div1";

        let id = document.createElement("p");
        id.innerHTML = element.id;

        let name1 = document.createElement("p");
        name1.innerHTML = element.name;

        let gender1 = document.createElement("p");
        gender1.innerHTML = element.gender;

        let department1 = document.createElement("p");
        department1.innerHTML = element.department;

        let salary1 = document.createElement("p");
        salary1.innerHTML = element.salary;

        div1.append(id,name1,gender1,department1,salary1);
        // div2.append(name1);
        // div3.append(gender1);
        // div4.append(department1);
        // div5.append(salary1);

        container3.appendChild(div1);
    });
}