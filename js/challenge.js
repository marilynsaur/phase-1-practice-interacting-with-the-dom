document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
   
  

  const main = document.querySelector('div')
  console.log(main)

  const taskForm = document.querySelector('#comment-form')

  const taskList = document.querySelector('body')

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    newTask = document.querySelector('#comment-input').value
    console.log(newTask)

    taskItem = document.createElement('Li')
    taskItem.innerText = newTask

    taskList.appendChild(taskItem)
    taskForm.reset()




  })

});


let pauseButton = document.getElementById("pause");

const states = {
  "resume": "pause",
  "pause": "resume"

};

let timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
  ++totalSeconds;
  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds - hour * 3600) / 60);
  let seconds = totalSeconds - (hour * 3600 + minute * 60);
  if (hour < 10)
    hour = "0" + hour;
  if (minute < 10)
    minute = "0" + minute;
  if (seconds < 10)
    seconds = "0" + seconds;
  document.getElementById("counter").innerHTML = minute + ":" + seconds;
}



function pauseTimer(e) {
  const stop = e.target;
  stop.innerText = states[stop.innerText];
  alert("Pause button");


}

pauseButton.addEventListener('click', pauseTimer);


const incrementCount = document.getElementById("plus");
const decrementCount = document.getElementById("minus");


const totalCount = document.getElementById("counter");


let count = 0;


totalCount.innerHTML = count;


const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};


const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);




let likeList = document.querySelector('.likes');
let heartButton = document.querySelector('#heart');
console.log("heartButton",heartButton)

let like = 0;
let likesArray = [];
const li = document.createElement("li")
const increaseLike = () => {
  console.log("test")
  like ++;
  //LikeList.innerHTML = like
 
  li.innerText = `${totalSeconds} liked this ${like}`
  likeList.appendChild(li)
 // addHearts();
};

 heartButton.addEventListener("click", increaseLike);

//   function addHearts() {
//    console.log(li)
//    count += 1;
//    likeList.append(li + count)
//  };
