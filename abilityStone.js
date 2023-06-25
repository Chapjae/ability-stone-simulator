//.get('/abilitystone', function (req,res) {
//return res.send("cut your stone!")
//});
const container = document.getElementById('abilityStone')
const topRow = document.getElementById("topRow");
const botRow = document.getElementById("botRow");

const success = "O";
const fail = "X";
const pending = "?";


const mapIdToEngraving = {}
const engravingsListThatIWantToKeepInOrder = [];
const engraving1Results1 = document.getElementById("engravingNodes1").children;
// let successRate = document.getElementById("successRate").innerHTML

document.addEventListener("DOMContentLoaded", getBattleEngravings)
const successRateEl = document.getElementById("successRate")
const battleEngravingListEl = document.getElementById("battleEngravingsList")

async function getBattleEngravings() {
    let response = await axios.get("http://54.219.1.142:8000/engravings");
    let engravings = response.data
    // engravings.forEach(engraving => {engraving.image = `engravings/${engravings.name}.webp`});
    engravings.forEach(engraving => {
        engraving.image = getImage(engraving)
        engravingsListThatIWantToKeepInOrder.push(engraving.id)
        mapIdToEngraving[engraving.id] = engraving;
    });

    for (var i=0; i<engravings.length; i++) {
        console.log(getImage(engravings[i]))
    }
    
    let battleEngravingList = document.getElementById("battleEngravingsList")
    
    for (let i = 0; i < engravings.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = engravings[i].name;
        option.value = engravings[i].id 
        battleEngravingList.appendChild(option)
    }
    battleEngravings = engravings;
}

let battleEngravings;
//    {
//        id: "grudge",
//        name: "Grudge",
//        image: "engravings/grudge.webp",
//        lvl3: "Damage +20% to Boss or above monsters. Incoming Damage +20%."
//    },
//    {
//        id: "kbw",
//        name: "Keen Blunt Weapon",
//        image: "engravings/kbw.webp",
//        lvl3: "+50% Crit Damage but your attacks have a chance to deal -20% Damage."
//    },
//    {
//        id: "cursed doll",
//        name: "Cursed Doll",
//        image: "engravings/cursed_doll.webp",
//        lvl3: "Attack Power +16%. Healing -25%. Natural recovery excluded."
//
//    },
//    {   id: "adrenaline",
//        name: "Adrenaline",
//        image: "engravings/adrenaline.webp",
//        lvl3: "After using skills (excluding Movement Skills and Basic Attack), Atk. Power +1% for 6s. Stacks up to 6 times. When max stacks are reached, Crit Rate +15%. If Cooldown reduction due to skill cancel is applied to this effect, it is applied after the end of the skill."
//    },
//    {
//        id: "raid",
//        name: "Raid Captain",
    //    image: "engravings/raid_captain.webp",
//        lvl3: "Outgoing Damage +45% of basic Move Speed bonus percentage."
//    },
//    {
//        id: "taijutsu",
//        name: "Ultimate Skill: Taijutsu",
//        image: "engravings/taijutsu.webp",
//        lvl3: "Natural recovery speed of Stamina Energy +600%. Stamina Skill Damage +65%. Shock Skill Damage -30%."
//    }
//]

function getImage(engraving) {
    let beg = "https://lostark.wiki.fextralife.com/file/Lost-Ark/";
    let end = "_engravings_lost_ark_wiki_guide_64x.jpg";
    let translated = engraving.name.toLowerCase().split(" ").join("_");
    console.log(translated)
    return beg + translated + end;
}

function addToMalus(selected) {
    const malusRow = document.getElementById("malusRow")
    const malusTap = document.getElementById("malusTap")

    let img = new Image(100,100);
    img.src = selected

    malusRow.appendChild(img)

    if(malusRow.childElementCount == 3) {
        malusTap.hidden = false
    } else {
        return alert("You already have a malus!")
    }
    img.addEventListener("click", removeEngraving); 
    
    function removeEngraving() {
        img.parentElement.firstElementChild.hidden = true
        img.remove()
    }
} 

function createNode() {
    for (let i = 0; i <= 10; i++) {
        let node = document.createElement("div");
        node.id = "node";

        let rowNode = document.getElementById("node")
        topRow.appendChild(rowNode);
        botRow.appendChild(rowNode);
    }

   
}

function addToRow(selected) {
    const topRow = document.getElementById("engravingRow1");
    const botRow = document.getElementById("engravingRow2");
    const topTap = document.getElementById("topTap");
    const botTap = document.getElementById("botTap")

    let img = new Image(100 ,100);

    img.src = mapIdToEngraving[selected].image;
    // img.src = battleEngravings.filter(battleEngraving => battleEngraving.id == selected)[0].image
    
    if (topRow.childElementCount == 2) {
        topRow.appendChild(img);
        topTap.hidden = false;
        } else if (botRow.childElementCount == 2) {
            botRow.appendChild(img)
            botTap.hidden = false;
            } else {
            return alert("You already have 2 engravings!")}

    img.addEventListener("click", removeEngraving);

    function removeEngraving() {
        img.parentElement.firstElementChild.hidden = true
        img.remove()
    }
        
}

//function getNode() {
//    let nodes = document.getElementById("engravingRow1").children
//    let nodeRow = Array.from(nodes)
//    let nodeToTap = nodeRow.find(node => node.innerHTML = "?")
//
//   // for (let i = 0; i < nodes.length; i++) {
//   //     nodes[i].innerHTML;
//   //     
//   //     if (nodes[i].innerHTML == "?") {
//   //         return nodes[i]
//   //     } else { i++;}
//   // }   
//}


   // let nodeRow = Array.from(engraving1Results1)
   // let nodeIdx = nodeRow[0]
