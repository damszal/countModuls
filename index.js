const app = getQuery('.app')
let btn = getQuery('.generate')
let timerElement = getQuery('#timer');
let stopButton = getQuery('#stopButton');

const modulesArr = [];

let timer;
let seconds = 0;
let isRunning = false;

let emptySlot = 0
let emptyBottleSum = 0;
let fullBottleSum = 0;



btn.addEventListener('click',btnHandler)

function stopBtnHandler(modulsNumber){
  console.log("empty slots", emptySlot)
  console.log("empty bottels", emptyBottleSum)
  console.log("full bottels", fullBottleSum)
  if (isRunning) {
    stopTimer();
  }
  const results = createFullElement('div', 'results', 'results',
  `
  results:
  total slots:${modulsNumber * 8}
  empty slots : ${emptySlot}
  empty bottles : ${emptyBottleSum}
  full bottles bottles : ${fullBottleSum}
  `
  )
  app.appendChild(results)
  delElem(stopButton)
  const restart = createFullElement('button','restart', 'restart','restart')
  app.appendChild(restart)
  restart.addEventListener('click', ()=>{
    window.location.reload()
  })
}

function btnHandler(e){
  e.preventDefault();
  const modulsNumber = randomNumber(7,1)
  const moduleVew = getQuery('.module')
  startTimer()
  stopButton.addEventListener('click', ()=>{
    stopBtnHandler(modulsNumber)
  });

  if(moduleVew == null){
    for(i = 1; i<=modulsNumber; i++){
      const moduleElem = createFullElement('div','module')
      app.appendChild(moduleElem)
      for(j=1; j<=4; j++){
        const slotFrontColor = randomColor(0,3);
        const slotBackColor = randomColor(0,3);
        
        if(slotFrontColor == 'silver'){
          emptySlot += + 1
        } else if (slotFrontColor == 'blue'){
          emptyBottleSum += + 1
        }else if (slotFrontColor == 'darkblue'){
          fullBottleSum += + 1
        }
        if(slotBackColor == 'silver'){
          emptySlot += + 1
        } else if (slotBackColor == 'blue'){
          emptyBottleSum += + 1
        }else if (slotBackColor == 'darkblue'){
          fullBottleSum += + 1
        }

        const container1 = createFullElement('div','container', `container-${j}`);
        moduleElem.appendChild(container1);
        const slot2 = createFullElement('div',`slot-front`, `slot${j}-front`);
        slot2.setAttribute('class',`slot-front ${slotFrontColor}`);
        container1.appendChild(slot2);
        const slot1 = createFullElement('div',`slot-back`, `slot${j}-back`);
        slot1.setAttribute('class',`slot-back ${slotBackColor}`);
        container1.appendChild(slot1);
      };
    }
    delElem(btn)
  }
}
















// var timerElement = document.getElementById('timer');
// var stopButton = document.getElementById('stopButton');
// var startButton = document.getElementById('startButton');
// var resetButton = document.getElementById('resetButton');


    // startButton.addEventListener('click', function() {
    //   if (!isRunning) {
    //     startTimer();
    //   }
    // });

    // stopButton.addEventListener('click', function() {
    //   if (isRunning) {
    //     stopTimer();
    //   }
    // });

    // resetButton.addEventListener('click', function() {
    //   resetTimer();
    // });

        















    // ----------------------------------------------------------------------
        // const container = {
        //   order : 0,
        //   position: "front" || "back",
        //   completed : false
        // }
        
        // const slot = {
        //   id : 0,
        //   containers: 2,
        //   completed : false
        // }
        
        // const bottle = {
        //   condition : "useful" || "damaged",
        //   full: false
        // }
        
        

        
        
        
        





