let heart = document.getElementById('heart');
let cross = document.getElementById('cross');
let petName = document.getElementById('petName');
let pet = document.getElementById('pet');
let list = document.getElementById('list');

let currNum = 0;

let petNameList = [];
let petImgList = [];

let imgFolder = 'assets/';
let petImg = ['assets/cheetah.png', 'assets/dog.png', 'assets/duckling.png', 'assets/fox.png', 'assets/kitten.png', 'assets/lion.png', 'assets/rabbit.png', 'assets/sheep.png', 'assets/swan.png', 'assets/wolf.png'];
let petNames = [ 'Usain | 13 Years Old', 'Donkie | 8 Years Old', 'Kwek | 1 Year Old', 'Swipper | 9 Years Old', 'Arfie | 1 Year Old', 'Simbagabi | 15 Years Old', 'Autumn | 4 Years Old', 'Luna | 3 Years Old', 'Snow | 2 Years Old', 'Howl | 12 Years Old'];

function randomPet () {
    let randNum = Math.floor((Math.random() * petImg.length));//random selection of pets
    pet.src = petImg[randNum];//change src of a pet image
    petName.innerHTML = petNames[randNum];
    currNum = randNum;
}

window.onload = randomPet;
cross.onclick = randomPet;

let counter = 0;

heart.onclick = function() {
    petNameList.push(petNames[currNum]);
    petImgList.push(petImg[currNum]);
    addPetInList(petImg[currNum],petNames[currNum]);
    petNames.splice(currNum, 1);//restart animals
    petImg.splice(currNum, 1); //restart animals

    if(petNames.length!=0){
        randomPet();
        counter+=1;
    }else {
        const nullText=document.getElementById('petName');
        nullText.innerHTML = "Thank you for choosing Yoshi App";
        document.getElementById("pet").style.visibility = "hidden";
        heart.style.visibility = "hidden";
        cross.style.visibility = "hidden";
    }

}
//adds element in the list
function addPetInList(animalLink,animalName ){
    var animalLink=animalLink;
    var animalName=animalName;

    //adds div inside the parent div of list container
    const parentDiv=document.getElementById('parent-div');
    const newDiv=document.createElement('div');
    parentDiv.appendChild(newDiv);
    newDiv.classList.add('selected');

    //adds image inside div and its animal image link
    const newPetImage=document.createElement('img');
    newPetImage.classList.add('list-img');
    newPetImage.src=animalLink;
    newDiv.appendChild(newPetImage);

    //adds name inside div and its animal name
    const newPetName=document.createElement('h3');
    newPetName.classList.add('list')
    newPetName.innerHTML=animalName;
    newDiv.appendChild(newPetName);

}
