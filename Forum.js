const names= ["Alice", "Bob", "Carol"];
const occupations= ["Writer", "Teacher", "Programmer"];
const prices= [30, 50, 70]

const newFreelancer =[
    {name: "Greg", price: 25, occupation:"Instructor"}, //<li>
    {name: "Justin", price: 35, occupation:"Welder"}, 
];

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);



const averageCost =[];

function getSum(prices) {
    let sum = 0;
    for(const price of prices){
      sum += price;
    }
    return sum;
}

function getAvg(prices){
    const sum = getSum(prices);
    return sum / prices.length;
    averageCost.push(sum / prices.length); 
    //4. Does it seem right to push the calculated mean into the averageCost array?
}

function render(){
    const freelancerName= document.querySelector('#name');
    const listName= document.createElement("li");
    let getName=newFreelancer[newFreelancer.length-1]; //3. One of the help desk tutors assisted me with this line, how would I fix this so that it would randomly pick 1 of the 2 elements in the newFreelancer array instead of it printing for Justin?
    listName.textContent=getName.name;
    freelancerName.appendChild(listName);
   
    const freelancerOccupation= document.querySelector('#occupation');
    const listOccupation= document.createElement("li");
    let getOccupation=newFreelancer[newFreelancer.length-1];
    listOccupation.textContent=getOccupation.occupation;
    freelancerOccupation.appendChild(listOccupation);

    const freelancerPrice= document.querySelector('#price');
    const listPrice= document.createElement("li");
    let getPrice=newFreelancer[newFreelancer.length-1];
    listPrice.textContent=getPrice.price;
    freelancerPrice.appendChild(listPrice);

    //2. Does Avg price have the same render setup like for name, occupation, and price?

}

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];

    const occupation = occupations[Math.floor(Math.random() * occupations.length)];

    const price = prices[Math.floor(Math.random() * prices.length)];
    //1. Am I supposed to put Avg price here? If so how?

    newFreelancer.push({ name, occupation, price });

    render();
}















// function addName() {
//     const name = names[Math.floor(Math.random() * names.length)];
// }

// function addOccupation() {
//     const occupation = occupations[Math.floor(Math.random() * occupations.length)];
// }

// function addPrice() {
//     const price = prices[Math.floor(Math.random() * prices.length)];
// }

// freelancers.push({name, occupation, price} )