//
   // for (let nodes of nodeRow) {
   //     if (nodes.innerHTML == "?") {
   //     return nodes.innerHTML
   //     } else {
   //         nodeIdx[+1];
   //         getNode(nodeIdx);
   //     }
   // }
        //console.log(nodeRow[i].innerHTML)
    //if (nodeRow[i].innerHTML = pending) {
    
        //    } else { 
         //   node[i].innerHTML = fail
         //   }
    //        nodeRow[i++].innerHTML;
    //    nodeRow[+1];
    
//}


function tap1() {
   // const nodeRow = document.getElementById("engraving1")
   // get my list of nodes
    let nodes = document.getElementById("engravingNodes1").children
    let nodeRow = Array.from(nodes)
    
    // get the first unhit node
    let nodeToTap = nodeRow.find(node => node.innerHTML == "?")
    nodeRow.values()
     //let nodeToHit = getNode();

    // nodeToHit = engraving1Results1[i];

    // generate random number between 1-100
    let rng = Math.floor(Math.random() * 101)
    let rate = getSuccessRate()

   // if rng is less than success rate, tap is successfull; otherwise, tap is failed

   // failed tap should increase success rate by 10, unless rate is already 75
   if (rng > rate) {
        setSuccessRate(rate+10)
        // debugger
        // successRate += 10;
       // successRate.innerHTML = parseInt(successRate, 10) + 10;
        // console.log(successRate)
        nodeToTap.innerHTML = fail; 
    } 
    // successful tap should decrease next success rate by 10 unless rate is already 25
    else {
        setSuccessRate(rate-10)
        // successRate -= 10;
       // successRate.innerHTML = parseInt(successRate, 10) - 10;
        // console.log(successRate)
        nodeToTap.innerHTML = success;
    }
}

function tap2() {
    // const nodeRow = document.getElementById("engraving1")
    // let successRate = document.getElementById("successRate")
     let nodes = document.getElementById("engravingNodes2").children
     let nodeRow = Array.from(nodes)
     let nodeToTap = nodeRow.find(node => node.innerHTML == "?")
    //let nodeToHit = getNode();
 
     // nodeToHit = engraving1Results1[i];
     let rng = Math.floor(Math.random() * 101)
     let rate = getSuccessRate()

     if (rng > rate) {
        setSuccessRate(rate+10)
        nodeToTap.innerHTML = fail;
     } else {
        setSuccessRate(rate-10)
        nodeToTap.innerHTML = success;
     }

 
     //if (failRate > successRate && successRate !== 75) {
     //    successRate = parseInt(successRate) + 10;
     //    nodeToTap.innerHTML = fail 
     //} else {
     //    successRate = parseInt(successRate) - 10;
     //    nodeToTap.innerHTML = success
     //}
 }

 function tap3() {
    // const nodeRow = document.getElementById("engraving1")
    // let successRate = document.getElementById("successRate")
     let nodes = document.getElementById("malusNodes").children
     let nodeRow = Array.from(nodes)
     let nodeToTap = nodeRow.find(node => node.innerHTML == "?")
    //let nodeToHit = getNode();
 
     // nodeToHit = engraving1Results1[i];
     let rng = Math.floor(Math.random() * 101)
     let rate = getSuccessRate()

     if (rng > rate) {
        setSuccessRate(rate+10)
        nodeToTap.innerHTML = fail;
     } else {
        setSuccessRate(rate-10)
        nodeToTap.innerHTML = success;
     }

 
     //if (failRate > successRate && successRate !== 75) {
     //    successRate = parseInt(successRate) + 10;
     //    nodeToTap.innerHTML = fail 
     //} else {
     //    successRate = parseInt(successRate) - 10;
     //    nodeToTap.innerHTML = success
     //}
 }

 function getSuccessRate() {
    return parseInt(successRateEl.innerHTML)
 }

 function setSuccessRate(num) {
    if (num <= 25) {
        num = 25;
    } else if (num >= 75) {
        num = 75;
    }
    let successRate = num.toString()
    successRateEl.innerHTML = successRate
 }
    //let topRow = document.getElementById("topRow");
    //let topEngraving = document.createElement('td');
    //let engravingId = document.getElementsByTagName('td').length

    //topEngraving.setAttribute('id', engravingId);
    //topEngraving.innerHTML('Selected Engraving');
    //topRow.appendChild(topEngraving);

    // img.src = engravings.filter(engraving => {
    //     console.log("engraving.id: " + engraving.id)
    //     console.log("selected: " + selected)
    //     return engraving.id == selected
    // })[0].image;
    //topRow.appendChild(img)

//function addToRow() {
//    let engraving = new Image(50,50);
//    engraving.src = engravings.grudge.image;
//    document.body.appendChild(engraving)
    
    // let row = document.getElementById("kbw")
   
    //if (toprow.length == 0) {
    //        toprow.push(choice)
    //    } else if (botrow.length == 0) {
    //        botrow.push(choice)
    //    } else {
    //        console.log("already picked your engravings")
    //}
//}

// function pickEngraving() {
    // document.getElementById("engravingsMenu").classList.toggle("show")
// }
// 
// window.onclick = function(event) {
    // if (!event.target.matches('.dropbtn')) {
    //   var dropdowns = document.getElementsByClassName("engraving-content");
    //   var i;
    //   for (i = 0; i < dropdowns.length; i++) {
        // var openDropdown = dropdowns[i];
        // if (openDropdown.classList.contains('show')) {
        //   openDropdown.classList.remove('show');
        // }
    //   }
    // }
//   }