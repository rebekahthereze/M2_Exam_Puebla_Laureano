let heart = document.getElementById('heart');
let cross = document.getElementById('cross');
let petName = document.getElementById('petName');
let pet = document.getElementById('pet');
let list = document.getElementById('list');

let currNum = 0;

let petNameList = [];
let petImgList = [];
// let petList = []; / to create pet list array that with array that consists the pet img and pet name ( array inside an array )

let imgFolder = 'assets/';
let petImg = ['assets/cheetah.png', 'assets/dog.png', 'assets/duckling.png', 'assets/fox.png', 'assets/kitten.png', 'assets/lion.png', 'assets/rabbit.png', 'assets/sheep.png', 'assets/swan.png', 'assets/wolf.png'];
let petNames = [ 'Usain | 13 Years Old', 'Donkie | 8 Years Old', 'Kwek | 1 Year Old', 'Swipper | 9 Years Old', 'Arfie | 1 Year Old', 'Simbagabi | 15 Years Old', 'Autumn | 4 Years Old', 'Luna | 3 Years Old', 'Snow | 2 Years Old', 'Howl | 12 Years Old'];

// petImg[0] = 'assets/cheetah.png';
// petNames[0] = 'Usain | 13 Years Old';

// petImg[1] = 'assets/dog.png';
// petNames[1] = 'Donkie | 8 Years Old';

// petImg[2] = 'assets/duckling.png';
// petNames[2] = 'Kwek | 1 Year Old';

// petImg[3] = 'assets/fox.png';
// petNames[3] = 'Swipper | 9 Years Old';

// petImg[4] = 'assets/kitten.png';
// petNames[4] = 'Arfie | 1 Year Old';

// petImg[5] = 'assets/lion.png';
// petNames[5] = 'Simbagabi | 15 Years Old';

// petImg[6] = 'assets/rabbit.png';
// petNames[6] = 'Autumn | 4 Years Old';

// petImg[7] = 'assets/sheep.png';
// petNames[7] = 'Luna | 3 Years Old';

// petImg[8] = 'assets/swan.png';
// petNames[8] = 'Snow | 2 Years Old';

// petImg[9] = 'assets/wolf.png';
// petNames[9] = 'Howl | 12 Years Old';

function randomPet () {
    let randNum = Math.floor((Math.random() * petImg.length));
    pet.src = petImg[randNum];
    petName.innerHTML = petNames[randNum];
    currNum = randNum;
}

window.onload = randomPet;
cross.onclick = randomPet;

let counter = 0;

heart.onclick = function() {
    petNameList.push(petNames[currNum]);
    petImgList.push(petImg[currNum]);
    // petList.push([petNames[currNum], petImg[currNum]]);
    // console.log(petList[counter][0], petList[counter][1]);
    // list =  petList[counter][0];
    // counter = counter + 1;
    // console.log(counter);
    // list.innerHTML = petNameList;
    // document.getElementById("list-img").src = petImgList;
    list.innerHTML = petNames[currNum];
    document.getElementById("list-img").src = petImg[currNum];
    petNames.splice(currNum, 1);
    petImg.splice(currNum, 1);
    randomPet();
}
