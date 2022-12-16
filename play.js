var no_of_players = 4;
var players = ["player1_data", "player2_data", "player3_data", "player4_data"];

prompt_fun();
function prompt_fun() {
  no_of_players = parseInt(
    prompt("Please Enter The Number Of Players (1-4) !!!", "4")
  );
  if (no_of_players === 1) {
    players = ["player1_data"];
  } else if (no_of_players === 2) {
    players = ["player1_data", "player2_data"];
  } else if (no_of_players === 3) {
    players = ["player1_data", "player2_data", "player3_data"];
  } else if (no_of_players === 4) {
    players = ["player1_data", "player2_data", "player3_data", "player4_data"];
  } else {
    alert("Please Enter no between (1-4)");
    prompt_fun();
  }
}

var portal_storage = {
  timestone: false,
  spacestone: true,
  powerstone: true,
  realitystone: true,
  soulstone: true,
  memorystone: true
};
var player1_data = {
  player_name: "player1_data",
  player_no: "1",
  timestone: false,
  spacestone: false,
  powerstone: false,
  realitystone: false,
  soulstone: false,
  memorystone: false,
  position: 1,
  isStones: false,
  stonecount: 0,
  ultronattack: 0,
  memoryerase: 0,
  realityeffect: 0,
  name: JSON.parse(localStorage.getItem("player1_data")).name,
  pic: JSON.parse(localStorage.getItem("player1_data")).pic
};

var player2_data = {
  player_name: "player2_data",
  player_no: "2",
  timestone: false,
  spacestone: false,
  powerstone: false,
  realitystone: false,
  soulstone: false,
  memorystone: false,
  position: 1,
  isStones: false,
  stonecount: 0,
  ultronattack: 0,
  memoryerase: 0,
  realityeffect: 0,
  name: JSON.parse(localStorage.getItem("player2_data")).name,
  pic: JSON.parse(localStorage.getItem("player2_data")).pic
};

var player3_data = {
  player_name: "player3_data",
  player_no: "3",
  timestone: false,
  spacestone: false,
  powerstone: false,
  realitystone: false,
  soulstone: false,
  memorystone: false,
  position: 1,
  isStones: false,
  stonecount: 0,
  ultronattack: 0,
  memoryerase: 0,
  realityeffect: 0,
  name: JSON.parse(localStorage.getItem("player3_data")).name,
  pic: JSON.parse(localStorage.getItem("player3_data")).pic
};

var player4_data = {
  player_name: "player4_data",
  player_no: "4",
  timestone: false,
  spacestone: false,
  powerstone: false,
  realitystone: false,
  soulstone: false,
  memorystone: false,
  position: 1,
  isStones: false,
  stonecount: 0,
  ultronattack: 0,
  memoryerase: 0,
  realityeffect: 0,
  name: JSON.parse(localStorage.getItem("player4_data")).name,
  pic: JSON.parse(localStorage.getItem("player4_data")).pic
};

var time_sliding_window = [];
var active_player_count = 1;
var active_player = player1_data;
var number = 6;
var portal_loc = portal_generator();

var enemy_loc = enemy_generator();

var reality_enemy_loc = reality_enemy_generator();
var actual_portal_loc = portal_loc;
var actual_enemy_loc = enemy_loc;
var roll_btn = document.getElementsByClassName("dice")[0];
roll_btn.addEventListener("click", dice_roll);

document.getElementById("reset").addEventListener("click", reset_fun);
function reset_fun() {
  window.location.reload();
}
document.getElementsByClassName(`player1`)[0].style.border = "2px solid green";
put_enemy();

put_portal();
create_profile();
function create_profile() {
  document
    .getElementsByClassName("profile-pic1")[0]
    .insertAdjacentHTML("beforeend", `<img src="${player1_data.pic}">`);
  document
    .getElementsByClassName("profile-name1")[0]
    .insertAdjacentHTML("beforeend", `${player1_data.name}`);
  document
    .getElementsByClassName("profile-pic2")[0]
    .insertAdjacentHTML("beforeend", `<img src="${player2_data.pic}">`);
  document
    .getElementsByClassName("profile-name2")[0]
    .insertAdjacentHTML("beforeend", `${player2_data.name}`);
  document
    .getElementsByClassName("profile-pic3")[0]
    .insertAdjacentHTML("beforeend", `<img src="${player3_data.pic}">`);
  document
    .getElementsByClassName("profile-name3")[0]
    .insertAdjacentHTML("beforeend", `${player3_data.name}`);
  document
    .getElementsByClassName("profile-pic4")[0]
    .insertAdjacentHTML("beforeend", `<img src="${player4_data.pic}">`);
  document
    .getElementsByClassName("profile-name4")[0]
    .insertAdjacentHTML("beforeend", `${player4_data.name}`);

  document.getElementsByClassName("player1")[0].style.filter =
    "grayscale(100%)";
  document.getElementsByClassName("player2")[0].style.filter =
    "grayscale(100%)";
  document.getElementsByClassName("player3")[0].style.filter =
    "grayscale(100%)";
  document.getElementsByClassName("player4")[0].style.filter =
    "grayscale(100%)";
  for (let i = 0; i < players.length; i++) {
    document.getElementsByClassName(`player${i + 1}`)[0].style.filter =
      "grayscale(1%)";
  }
}

var arr1 = arr1_generator();
var arr2 = arr2_generator();
var arr3 = arr3_generator();

function arr1_generator() {
  let arr = [];
  let loc1;
  loc1 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  let loc2;
  arr.push(loc1);
  loc2 = getRandomIntExcludingExistingNumbers(35, 1, arr);
  let loc3;
  arr.push(loc2);
  loc3 = getRandomIntExcludingExistingNumbers(95, 25, arr);
  let loc4;
  arr.push(loc3);
  loc4 = getRandomIntExcludingExistingNumbers(45, 25, arr);
  let loc5;
  arr.push(loc4);
  loc5 = getRandomIntExcludingExistingNumbers(70, 40, arr);
  let loc6;
  arr.push(loc5);
  loc6 = getRandomIntExcludingExistingNumbers(100, 65, arr);
  let loc7;
  arr.push(loc6);
  loc7 = getRandomIntExcludingExistingNumbers(35, 1, arr);
  let loc8;
  arr.push(loc7);
  loc8 = getRandomIntExcludingExistingNumbers(75, 60, arr);
  return [loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8];
}

function arr2_generator() {
  let arr = [...arr1];
  let loc1;
  loc1 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc2;
  arr.push(loc1);
  loc2 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc3;
  arr.push(loc2);
  loc3 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc4;
  arr.push(loc3);
  loc4 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc5;
  arr.push(loc4);
  loc5 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc6;
  arr.push(loc5);
  loc6 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc7;
  arr.push(loc6);
  loc7 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc8;
  arr.push(loc7);
  loc8 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc9;
  arr.push(loc8);
  loc9 = getRandomIntExcludingExistingNumbers(100, 1, arr);
  let loc10;
  arr.push(loc9);
  loc10 = getRandomIntExcludingExistingNumbers(100, 1, arr);

  return [loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9, loc10];
}
function arr3_generator() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (arr1.includes(i)) {
    } else if (arr2.includes(i)) {
    } else {
      arr.push(i);
    }
  }
  return arr;
}

var img1 = "gridimg1.png";
var img2 = "gridimg2.png";
var img3 = "gridimg3.png";
function put_grid_image() {
  for (let i = 0; i < arr1.length; i++) {
    document.getElementById(
      `grid${arr1[i]}`
    ).style.backgroundImage = `url("${img3}")`;
  }
  for (let i = 0; i < arr2.length; i++) {
    document.getElementById(
      `grid${arr2[i]}`
    ).style.backgroundImage = `url("${img2}")`;
  }
  for (let i = 0; i < arr3.length; i++) {
    document.getElementById(
      `grid${arr3[i]}`
    ).style.backgroundImage = `url("${img1}")`;
  }
}

put_grid_image();

function put_enemy() {
  let ultron1 = document.getElementById(`grid${enemy_loc[0]}`);
  ultron1.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron2 = document.getElementById(`grid${enemy_loc[1]}`);
  ultron2.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron3 = document.getElementById(`grid${enemy_loc[2]}`);
  ultron3.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse1 = document.getElementById(`grid${enemy_loc[3]}`);
  apocalypse1.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse2 = document.getElementById(`grid${enemy_loc[4]}`);
  apocalypse2.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse3 = document.getElementById(`grid${enemy_loc[5]}`);
  apocalypse3.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse4 = document.getElementById(`grid${enemy_loc[6]}`);
  apocalypse4.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki1 = document.getElementById(`grid${enemy_loc[7]}`);
  loki1.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki2 = document.getElementById(`grid${enemy_loc[8]}`);
  loki2.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
}

function put_portal() {
  let portal1 = document.getElementById(`grid${portal_loc[0]}`);
  portal1.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img" >`
  );

  let portal2 = document.getElementById(`grid${portal_loc[1]}`);
  portal2.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );

  let portal3 = document.getElementById(`grid${portal_loc[2]}`);
  portal3.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );

  let portal4 = document.getElementById(`grid${portal_loc[3]}`);
  portal4.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );

  let portal5 = document.getElementById(`grid${portal_loc[4]}`);
  portal5.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );
  let portal6 = document.getElementById(`grid${portal_loc[5]}`);
  portal6.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );
  let portal7 = document.getElementById(`grid${portal_loc[6]}`);
  portal7.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );
}

// function initial_players_data() {
//   active_player_count = 1;
//   time_sliding_window = [];
//   portal_storage = {
//     timestone: true,
//     spacestone: true,
//     powerstone: true,
//     realitystone: true,
//     soulstone: true,
//     memorystone: true
//   };
//   number = 6;
//   players = ["player1_data", "player2_data", "player3_data", "player4_data"];
//   player1_data = {
//     timestone: false,
//     spacestone: false,
//     powerstone: false,
//     realitystone: false,
//     soulstone: false,
//     memorystone: false,
//     position: 1,
//     isStones: false,
//     stonecount: 0,
//     ultronattack: 0,
//     memoryerase: 0,
//     realityeffect: 0
//   };
//   player2_data = {
//     timestone: false,
//     spacestone: false,
//     powerstone: false,
//     realitystone: false,
//     soulstone: false,
//     memorystone: false,
//     position: 1,
//     isStones: false,
//     stonecount: 0,
//     ultronattack: 0,
//     memoryerase: 0,
//     realityeffect: 0
//   };
//   player3_data = {
//     timestone: false,
//     spacestone: false,
//     powerstone: false,
//     realitystone: false,
//     soulstone: false,
//     memorystone: false,
//     position: 1,
//     isStones: false,
//     stonecount: 0,
//     ultronattack: 0,
//     memoryerase: 0,
//     realityeffect: 0
//   };
//   player4_data = {
//     timestone: false,
//     spacestone: false,
//     powerstone: false,
//     realitystone: false,
//     soulstone: false,
//     memorystone: false,
//     position: 1,
//     isStones: false,
//     stonecount: 0,
//     ultronattack: 0,
//     memoryerase: 0,
//     realityeffect: 0
//   };

//   active_player = player1_data;
// }

// initial_players_data();

function random() {
  return Math.floor(Math.random() * 95) + 5;
}

function portal_generator() {
  let arr = [1];
  console.log(arr);
  let loc1;
  loc1 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  let loc2;
  arr.push(loc1);
  loc2 = getRandomIntExcludingExistingNumbers(35, 15, arr);
  let loc3;
  arr.push(loc2);
  loc3 = getRandomIntExcludingExistingNumbers(55, 35, arr);
  let loc4;
  arr.push(loc3);
  loc4 = getRandomIntExcludingExistingNumbers(75, 55, arr);
  let loc5;
  arr.push(loc4);
  loc5 = getRandomIntExcludingExistingNumbers(95, 75, arr);
  let loc6;
  arr.push(loc5);
  loc6 = getRandomIntExcludingExistingNumbers(95, 75, arr);
  let loc7;
  arr.push(loc6);
  loc7 = getRandomIntExcludingExistingNumbers(10, 3, arr);
  return [loc1, loc2, loc3, loc4, loc5, loc6, loc7];
}

function enemy_generator() {
  let arr = [...portal_loc];
  console.log(arr);
  let loc1;
  loc1 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  let loc2;
  arr.push(loc1);
  loc2 = getRandomIntExcludingExistingNumbers(35, 15, arr);
  let loc3;
  arr.push(loc2);
  loc3 = getRandomIntExcludingExistingNumbers(95, 25, arr);
  let loc4;
  arr.push(loc3);
  loc4 = getRandomIntExcludingExistingNumbers(45, 25, arr);
  let loc5;
  arr.push(loc4);
  loc5 = getRandomIntExcludingExistingNumbers(70, 40, arr);
  let loc6;
  arr.push(loc5);
  loc6 = getRandomIntExcludingExistingNumbers(97, 65, arr);
  let loc7;
  arr.push(loc6);
  loc7 = getRandomIntExcludingExistingNumbers(99, 90, arr);
  let loc8;
  arr.push(loc7);
  loc8 = getRandomIntExcludingExistingNumbers(75, 60, arr);
  let loc9;
  arr.push(loc8);
  loc9 = getRandomIntExcludingExistingNumbers(89, 70, arr);
  return [loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9];
}

function reality_enemy_generator() {
  let arr = [];
  arr.push(
    player1_data.location,
    player2_data.location,
    player3_data.location,
    player4_data.location
  );
  console.log(arr);
  let loc1;
  loc1 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  arr.push(loc1);
  let loc2;
  loc2 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  arr.push(loc2);
  let loc3;
  loc3 = getRandomIntExcludingExistingNumbers(15, 35, arr);
  arr.push(loc3);
  let loc4;
  loc4 = getRandomIntExcludingExistingNumbers(40, 20, arr);
  arr.push(loc4);
  let loc5;
  loc5 = getRandomIntExcludingExistingNumbers(95, 45, arr);
  arr.push(loc5);
  let loc6;
  loc6 = getRandomIntExcludingExistingNumbers(65, 40, arr);
  arr.push(loc6);
  let loc7;
  loc7 = getRandomIntExcludingExistingNumbers(40, 25, arr);
  arr.push(loc7);
  let loc8;
  loc8 = getRandomIntExcludingExistingNumbers(55, 35, arr);
  arr.push(loc8);
  let loc9;
  loc9 = getRandomIntExcludingExistingNumbers(75, 45, arr);
  arr.push(loc9);
  let loc10;
  loc10 = getRandomIntExcludingExistingNumbers(95, 85, arr);
  arr.push(loc10);
  let loc11;
  loc11 = getRandomIntExcludingExistingNumbers(95, 85, arr);
  arr.push(loc11);
  let loc12;
  loc12 = getRandomIntExcludingExistingNumbers(90, 85, arr);
  arr.push(loc12);
  let loc13;
  loc13 = getRandomIntExcludingExistingNumbers(95, 80, arr);
  arr.push(loc13);
  let loc14;
  loc14 = getRandomIntExcludingExistingNumbers(80, 65, arr);
  arr.push(loc14);
  let loc15;
  loc15 = getRandomIntExcludingExistingNumbers(75, 40, arr);
  arr.push(loc15);
  let loc16;
  loc16 = getRandomIntExcludingExistingNumbers(95, 35, arr);
  arr.push(loc16);
  return [
    loc1,
    loc2,
    loc3,
    loc4,
    loc5,
    loc6,
    loc7,
    loc8,
    loc9,
    loc10,
    loc11,
    loc12,
    loc13,
    loc14,
    loc15,
    loc16
  ];
}

function put_reality_enemy() {
  let ultron1 = document.getElementById(`grid${enemy_loc[0]}`);
  ultron1.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron2 = document.getElementById(`grid${enemy_loc[1]}`);
  ultron2.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron3 = document.getElementById(`grid${enemy_loc[2]}`);
  ultron3.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron4 = document.getElementById(`grid${enemy_loc[3]}`);
  ultron4.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron5 = document.getElementById(`grid${enemy_loc[4]}`);
  ultron5.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron6 = document.getElementById(`grid${enemy_loc[5]}`);
  ultron6.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron7 = document.getElementById(`grid${enemy_loc[6]}`);
  ultron7.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse1 = document.getElementById(`grid${enemy_loc[7]}`);
  apocalypse1.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse2 = document.getElementById(`grid${enemy_loc[8]}`);
  apocalypse2.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse3 = document.getElementById(`grid${enemy_loc[9]}`);
  apocalypse3.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse4 = document.getElementById(`grid${enemy_loc[10]}`);
  apocalypse4.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse5 = document.getElementById(`grid${enemy_loc[11]}`);
  apocalypse5.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki1 = document.getElementById(`grid${enemy_loc[12]}`);
  loki1.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki2 = document.getElementById(`grid${enemy_loc[13]}`);
  loki2.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki3 = document.getElementById(`grid${enemy_loc[14]}`);
  loki3.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki4 = document.getElementById(`grid${enemy_loc[15]}`);
  loki4.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
}

function remove_portal() {
  let portal_arr = Array.from(document.getElementsByClassName("portal-img"));
  for (let i = 0; i < portal_arr.length; i++) {
    portal_arr[i].remove();
  }
}
function remove_enemy() {
  let enemy_arr = Array.from(document.getElementsByClassName("enemy-img"));

  for (let i = 0; i < enemy_arr.length; i++) {
    enemy_arr[i].remove();
  }
}

function getRandomInt(min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);

  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function getRandomIntExcludingExistingNumbers(min, max, excludeArrayNumbers) {
  let randomNumber;

  if (!Array.isArray(excludeArrayNumbers)) {
    randomNumber = getRandomInt(min, max);
    return randomNumber;
  }

  do {
    randomNumber = getRandomInt(min, max);
  } while ((excludeArrayNumbers || []).includes(randomNumber));

  return randomNumber;
}

function dice_roll() {
  number = Math.floor(Math.random() * 6) + 1;
  document.getElementsByClassName("dice-number")[0].innerHTML = number;

  deactive_dice();
  avail_options();
}

var portal_dialogue = `
  <div class="portal-dialogue">
        <div class="portal-container">
          <input label="T" type="radio" name="stone" value="time" />
          <input label="P" type="radio" name="stone" value="power" />
          <input label="Sp" type="radio" name="stone" value="space" />
          <input label="R" type="radio"  name="stone" value="reality" />
          <input label="So" type="radio"  name="stone" value="soul" />
          <input label="M" type="radio"  name="stone" value="memory" />
        </div>
        <button class="cnf-portal-btn">OK</button>
      </div>
  `;

var powers_dialogue = `
  <div class="avail-option-container">
        <div class="avail-name">Available Powers</div>
  
        <div class="avail-options">
          <div class="time-stone">
            <input
              label="T"
              type="radio"
              class="time"
              name="stone"
              value="time"
            />
            <input label="p1" type="radio" class="p1" name="tp" value="tp1" />
            <input label="p2" type="radio" class="p2" name="tp" value="tp2" />
            <input label="p3" type="radio" class="p3" name="tp" value="tp3" />
            <input label="p4" type="radio" class="p4" name="tp" value="tp4" />
          </div>
  
          <div class="memory-stone">
            <input
              label="M"
              type="radio"
              class="memory"
              name="stone"
              value="memory"
            />
            <input label="p1" type="radio" class="p1" name="mp" value="mp1" />
            <input label="p2" type="radio" class="p2" name="mp" value="mp2" />
            <input label="p3" type="radio" class="p3" name="mp" value="mp3" />
            <input label="p4" type="radio" class="p4" name="mp" value="mp4" />
          </div>
  
          <div class="reality-stone">
            <input
              label="R"
              type="radio"
              class="reality"
              name="stone"
              value="reality"
            />
            <input label="p1" type="radio" class="p1" name="rp" value="rp1" />
            <input label="p2" type="radio" class="p2" name="rp" value="rp2" />
            <input label="p3" type="radio" class="p3" name="rp" value="rp3" />
            <input label="p4" type="radio" class="p4" name="rp" value="rp4" />
          </div>
  
          <div class="space-stone">
            <input
              label="Sp"
              type="radio"
              class="space"
              name="stone"
              value="space"
            />
            <input label="p1" type="radio" class="p1" name="spp" value="spp1" />
            <input label="p2" type="radio" class="p2" name="spp" value="spp2" />
            <input label="p3" type="radio" class="p3" name="spp" value="spp3" />
            <input label="p4" type="radio" class="p4" name="spp" value="spp4" />
            <input label="+" type="radio" class="plus" name="dir" value="+" />
            <input label="-" type="radio" class="minus" name="dir" value="-" />
          </div>
  
          <div class="power-stone">
            <input
              label="P"
              type="radio"
              class="power"
              name="stone"
              value="power"
            />
            <input label="p1" type="radio" class="p1" name="pp" value="pp1" />
            <input label="p2" type="radio" class="p2" name="pp" value="pp2" />
            <input label="p3" type="radio" class="p3" name="pp" value="pp3" />
            <input label="p4" type="radio" class="p4" name="pp" value="pp4" />
          </div>
  
          <div class="soul-stone">
            <input
              label="So"
              type="radio"
              class="soul"
              name="stone"
              value="soul"
            />
            <input label="p1" type="radio" class="p1" name="sop" value="sop1" />
            <input label="p2" type="radio" class="p2" name="sop" value="sop2" />
            <input label="p3" type="radio" class="p3" name="sop" value="sop3" />
            <input label="p4" type="radio" class="p4" name="sop" value="sop4" />
          </div>
        </div>
  
        <div class="avail-confirm-move-container">
          <button class="avail-confirm-move">Yes</button>
          <button class="avail-deny-move">No</button>
        </div>
      </div>
  `;
var confirm_dialogue = `<img class="gif" src="https://media.tenor.com/MBldOpK_w6wAAAAC/emoji-smile.gif">`;

async function confirm_move() {
  // console.log("ok");
  let curr_player_on_ult_loc = false;
  if (active_player.ultronattack == 0) {
    await move_player();
  } else {
    if (number != 6) {
      curr_player_on_ult_loc = true;
      // if (active_player_count == 1) {
      //   player1_data.ultronattack--;
      // } else if (active_player_count == 2) {
      //   player2_data.ultronattack--;
      // } else if (active_player_count == 3) {
      //   player3_data.ultronattack--;
      // } else if (active_player_count == 4) {
      //   player4_data.ultronattack--;
      // }
      window[players[active_player_count - 1]].ultronattack--;
    } else {
      // if (active_player_count == 1) {
      //   player1_data.ultronattack = 0;
      // } else if (active_player_count == 2) {
      //   player2_data.ultronattack = 0;
      // } else if (active_player_count == 3) {
      //   player3_data.ultronattack = 0;
      // } else if (active_player_count == 4) {
      //   player4_data.ultronattack = 0;
      // }
      window[players[active_player_count - 1]].ultronattack = 0;

      await move_player();
    }
  }

  await enemy_effect(curr_player_on_ult_loc);
  let nextindex = active_player.position;
  if (
    nextindex == portal_loc[0] ||
    nextindex == portal_loc[1] ||
    nextindex == portal_loc[2] ||
    nextindex == portal_loc[3] ||
    nextindex == portal_loc[4] ||
    nextindex == portal_loc[5] ||
    nextindex == portal_loc[6]
  ) {
    if (check_portal_storage()) {
      check_portal();
    } else {
      move_frame();
    }
  } else {
    move_frame();
  }
}

function move_frame() {
  document.getElementsByClassName(
    `player${active_player_count}`
  )[0].style.border = "2px solid black";
  document.getElementsByClassName(
    `player${(active_player_count % no_of_players) + 1}`
  )[0].style.border = "2px solid green";

  active_player_count = (active_player_count % no_of_players) + 1;
  // if (active_player_count == 1) {
  //   active_player = player1_data;
  // } else if (active_player_count == 2) {
  //   active_player = player2_data;
  // } else if (active_player_count == 3) {
  //   active_player = player3_data;
  // } else if (active_player_count == 4) {
  //   active_player = player4_data;
  // }
  active_player = window[players[active_player_count - 1]];
  if (active_player_count == 1) {
    time_sliding_window.push({
      player1: player1_data,
      player2: player2_data,
      player3: player3_data,
      player4: player4_data
    });
    if (time_sliding_window.length > 4) {
      time_sliding_window.shift();
    }
    console.log(time_sliding_window);
  }
  let flag1 = true;
  while (1) {
    if (active_player.memoryerase != 0) {
      active_player.memoryerase--;
      flag1 = false;
      move_frame();
    } else {
      break;
    }
  }

  if (flag1) {
    let reality_portal_loc = [-100, -100, -100, -100, -100, -100, -100];

    if (active_player.realityeffect != 0) {
      remove_portal();
      remove_enemy();
      portal_loc = reality_portal_loc;
      enemy_loc = reality_enemy_loc;
      put_reality_enemy();
      active_player.realityeffect--;
    } else {
      if (portal_loc != actual_portal_loc) {
        remove_enemy();
        remove_portal();
        portal_loc = actual_portal_loc;
        enemy_loc = actual_enemy_loc;
        put_portal();
        put_enemy();
      }
    }
    active_dice();
    update_stone_info();
  }
}

function check_portal() {
  console.log("check portal");
  document.getElementsByClassName(
    "play-box-lower"
  )[0].innerHTML = `${portal_dialogue}`;
  document
    .getElementsByClassName("cnf-portal-btn")[0]
    .addEventListener("click", portal_cnf);

  let portal = document.getElementsByName("stone");
  let arr = [];

  if (portal_storage.timestone) {
    arr.push("time");
  }
  if (portal_storage.spacestone) {
    arr.push("space");
  }
  if (portal_storage.powerstone) {
    arr.push("power");
  }
  if (portal_storage.realitystone) {
    arr.push("reality");
  }
  if (portal_storage.soulstone) {
    arr.push("soul");
  }
  if (portal_storage.memorystone) {
    arr.push("memory");
  }

  for (var i = 0; i < portal.length; i++) {
    portal[i].addEventListener("change", check);
    portal[i].disabled = true;
  }
  for (var i = 0; i < portal.length; i++) {
    if (arr.includes(portal[i].value)) {
      portal[i].style.backgroundColor = "white";
      portal[i].disabled = false;
    }
  }
  function check(e) {
    if (this.checked) {
      console.log(this.value);
      let cnf_btn = document.getElementsByClassName("cnf-portal-btn")[0];
      cnf_btn.style.visibility = "visible";
    }
  }

  function portal_cnf() {
    let stonevalue;
    for (var i = 0; i < portal.length; i++) {
      if (portal[i].checked) {
        stonevalue = portal[i].value;
      }
    }

    if (stonevalue == "time") {
      portal_storage.timestone = false;
      active_player.timestone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "space") {
      portal_storage.spacestone = false;
      active_player.spacestone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "power") {
      portal_storage.powerstone = false;
      active_player.powerstone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "reality") {
      portal_storage.realitystone = false;
      active_player.realitystone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "soul") {
      portal_storage.soulstone = false;
      active_player.soulstone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "memory") {
      portal_storage.memorystone = false;
      active_player.memorystone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    console.log(portal_storage);
    console.log(active_player);

    document.getElementsByClassName(
      "play-box-lower"
    )[0].innerHTML = `${confirm_dialogue}`;

    move_frame();
  }
}

function check_enemy() {
  let nextindex = active_player.position;
  for (let i = 0; i < enemy_loc.length; i++) {
    if (nextindex == enemy_loc[i]) {
      return true;
    }
  }
  return false;
}

async function enemy_effect(curr_player_on_ult_loc) {
  let nextindex = active_player.position;
  if (check_enemy()) {
    if (enemy_loc == actual_enemy_loc) {
      if (
        nextindex == enemy_loc[3] ||
        nextindex == enemy_loc[4] ||
        nextindex == enemy_loc[5] ||
        nextindex == enemy_loc[6]
      ) {
        console.log("apocalypse");
        await apocalypse_effect();
        enemy_effect(curr_player_on_ult_loc);
      }
      if (active_player.ultronattack == 0 && curr_player_on_ult_loc == false) {
        if (
          nextindex == enemy_loc[0] ||
          nextindex == enemy_loc[1] ||
          nextindex == enemy_loc[2]
        ) {
          console.log("Ultron");
          // if (active_player == player1_data) {
          //   player1_data.ultronattack = 3;
          // } else if (active_player == player2_data) {
          //   player2_data.ultronattack = 3;
          // } else if (active_player == player3_data) {
          //   player3_data.ultronattack = 3;
          // } else if (active_player == player4_data) {
          //   player4_data.ultronattack = 3;
          // }
          active_player.ultronattack = 3;
        }
      }

      if (nextindex == enemy_loc[7] || nextindex == enemy_loc[8]) {
        console.log("Loki");
        loki_effect();
      }
    } else {
      if (
        nextindex == enemy_loc[7] ||
        nextindex == enemy_loc[8] ||
        nextindex == enemy_loc[9] ||
        nextindex == enemy_loc[10] ||
        nextindex == enemy_loc[11]
      ) {
        console.log("apocalypse");
        await apocalypse_effect();
        enemy_effect(curr_player_on_ult_loc);
      }
      if (active_player.ultronattack == 0 && curr_player_on_ult_loc == false) {
        if (
          nextindex == enemy_loc[0] ||
          nextindex == enemy_loc[1] ||
          nextindex == enemy_loc[2] ||
          nextindex == enemy_loc[3] ||
          nextindex == enemy_loc[4] ||
          nextindex == enemy_loc[5] ||
          nextindex == enemy_loc[6]
        ) {
          console.log("Ultron");
          // if (active_player == player1_data) {
          //   player1_data.ultronattack = 3;
          // } else if (active_player == player2_data) {
          //   player2_data.ultronattack = 3;
          // } else if (active_player == player3_data) {
          //   player3_data.ultronattack = 3;
          // } else if (active_player == player4_data) {
          //   player4_data.ultronattack = 3;
          // }
          active_player.ultronattack = 3;
        }
      }

      if (
        nextindex == enemy_loc[12] ||
        nextindex == enemy_loc[13] ||
        nextindex == enemy_loc[14] ||
        nextindex == enemy_loc[15]
      ) {
        console.log("Loki");
        loki_effect();
      }
    }
  }
}

function loki_effect() {
  if (active_player.isStones) {
    if (active_player.timestone) {
      portal_storage.timestone = true;
    }
    if (active_player.spacestone) {
      portal_storage.spacestone = true;
    }
    if (active_player.powerstone) {
      portal_storage.powerstone = true;
    }
    if (active_player.realitystone) {
      portal_storage.realitystone = true;
    }
    if (active_player.soulstone) {
      portal_storage.soulstone = true;
    }
    if (active_player.memorystone) {
      portal_storage.memorystone = true;
    }
    // if (active_player == player1_data) {
    //   player1_data.timestone = false;
    //   player1_data.spacestone = false;
    //   player1_data.powerstone = false;
    //   player1_data.realitystone = false;
    //   player1_data.soulstone = false;
    //   player1_data.memorystone = false;
    //   player1_data.stonecount = 0;
    //   player1_data.isStones = false;
    // } else if (active_player == player2_data) {
    //   player2_data.timestone = false;
    //   player2_data.spacestone = false;
    //   player2_data.powerstone = false;
    //   player2_data.realitystone = false;
    //   player2_data.soulstone = false;
    //   player2_data.memorystone = false;
    //   player2_data.stonecount = 0;
    //   player2_data.isStones = false;
    // } else if (active_player == player3_data) {
    //   player3_data.timestone = false;
    //   player3_data.spacestone = false;
    //   player3_data.powerstone = false;
    //   player3_data.realitystone = false;
    //   player3_data.soulstone = false;
    //   player3_data.memorystone = false;
    //   player3_data.stonecount = 0;
    //   player3_data.isStones = false;
    // } else if (active_player == player4_data) {
    //   player4_data.timestone = false;
    //   player4_data.spacestone = false;
    //   player4_data.powerstone = false;
    //   player4_data.realitystone = false;
    //   player4_data.soulstone = false;
    //   player4_data.memorystone = false;
    //   player4_data.stonecount = 0;
    //   player4_data.isStones = false;
    // }
    active_player.timestone = false;
    active_player.spacestone = false;
    active_player.powerstone = false;
    active_player.realitystone = false;
    active_player.soulstone = false;
    active_player.memorystone = false;
    active_player.stonecount = 0;
    active_player.isStones = false;
  }
}

async function apocalypse_effect() {
  //Animation Logic();
  return new Promise(async (resolve, reject) => {

    source = window[players[active_player_count - 1]].position;
    destination = window[players[active_player_count - 1]].position - 20;
    path_calculator(source, destination);
    if (active_player_count == 1) {
      await Iron_move();
    } else if (active_player_count == 2) {
      await Thor_move();
    } else if (active_player_count == 3) {
      await America_move();
    } else if (active_player_count == 4) {
      await doctor_portal_move();
    }

    window[players[active_player_count - 1]].position = destination;
    resolve(true);
  });


  //Animatoin Logic();

  // let index = active_player.position;
  // let currgrid = document.getElementById(`grid${index}`);
  // let notes = null;
  // for (let i = 0; i < currgrid.childNodes.length; i++) {
  //   if (currgrid.childNodes[i].className == active_player.player_no) {
  //     // console.log(currgrid.childNodes[i]);
  //     notes = currgrid.childNodes[i];
  //     currgrid.removeChild(notes);
  //     break;
  //   }
  // }
  // // let img_ele = ` <img src="${active_player.pic}" alt="oops" class="${active_player.player_no}" width="30px" height="30px">`;

  // let gridno;
  // gridno = active_player.position - 20;
  // let selgrid = document.getElementById(`grid${gridno}`);
  // // console.log(selgrid);
  // selgrid.insertAdjacentElement("beforeend", notes);
  // active_player.position = gridno;
  // console.log("whooo");
  // // console.log(player1_data);

  // if (active_player == player1_data) {
  //   let index = player1_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "1") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }
  //   let gridno;
  //   gridno = player1_data.position - 20;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   // console.log(selgrid);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
  //   );
  //   player1_data.position = gridno;
  //   // console.log(player1_data);
  // }
  // if (active_player == player2_data) {
  //   let index = player2_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "2") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player2_data.position - 20;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
  //   );
  //   player2_data.position = gridno;
  // }
  // if (active_player == player3_data) {
  //   let index = player3_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "3") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player3_data.position - 20;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
  //   );
  //   player3_data.position = gridno;
  // }
  // if (active_player == player4_data) {
  //   let index = player4_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "4") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player4_data.position - 20;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
  //   );
  //   player4_data.position = gridno;
  // }
}

function Animation_move_player() {
  source = window[players[active_player_count - 1]].position;
  destination = window[players[active_player_count - 1]].position + number;
  path_calculator(source, destination);
  if (active_player_count == 1) {
    Iron_move();
  } else if (active_player_count == 2) {
    Thor_move();
  } else if (active_player_count == 3) {
    America_move();
  } else if (active_player_count == 4) {
    doctor_portal_move();
  }

  window[players[active_player_count - 1]].position = destination;
}

async function space_stone_effect(player_index, dir) {
  return new Promise(async (resolve, reject) => {
    if (dir == "+") {
      source = window[players[player_index]].position;
      destination = window[players[player_index]].position + number;
    }
    else {
      source = window[players[player_index]].position;
      destination = window[players[player_index]].position - number;
    }
    path_calculator(source, destination);
    let current_player = active_player;
    let current_player_count = active_player_count;
    let attacked_player;
    let attacked_player_count;

    if (player_index == 0) {
      await Iron_move();
      attacked_player = player1_data;
      attacked_player_count = 1;
    } else if (player_index == 1) {
      await Thor_move();
      attacked_player = player2_data;
      attacked_player_count = 2;
    } else if (player_index == 2) {
      await America_move();
      attacked_player = player3_data;
      attacked_player_count = 3;
    } else if (player_index == 3) {
      await doctor_portal_move();
      attacked_player = player4_data;
      attacked_player_count = 4;
    }
    active_player = attacked_player;
    active_player_count = attacked_player_count;
    window[players[player_index]].position = destination;

    await enemy_effect(false);
    let nextindex = active_player.position;
    if (
      nextindex == portal_loc[0] ||
      nextindex == portal_loc[1] ||
      nextindex == portal_loc[2] ||
      nextindex == portal_loc[3] ||
      nextindex == portal_loc[4] ||
      nextindex == portal_loc[5] ||
      nextindex == portal_loc[6]
    ) {
      if (check_portal_storage()) {
        console.log("check portal");
        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${portal_dialogue}`;
        document
          .getElementsByClassName("cnf-portal-btn")[0]
          .addEventListener("click", portal_cnf);

        let portal = document.getElementsByName("stone");
        let arr = [];

        if (portal_storage.timestone) {
          arr.push("time");
        }
        if (portal_storage.spacestone) {
          arr.push("space");
        }
        if (portal_storage.powerstone) {
          arr.push("power");
        }
        if (portal_storage.realitystone) {
          arr.push("reality");
        }
        if (portal_storage.soulstone) {
          arr.push("soul");
        }
        if (portal_storage.memorystone) {
          arr.push("memory");
        }

        for (var i = 0; i < portal.length; i++) {
          portal[i].addEventListener("change", check);
          portal[i].disabled = true;
        }
        for (var i = 0; i < portal.length; i++) {
          if (arr.includes(portal[i].value)) {
            portal[i].style.backgroundColor = "white";
            portal[i].disabled = false;
          }
        }
        function check(e) {
          if (this.checked) {
            console.log(this.value);
            let cnf_btn = document.getElementsByClassName("cnf-portal-btn")[0];
            cnf_btn.style.visibility = "visible";
          }
        }

        function portal_cnf() {
          let stonevalue;
          for (var i = 0; i < portal.length; i++) {
            if (portal[i].checked) {
              stonevalue = portal[i].value;
            }
          }

          if (stonevalue == "time") {
            portal_storage.timestone = false;
            active_player.timestone = true;
            active_player.isStones = true;
            active_player.stonecount++;
          }
          if (stonevalue == "space") {
            portal_storage.spacestone = false;
            active_player.spacestone = true;
            active_player.isStones = true;
            active_player.stonecount++;
          }
          if (stonevalue == "power") {
            portal_storage.powerstone = false;
            active_player.powerstone = true;
            active_player.isStones = true;
            active_player.stonecount++;
          }
          if (stonevalue == "reality") {
            portal_storage.realitystone = false;
            active_player.realitystone = true;
            active_player.isStones = true;
            active_player.stonecount++;
          }
          if (stonevalue == "soul") {
            portal_storage.soulstone = false;
            active_player.soulstone = true;
            active_player.isStones = true;
            active_player.stonecount++;
          }
          if (stonevalue == "memory") {
            portal_storage.memorystone = false;
            active_player.memorystone = true;
            active_player.isStones = true;
            active_player.stonecount++;
          }
          console.log(portal_storage);
          console.log(active_player);

          document.getElementsByClassName(
            "play-box-lower"
          )[0].innerHTML = `${confirm_dialogue}`;
          active_player = current_player;
          active_player_count = current_player_count;
          resolve(true);
        }
      }
      else {
        active_player = current_player;
        active_player_count = current_player_count;
        resolve(true);
      }
    }
    else {
      active_player = current_player;
      active_player_count = current_player_count;
      resolve(true);
    }

  });
}





async function move_player() {
  // let index = window[players[active_player_count - 1]].position;
  // let currgrid = document.getElementById(`grid${index}`);
  // let notes = null;
  // for (let i = 0; i < currgrid.childNodes.length; i++) {
  //   if (
  //     currgrid.childNodes[i].className ==
  //     window[players[active_player_count - 1]].player_no
  //   ) {
  //     // console.log(currgrid.childNodes[i]);
  //     notes = currgrid.childNodes[i];
  //     currgrid.removeChild(notes);
  //     break;
  //   }
  // }
  // let gridno;
  // gridno = window[players[active_player_count - 1]].position + number;
  // let selgrid = document.getElementById(`grid${gridno}`);
  // // console.log(selgrid);
  // selgrid.insertAdjacentElement("beforeend", notes);

  //animation logic
  return new Promise(async (resolve, reject) => {
    source = window[players[active_player_count - 1]].position;
    destination = window[players[active_player_count - 1]].position + number;
    path_calculator(source, destination);
    if (active_player_count == 1) {
      await Iron_move();
    } else if (active_player_count == 2) {
      await Thor_move();
    } else if (active_player_count == 3) {
      await America_move();
    } else if (active_player_count == 4) {
      await doctor_portal_move();
    }

    window[players[active_player_count - 1]].position = destination;
    resolve(true);
  });


  //animation logic

  // console.log(player1_data);

  // if (active_player_count == 1) {
  //   let index = player1_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "1") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }
  //   let gridno;
  //   gridno = player1_data.position + number;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   // console.log(selgrid);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
  //   );
  //   player1_data.position = gridno;
  //   // console.log(player1_data);
  // }
  // if (active_player_count == 2) {
  //   let index = player2_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "2") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player2_data.position + number;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
  //   );
  //   player2_data.position = gridno;
  // }
  // if (active_player_count == 3) {
  //   let index = player3_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "3") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player3_data.position + number;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
  //   );
  //   player3_data.position = gridno;
  // }
  // if (active_player_count == 4) {
  //   let index = player4_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "4") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player4_data.position + number;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
  //   );
  //   player4_data.position = gridno;
  // }
}

function update_stone_info() {
  for (let i = 0; i < players.length; i++) {
    if (window[players[i]].timestone == true) {
      document.getElementsByClassName(
        `stones${i + 1}1`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}1`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].powerstone == true) {
      document.getElementsByClassName(
        `stones${i + 1}2`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}2`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].spacestone == true) {
      document.getElementsByClassName(
        `stones${i + 1}3`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}3`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].realitystone == true) {
      document.getElementsByClassName(
        `stones${i + 1}4`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}4`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].soulstone == true) {
      document.getElementsByClassName(
        `stones${i + 1}5`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}5`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].memorystone == true) {
      document.getElementsByClassName(
        `stones${i + 1}6`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}6`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
  }

  // if (player1_data.timestone == true) {
  //   document.getElementsByClassName("stones11")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones11")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.powerstone == true) {
  //   document.getElementsByClassName("stones12")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones12")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.spacestone == true) {
  //   document.getElementsByClassName("stones13")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones13")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.realitystone == true) {
  //   document.getElementsByClassName("stones14")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones14")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.soulstone == true) {
  //   document.getElementsByClassName("stones15")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones15")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.memorystone == true) {
  //   document.getElementsByClassName("stones16")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones16")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }

  // if (player2_data.timestone == true) {
  //   document.getElementsByClassName("stones21")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones21")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.powerstone == true) {
  //   document.getElementsByClassName("stones22")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones22")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.spacestone == true) {
  //   document.getElementsByClassName("stones23")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones23")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.realitystone == true) {
  //   document.getElementsByClassName("stones24")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones24")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.soulstone == true) {
  //   document.getElementsByClassName("stones25")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones25")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.memorystone == true) {
  //   document.getElementsByClassName("stones26")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones26")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }

  // if (player3_data.timestone == true) {
  //   document.getElementsByClassName("stones31")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones31")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.powerstone == true) {
  //   document.getElementsByClassName("stones32")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones32")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.spacestone == true) {
  //   document.getElementsByClassName("stones33")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones33")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.realitystone == true) {
  //   document.getElementsByClassName("stones34")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones34")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.soulstone == true) {
  //   document.getElementsByClassName("stones35")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones35")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.memorystone == true) {
  //   document.getElementsByClassName("stones36")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones36")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }

  // if (player4_data.timestone == true) {
  //   document.getElementsByClassName("stones41")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones41")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.powerstone == true) {
  //   document.getElementsByClassName("stones42")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones42")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.spacestone == true) {
  //   document.getElementsByClassName("stones43")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones43")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.realitystone == true) {
  //   document.getElementsByClassName("stones44")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones44")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.soulstone == true) {
  //   document.getElementsByClassName("stones45")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones45")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.memorystone == true) {
  //   document.getElementsByClassName("stones46")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones46")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
}

function active_avail_confirm() {
  document
    .getElementsByClassName("avail-confirm-move")[0]
    .addEventListener("click", avail_confirm_move);
}
function deactive_avail_confirm() {
  document
    .getElementsByClassName("avail-confirm-move")[0]
    .addEventListener("click", avail_confirm_move);
}

function active_avail_deny() {
  document
    .getElementsByClassName("avail-deny-move")[0]
    .addEventListener("click", avail_deny_move);
}

function deactive_avail_deny() {
  document
    .getElementsByClassName("avail-deny-move")[0]
    .removeEventListener("click", avail_deny_move);
}

function avail_deny_move() {
  deactive_avail_deny();
  document.getElementsByClassName(
    "play-box-lower"
  )[0].innerHTML = `${confirm_dialogue}`;
  confirm_move();
}

function check_portal_storage() {
  if (
    portal_storage.timestone == true ||
    portal_storage.spacestone == true ||
    portal_storage.powerstone == true ||
    portal_storage.realitystone == true ||
    portal_storage.soulstone == true ||
    portal_storage.memorystone == true
  ) {
    return true;
  } else {
    return false;
  }
}

function avail_confirm_move() {
  console.log("nothing");
  // document.getElementsByClassName(
  //   "play-box-lower"
  // )[0].innerHTML = `${confirm_dialogue}`;
  // deactive_confirm();
  // move_player();
  // let nextindex = active_player.position;
  // if (
  //   nextindex == portal_loc[0] ||
  //   nextindex == portal_loc[1] ||
  //   nextindex == portal_loc[2] ||
  //   nextindex == portal_loc[3] ||
  //   nextindex == portal_loc[4]
  // ) {
  //   check_portal();
  // } else {
  //   move_frame();
  // }

  // active_dice();
}

function active_dice() {
  document
    .getElementsByClassName("dice")[0]
    .addEventListener("click", dice_roll);
  console.log("acive-dice-roll");
}
function deactive_dice() {
  document
    .getElementsByClassName("dice")[0]
    .removeEventListener("click", dice_roll);
}

var avail_powers = [
  { timestone: false },
  { spacestone: false },
  { powerstone: false },
  { realitystone: false },
  { soulstone: false },
  { memorystone: false },
  { isStones: false }
];
var used_power = [{ stonename: null }, { playername: null }];

async function avail_options() {
  // console.log(active_player);

  if (isaavailoption()) {
    console.log("aviloption");
    document.getElementsByClassName(
      "play-box-lower"
    )[0].innerHTML = `${powers_dialogue}`;

    let portal_arr = [];
    // let time_arr = ["tp1", "tp2", "tp3", "tp4"];
    let memory_arr = [];
    // let reality_arr = ["rp1", "rp2", "rp3", "rp4"];
    let space_arr = [];
    // let power_arr = ["pp1", "pp2", "pp3", "pp4"];
    let soul_arr = [];

    if (active_player.timestone) {
      portal_arr.push("time");
    }
    if (active_player.spacestone) {
      for (let i = 0; i < players.length; i++) {
        space_arr.push(`spp${i + 1}`);
      }
      portal_arr.push("space");
    }
    if (active_player.powerstone) {
      let nextindex = active_player.position + number;
      if (
        nextindex == enemy_loc[0] ||
        nextindex == enemy_loc[1] ||
        nextindex == enemy_loc[2] ||
        nextindex == enemy_loc[3] ||
        nextindex == enemy_loc[4] ||
        nextindex == enemy_loc[5] ||
        nextindex == enemy_loc[6] ||
        nextindex == enemy_loc[7] ||
        nextindex == enemy_loc[8]
      ) {
        portal_arr.push("power");
      }
    }
    if (active_player.realitystone) {
      portal_arr.push("reality");
    }
    if (active_player.soulstone) {
      let flag = false;
      console.log("has soul stone");
      for (let i = 0; i < players.length; i++) {
        if (active_player != window[players[i]]) {
          if (
            window[players[i]].timestone ||
            window[players[i]].spacestone ||
            window[players[i]].powerstone ||
            window[players[i]].realitystone ||
            window[players[i]].memorystone
          ) {
            flag = true;
            soul_arr.push(`sop${i + 1}`);
            // console.log("Exchange stone with p1");
          }
        }
      }
      if (flag) {
        portal_arr.push("soul");
      }

      // if (active_player != player1_data) {
      //   if (
      //     player1_data.timestone ||
      //     player1_data.spacestone ||
      //     player1_data.powerstone ||
      //     player1_data.realitystone ||
      //     player1_data.memorystone
      //   ) {
      //     flag = true;
      //     soul_arr.push("sop1");
      //     console.log("Exchange stone with p1");
      //   }
      // }

      // if (active_player != player2_data) {
      //   if (
      //     player2_data.timestone ||
      //     player2_data.spacestone ||
      //     player2_data.powerstone ||
      //     player2_data.realitystone ||
      //     player2_data.memorystone
      //   ) {
      //     flag = true;
      //     soul_arr.push("sop2");
      //     console.log("Exchange stone with p2");
      //   }
      // }

      // if (active_player != player3_data) {
      //   if (
      //     player3_data.timestone ||
      //     player3_data.spacestone ||
      //     player3_data.powerstone ||
      //     player3_data.realitystone ||
      //     player3_data.memorystone
      //   ) {
      //     flag = true;
      //     soul_arr.push("sop3");
      //     console.log("Exchange stone with p3");
      //   }
      // }

      // if (active_player != player4_data) {
      //   if (
      //     player4_data.timestone ||
      //     player4_data.spacestone ||
      //     player4_data.powerstone ||
      //     player4_data.realitystone ||
      //     player4_data.memorystone
      //   ) {
      //     flag = true;
      //     soul_arr.push("sop4");
      //     console.log("Exchange stone with p4");
      //   }
      // }
      // if (flag) {
      //   portal_arr.push("soul");
      // }
    }

    if (active_player.memorystone) {
      let flag = false;
      for (let i = 0; i < players.length; i++) {
        if (active_player != window[players[i]]) {
          flag = true;
          memory_arr.push(`mp${i + 1}`);
        }
      }
      if (flag) {
        portal_arr.push("memory");
      }

      // if (active_player != player1_data) {
      //   flag = true;
      //   memory_arr.push("mp1");
      // }

      // if (active_player != player2_data) {
      //   flag = true;
      //   memory_arr.push("mp2");
      // }

      // if (active_player != player3_data) {
      //   flag = true;
      //   memory_arr.push("mp3");
      // }

      // if (active_player != player4_data) {
      //   flag = true;
      //   memory_arr.push("mp4");
      // }
      // if (flag) {
      //   portal_arr.push("memory");
      // }
    }

    let avail_option_input = document.querySelectorAll(".avail-options input");
    let portal = document.getElementsByName("stone");
    let time_players = document.getElementsByName("tp");
    let memory_players = document.getElementsByName("mp");
    let reality_players = document.getElementsByName("rp");
    let space_players = document.getElementsByName("spp");
    let power_players = document.getElementsByName("pp");
    let soul_players = document.getElementsByName("sop");

    for (var i = 0; i < portal.length; i++) {
      portal[i].addEventListener("change", check);
      portal[i].disabled = true;
    }
    for (var i = 0; i < portal.length; i++) {
      if (portal_arr.includes(portal[i].value)) {
        portal[i].style.backgroundColor = "white";
        portal[i].disabled = false;
      }
    }
    for (var i = 0; i < avail_option_input.length; i++) {
      avail_option_input[i].addEventListener(
        "change",
        avail_option_input_check
      );
    }

    for (var i = 0; i < time_players.length; i++) {
      time_players[i].addEventListener("change", time_check);
      time_players[i].disabled = true;
    }
    function time_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < memory_players.length; i++) {
      memory_players[i].addEventListener("change", memory_check);
      memory_players[i].disabled = true;
    }

    function memory_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < reality_players.length; i++) {
      reality_players[i].addEventListener("change", reality_check);
      reality_players[i].disabled = true;
    }
    function reality_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < space_players.length; i++) {
      space_players[i].addEventListener("change", space_check);
      space_players[i].disabled = true;
    }

    function space_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < power_players.length; i++) {
      power_players[i].addEventListener("change", power_check);
      power_players[i].disabled = true;
    }

    function power_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < soul_players.length; i++) {
      soul_players[i].addEventListener("change", soul_check);
      soul_players[i].disabled = true;
    }

    function soul_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    let space_dir = document.getElementsByName("dir");
    for (var i = 0; i < space_dir.length; i++) {
      space_dir[i].addEventListener("change", space_dir_check);
      space_dir[i].disabled = true;
    }
    function space_dir_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    function check(e) {
      if (this.checked) {
        console.log(this.value);

        for (var i = 0; i < time_players.length; i++) {
          time_players[i].disabled = true;
          time_players[i].checked = false;
          time_players[i].style.color = "#bdbdbdbd";
          time_players[i].style.backgroundColor = "#454857";
          time_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < memory_players.length; i++) {
          memory_players[i].disabled = true;
          memory_players[i].checked = false;
          memory_players[i].style.color = "#bdbdbdbd";
          memory_players[i].style.backgroundColor = "#454857";
          memory_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < reality_players.length; i++) {
          reality_players[i].disabled = true;
          reality_players[i].checked = false;
          reality_players[i].style.color = "#bdbdbdbd";
          reality_players[i].style.backgroundColor = "#454857";
          reality_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < space_players.length; i++) {
          space_players[i].disabled = true;
          space_players[i].checked = false;
          space_players[i].style.color = "#bdbdbdbd";
          space_players[i].style.backgroundColor = "#454857";
          space_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < power_players.length; i++) {
          power_players[i].disabled = true;
          power_players[i].checked = false;
          power_players[i].style.color = "#bdbdbdbd";
          power_players[i].style.backgroundColor = "#454857";
          power_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < soul_players.length; i++) {
          soul_players[i].disabled = true;
          soul_players[i].checked = false;
          soul_players[i].style.color = "#bdbdbdbd";
          soul_players[i].style.backgroundColor = "#454857";
          soul_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < space_dir.length; i++) {
          space_dir[i].disabled = true;
          space_dir[i].checked = false;
          space_dir[i].style.color = "#bdbdbdbd";
          space_dir[i].style.backgroundColor = "#454857";
          space_dir[i].style.backgroundImage = "none";
        }

        if (this.value == "time") {
          console.log(this.value);

          // for (var i = 0; i < time_players.length; i++) {
          //     if (time_arr.includes(time_players[i].value)) {
          //         time_players[i].style.backgroundColor = "white";
          //         time_players[i].disabled = false;
          //     }
          // }
        }

        if (this.value == "memory") {
          for (var i = 0; i < memory_players.length; i++) {
            if (memory_arr.includes(memory_players[i].value)) {
              memory_players[i].style.backgroundColor = "white";
              memory_players[i].disabled = false;
            }
          }
        }

        if (this.value == "reality") {
          // for (var i = 0; i < reality_players.length; i++) {
          //     if (reality_arr.includes(reality_players[i].value)) {
          //         reality_players[i].style.backgroundColor = "white";
          //         reality_players[i].disabled = false;
          //     }
          // }
        }

        if (this.value == "space") {
          for (var i = 0; i < space_players.length; i++) {
            if (space_arr.includes(space_players[i].value)) {
              space_players[i].style.backgroundColor = "white";
              space_players[i].disabled = false;
            }
          }
          for (var i = 0; i < space_dir.length; i++) {
            space_dir[i].style.backgroundColor = "white";
            space_dir[i].disabled = false;
          }
        }

        if (this.value == "power") {
          // for (var i = 0; i < power_players.length; i++) {
          //     if (power_arr.includes(power_players[i].value)) {
          //         power_players[i].style.backgroundColor = "white";
          //         power_players[i].disabled = false;
          //     }
          // }
        }

        if (this.value == "soul") {
          for (var i = 0; i < soul_players.length; i++) {
            if (soul_arr.includes(soul_players[i].value)) {
              soul_players[i].style.backgroundColor = "white";
              soul_players[i].disabled = false;
            }
          }
        }
      }
    }

    function avail_option_input_check(e) {
      let selected_power = {
        stone: "null",
        player: "null",
        direction: "null",
        exchange_stone1: "null",
        exchange_stone2: "null"
      };
      for (var i = 0; i < avail_option_input.length; i++) {
        if (avail_option_input[i].checked) {
          if (avail_option_input[i].name == "stone") {
            selected_power.stone = avail_option_input[i].value;
          } else if (
            avail_option_input[i].name == "tp" ||
            avail_option_input[i].name == "mp" ||
            avail_option_input[i].name == "rp" ||
            avail_option_input[i].name == "spp" ||
            avail_option_input[i].name == "pp" ||
            avail_option_input[i].name == "sop"
          ) {
            selected_power.player = avail_option_input[i].value;
          } else if (avail_option_input[i].name == "dir") {
            selected_power.direction = avail_option_input[i].value;
          }
        }
      }
      if (
        selected_power.stone == "time" ||
        selected_power.stone == "reality" ||
        selected_power.stone == "power"
      ) {
        let avail_cnf_btn = document.getElementsByClassName(
          "avail-confirm-move"
        )[0];
        avail_cnf_btn.style.visibility = "visible";
      } else if (
        selected_power.stone == "space" &&
        selected_power.player != "null" &&
        selected_power.direction != "null"
      ) {
        let avail_cnf_btn = document.getElementsByClassName(
          "avail-confirm-move"
        )[0];
        avail_cnf_btn.style.visibility = "visible";
      } else if (
        (selected_power.stone == "memory" && selected_power.player != "null") ||
        (selected_power.stone == "soul" && selected_power.player != "null")
      ) {
        let avail_cnf_btn = document.getElementsByClassName(
          "avail-confirm-move"
        )[0];
        avail_cnf_btn.style.visibility = "visible";
      } else {
        let avail_cnf_btn = document.getElementsByClassName(
          "avail-confirm-move"
        )[0];
        avail_cnf_btn.style.visibility = "hidden";
      }
      console.log(selected_power);
    }

    let avail_cnf_btn = document.getElementsByClassName(
      "avail-confirm-move"
    )[0];
    avail_cnf_btn.addEventListener("click", cnf_fun);
    // active_avail_confirm();
    active_avail_deny();
    async function cnf_fun() {
      let selected_power = {
        stone: "null",
        player: "null",
        direction: "null",
        exchange_stone1: "null",
        exchange_stone2: "null"
      };
      for (var i = 0; i < avail_option_input.length; i++) {
        if (avail_option_input[i].checked) {
          if (avail_option_input[i].name == "stone") {
            selected_power.stone = avail_option_input[i].value;
          } else if (
            avail_option_input[i].name == "tp" ||
            avail_option_input[i].name == "mp" ||
            avail_option_input[i].name == "rp" ||
            avail_option_input[i].name == "spp" ||
            avail_option_input[i].name == "pp" ||
            avail_option_input[i].name == "sop"
          ) {
            selected_power.player = avail_option_input[i].value;
          } else if (avail_option_input[i].name == "dir") {
            selected_power.direction = avail_option_input[i].value;
          }
        }
      }
      avail_cnf_btn.removeEventListener("click", cnf_fun);
      console.log(selected_power);

      /*
       reality stone power effect;
       */

      if (selected_power.stone == "reality") {
        reality_enemy_loc = reality_enemy_generator();

        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;
        for (let i = 0; i < players.length; i++) {
          if (active_player != window[players[i]]) {
            window[players[i]].realityeffect = 2;
          }
        }
        // if (active_player != player1_data) {
        //   player1_data.realityeffect = 2;
        // }
        // if (active_player != player2_data) {
        //   player2_data.realityeffect = 2;
        // }
        // if (active_player != player3_data) {
        //   player3_data.realityeffect = 2;
        // }
        // if (active_player != player4_data) {
        //   player4_data.realityeffect = 2;
        // }
        active_player.realitystone = false;
        active_player.stonecount--;
        if (active_player.stonecount == 0) {
          active_player.isStones = false;
        }
        portal_storage.realitystone = true;
        console.log("reality stone worked");
        confirm_move();
      }

      /*
       reality stone power effect;
       */

      /*
       soul stone power effect;
       */
      if (selected_power.stone == "soul") {
        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;
        if (selected_power.player == "sop1") {
          let temparr = [];
          Object.entries(player1_data).map((entry) => {
            let key = entry[0];
            let value = entry[1];

            if (key == "timestone" && value == true) {
              temparr.push("timestone");
              player1_data.timestone = false;
              player1_data.stonecount--;
              active_player.timestone = true;
              active_player.stonecount++;
            }
            if (key == "spacestone" && value == true) {
              temparr.push("spacestone");
              player1_data.spacestone = false;
              player1_data.stonecount--;
              active_player.spacestone = true;
              active_player.stonecount++;
            }
            if (key == "powerstone" && value == true) {
              temparr.push("powerstone");
              player1_data.powerstone = false;
              player1_data.stonecount--;
              active_player.powerstone = true;
              active_player.stonecount++;
            }
            if (key == "realitystone" && value == true) {
              temparr.push("realitystone");
              player1_data.realitystone = false;
              player1_data.stonecount--;
              active_player.realitystone = true;
              active_player.stonecount++;
            }
            if (key == "memorystone" && value == true) {
              temparr.push("memorystone");
              player1_data.memorystone = false;
              player1_data.stonecount--;
              active_player.memorystone = true;
              active_player.stonecount++;
            }
          });

          Object.entries(active_player).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true && !temparr.includes(key)) {
              player1_data.timestone = true;
              player1_data.stonecount++;
              active_player.timestone = false;
              active_player.stonecount--;
            }
            if (
              key == "spacestone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player1_data.spacestone = true;
              player1_data.stonecount++;
              active_player.spacestone = false;
              active_player.stonecount++;
            }
            if (
              key == "powerstone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player1_data.powerstone = true;
              player1_data.stonecount++;
              active_player.powerstone = false;
              active_player.stonecount--;
            }
            if (
              key == "realitystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player1_data.realitystone = true;
              player1_data.stonecount++;
              active_player.realitystone = false;
              active_player.stonecount--;
            }
            if (
              key == "memorystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player1_data.memorystone = true;
              player1_data.stonecount++;
              active_player.memorystone = false;
              active_player.stonecount--;
            }
          });

          if (player1_data.stonecount == 0) {
            player1_data.isStones = false;
          }
          active_player.soulstone = false;
          active_player.stonecount--;
          portal_storage.soulstone = true;
        }
        if (selected_power.player == "sop2") {
          let temparr = [];
          Object.entries(player2_data).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true) {
              temparr.push("timestone");
              player2_data.timestone = false;
              player2_data.stonecount--;
              active_player.timestone = true;
              active_player.stonecount++;
            }
            if (key == "spacestone" && value == true) {
              temparr.push("spacestone");
              player2_data.spacestone = false;
              player2_data.stonecount--;
              active_player.spacestone = true;
              active_player.stonecount++;
            }
            if (key == "powerstone" && value == true) {
              temparr.push("powerstone");
              player2_data.powerstone = false;
              player2_data.stonecount--;
              active_player.powerstone = true;
              active_player.stonecount++;
            }
            if (key == "realitystone" && value == true) {
              temparr.push("realitystone");
              player2_data.realitystone = false;
              player2_data.stonecount--;
              active_player.realitystone = true;
              active_player.stonecount++;
            }
            if (key == "memorystone" && value == true) {
              temparr.push("memorystone");
              player2_data.memorystone = false;
              player2_data.stonecount--;
              active_player.memorystone = true;
              active_player.stonecount++;
            }
          });

          Object.entries(active_player).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true && !temparr.includes(key)) {
              player2_data.timestone = true;
              player2_data.stonecount++;
              active_player.timestone = false;
              active_player.stonecount--;
            }
            if (
              key == "spacestone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player2_data.spacestone = true;
              player2_data.stonecount++;
              active_player.spacestone = false;
              active_player.stonecount++;
            }
            if (
              key == "powerstone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player2_data.powerstone = true;
              player2_data.stonecount++;
              active_player.powerstone = false;
              active_player.stonecount--;
            }
            if (
              key == "realitystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player2_data.realitystone = true;
              player2_data.stonecount++;
              active_player.realitystone = false;
              active_player.stonecount--;
            }
            if (
              key == "memorystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player2_data.memorystone = true;
              player2_data.stonecount++;
              active_player.memorystone = false;
              active_player.stonecount--;
            }
          });

          if (player2_data.stonecount == 0) {
            player2_data.isStones = false;
          }
          active_player.soulstone = false;
          active_player.stonecount--;
          portal_storage.soulstone = true;
        }
        if (selected_power.player == "sop3") {
          let temparr = [];
          Object.entries(player3_data).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true) {
              temparr.push("timestone");
              player3_data.timestone = false;
              player3_data.stonecount--;
              active_player.timestone = true;
              active_player.stonecount++;
            }
            if (key == "spacestone" && value == true) {
              temparr.push("spacestone");
              player3_data.spacestone = false;
              player3_data.stonecount--;
              active_player.spacestone = true;
              active_player.stonecount++;
            }
            if (key == "powerstone" && value == true) {
              temparr.push("powerstone");
              player3_data.powerstone = false;
              player3_data.stonecount--;
              active_player.powerstone = true;
              active_player.stonecount++;
            }
            if (key == "realitystone" && value == true) {
              temparr.push("realitystone");
              player3_data.realitystone = false;
              player3_data.stonecount--;
              active_player.realitystone = true;
              active_player.stonecount++;
            }
            if (key == "memorystone" && value == true) {
              temparr.push("memorystone");
              player3_data.memorystone = false;
              player3_data.stonecount--;
              active_player.memorystone = true;
              active_player.stonecount++;
            }
          });

          Object.entries(active_player).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true && !temparr.includes(key)) {
              player3_data.timestone = true;
              player3_data.stonecount++;
              active_player.timestone = false;
              active_player.stonecount--;
            }
            if (
              key == "spacestone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player3_data.spacestone = true;
              player3_data.stonecount++;
              active_player.spacestone = false;
              active_player.stonecount++;
            }
            if (
              key == "powerstone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player3_data.powerstone = true;
              player3_data.stonecount++;
              active_player.powerstone = false;
              active_player.stonecount--;
            }
            if (
              key == "realitystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player3_data.realitystone = true;
              player3_data.stonecount++;
              active_player.realitystone = false;
              active_player.stonecount--;
            }
            if (
              key == "memorystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player3_data.memorystone = true;
              player3_data.stonecount++;
              active_player.memorystone = false;
              active_player.stonecount--;
            }
          });

          if (player3_data.stonecount == 0) {
            player3_data.isStones = false;
          }
          active_player.soulstone = false;
          active_player.stonecount--;
          portal_storage.soulstone = true;
        }
        if (selected_power.player == "sop4") {
          let temparr = [];
          Object.entries(player4_data).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true) {
              temparr.push("timestone");
              player4_data.timestone = false;
              player4_data.stonecount--;
              active_player.timestone = true;
              active_player.stonecount++;
            }
            if (key == "spacestone" && value == true) {
              temparr.push("spacestone");
              player4_data.spacestone = false;
              player4_data.stonecount--;
              active_player.spacestone = true;
              active_player.stonecount++;
            }
            if (key == "powerstone" && value == true) {
              temparr.push("powerstone");
              player4_data.powerstone = false;
              player4_data.stonecount--;
              active_player.powerstone = true;
              active_player.stonecount++;
            }
            if (key == "realitystone" && value == true) {
              temparr.push("realitystone");
              player4_data.realitystone = false;
              player4_data.stonecount--;
              active_player.realitystone = true;
              active_player.stonecount++;
            }
            if (key == "memorystone" && value == true) {
              temparr.push("memorystone");
              player4_data.memorystone = false;
              player4_data.stonecount--;
              active_player.memorystone = true;
              active_player.stonecount++;
            }
          });

          Object.entries(active_player).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true && !temparr.includes(key)) {
              player4_data.timestone = true;
              player4_data.stonecount++;
              active_player.timestone = false;
              active_player.stonecount--;
            }
            if (
              key == "spacestone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player4_data.spacestone = true;
              player4_data.stonecount++;
              active_player.spacestone = false;
              active_player.stonecount++;
            }
            if (
              key == "powerstone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player4_data.powerstone = true;
              player4_data.stonecount++;
              active_player.powerstone = false;
              active_player.stonecount--;
            }
            if (
              key == "realitystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player4_data.realitystone = true;
              player4_data.stonecount++;
              active_player.realitystone = false;
              active_player.stonecount--;
            }
            if (
              key == "memorystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player4_data.memorystone = true;
              player4_data.stonecount++;
              active_player.memorystone = false;
              active_player.stonecount--;
            }
          });

          if (player4_data.stonecount == 0) {
            player4_data.isStones = false;
          }
          active_player.soulstone = false;
          active_player.stonecount--;
          portal_storage.soulstone = true;
        }
        confirm_move();

        console.log("soul stone worked");
      }

      /*
       soul stone power effect;
       */

      /*
       memory stone power effect;
       */

      if (selected_power.stone == "memory") {
        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;

        if (selected_power.player == "mp1") {
          player1_data.memoryerase = 2;
        }
        if (selected_power.player == "mp2") {
          player2_data.memoryerase = 2;
        }
        if (selected_power.player == "mp3") {
          player3_data.memoryerase = 2;
        }
        if (selected_power.player == "mp4") {
          player4_data.memoryerase = 2;
        }
        active_player.memorystone = false;
        active_player.stonecount--;
        if (active_player.stonecount == 0) {
          active_player.isStones = false;
        }
        portal_storage.memorystone = true;
        console.log("memory stone worked");
        confirm_move();
      }

      /*
       memory stone power effect;
       */

      /*
       power stone power effect;
       */

      if (selected_power.stone == "power") {
        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;

        active_player.powerstone = false;
        active_player.stonecount--;
        if (active_player.stonecount == 0) {
          active_player.isStones = false;
        }
        portal_storage.powerstone = true;
        await move_player();
        move_frame();

        console.log("power stone worked");
      }

      /*
       power stone power effect;
       */

      /*
  space stone power effect;
  
  */
      if (selected_power.stone == "space") {
        // let attacked_player;

        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;

        if (selected_power.player == "spp1") {

          await space_stone_effect(0, selected_power.direction);


          // let index = player1_data.position;
          // let currgrid = document.getElementById(`grid${index}`);
          // let notes = null;
          // for (let i = 0; i < currgrid.childNodes.length; i++) {
          //   if (currgrid.childNodes[i].className == "1") {
          //     // console.log(currgrid.childNodes[i]);
          //     notes = currgrid.childNodes[i];
          //     currgrid.removeChild(notes);
          //     break;
          //   }
          // }
          // let gridno;
          // if (selected_power.direction == "+") {
          //   gridno = player1_data.position + number;
          // } else {
          //   gridno = player1_data.position - number;
          // }
          // let selgrid = document.getElementById(`grid${gridno}`);
          // // console.log(selgrid);
          // selgrid.insertAdjacentHTML(
          //   "beforeend",
          //   `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
          // );
          // player1_data.position = gridno;
          // player1_data.ultronattack = 0;
          // attacked_player = player1_data;
          // // console.log(player1_data);
        }
        if (selected_power.player == "spp2") {
          await space_stone_effect(1, selected_power.direction);
          // let index = player2_data.position;
          // let currgrid = document.getElementById(`grid${index}`);
          // let notes = null;
          // for (let i = 0; i < currgrid.childNodes.length; i++) {
          //   if (currgrid.childNodes[i].className == "2") {
          //     // console.log(currgrid.childNodes[i]);
          //     notes = currgrid.childNodes[i];
          //     currgrid.removeChild(notes);
          //     break;
          //   }
          // }

          // let gridno;
          // if (selected_power.direction == "+") {
          //   gridno = player2_data.position + number;
          // } else {
          //   gridno = player2_data.position - number;
          // }
          // let selgrid = document.getElementById(`grid${gridno}`);
          // selgrid.insertAdjacentHTML(
          //   "beforeend",
          //   `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
          // );
          // player2_data.position = gridno;
          // player2_data.ultronattack = 0;
          // attacked_player = player2_data;
        }
        if (selected_power.player == "spp3") {
          await space_stone_effect(2, selected_power.direction);
          // let index = player3_data.position;
          // let currgrid = document.getElementById(`grid${index}`);
          // let notes = null;
          // for (let i = 0; i < currgrid.childNodes.length; i++) {
          //   if (currgrid.childNodes[i].className == "3") {
          //     // console.log(currgrid.childNodes[i]);
          //     notes = currgrid.childNodes[i];
          //     currgrid.removeChild(notes);
          //     break;
          //   }
          // }

          // let gridno;
          // if (selected_power.direction == "+") {
          //   gridno = player3_data.position + number;
          // } else {
          //   gridno = player3_data.position - number;
          // }
          // let selgrid = document.getElementById(`grid${gridno}`);
          // selgrid.insertAdjacentHTML(
          //   "beforeend",
          //   `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
          // );
          // player3_data.position = gridno;
          // player3_data.ultronattack = 0;
          // attacked_player = player3_data;
        }
        if (selected_power.player == "spp4") {
          await space_stone_effect(3, selected_power.direction);
          // let index = player4_data.position;
          // let currgrid = document.getElementById(`grid${index}`);
          // let notes = null;
          // for (let i = 0; i < currgrid.childNodes.length; i++) {
          //   if (currgrid.childNodes[i].className == "4") {
          //     // console.log(currgrid.childNodes[i]);
          //     notes = currgrid.childNodes[i];
          //     currgrid.removeChild(notes);
          //     break;
          //   }
          // }

          // let gridno;
          // if (selected_power.direction == "+") {
          //   gridno = player4_data.position + number;
          // } else {
          //   gridno = player4_data.position - number;
          // }
          // let selgrid = document.getElementById(`grid${gridno}`);
          // selgrid.insertAdjacentHTML(
          //   "beforeend",
          //   `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
          // );
          // player4_data.position = gridno;
          // player4_data.ultronattack = 0;
          // attacked_player = player4_data;
        }
        if (active_player.isStones) {
          active_player.spacestone = false;
          active_player.stonecount--;
          if (active_player.stonecount == 0) {
            active_player.isStones = false;
          }
          portal_storage.spacestone = true;
        }
        if (selected_power.player == "spp1" && active_player_count != 1
          || selected_power.player == "spp2" && active_player_count != 2
          || selected_power.player == "spp3" && active_player_count != 3
          || selected_power.player == "spp4" && active_player_count != 4
        ) {
          confirm_move();
        }
        else {
          move_frame();
        }
        // let current_player = active_player;
        // active_player = attacked_player;

        // if (check_enemy()) {
        //   enemy_effect(false);
        // }
        // if (attacked_player != current_player) {
        //   console.log("hi");

        //   let nextindex = active_player.position;
        //   if (
        //     nextindex == portal_loc[0] ||
        //     nextindex == portal_loc[1] ||
        //     nextindex == portal_loc[2] ||
        //     nextindex == portal_loc[3] ||
        //     nextindex == portal_loc[4] ||
        //     nextindex == portal_loc[5] ||
        //     nextindex == portal_loc[6]
        //   ) {
        //     if (check_portal_storage()) {
        //       console.log("hiiii");
        //       check_portal();
        //     }
        //   }
        // }


        // // if (active_player == player1_data && active_player.isStones) {
        // //   player1_data.spacestone = false;
        // //   player1_data.stonecount--;
        // //   if (player1_data.stonecount == 0) {
        // //     player1_data.isStones = false;
        // //   }
        // //   portal_storage.spacestone = true;
        // // }

        // // if (active_player == player2_data && active_player.isStones) {
        // //   player2_data.spacestone = false;
        // //   player2_data.stonecount--;
        // //   if (player2_data.stonecount == 0) {
        // //     player2_data.isStones = false;
        // //   }
        // //   portal_storage.spacestone = true;
        // // }
        // // if (active_player == player3_data && active_player.isStones) {
        // //   player3_data.spacestone = false;
        // //   player3_data.stonecount--;
        // //   if (player3_data.stonecount == 0) {
        // //     player3_data.isStones = false;
        // //   }
        // //   portal_storage.spacestone = true;
        // // }

        // // if (active_player == player4_data && active_player.isStones) {
        // //   player4_data.spacestone = false;
        // //   player4_data.stonecount--;
        // //   if (player4_data.stonecount == 0) {
        // //     player4_data.isStones = false;
        // //   }
        // //   portal_storage.spacestone = true;
        // // }

        // let nextindex = active_player.position;
        // if (
        //   nextindex == portal_loc[0] ||
        //   nextindex == portal_loc[1] ||
        //   nextindex == portal_loc[2] ||
        //   nextindex == portal_loc[3] ||
        //   nextindex == portal_loc[4] ||
        //   nextindex == portal_loc[5] ||
        //   nextindex == portal_loc[6]
        // ) {
        //   if (check_portal_storage()) {
        //     check_portal();
        //   } else {
        //     move_frame();
        //   }
        // } else {
        //   move_frame();
        // }
      }
      /*
  space stone power effect;
  
  */
    }

    // active_avail_confirm();
    // if (active_player.timestone) {
    //   console.log("time");

    //   let timeblock = document.getElementsByClassName("time")[0];
    //   timeblock.style.backgroundColor = "white";
    // }
    // if (active_player.spacestone) {
    //   console.log("space");
    //   let spaceblock = document.getElementsByClassName("space-stone")[0];
    //   let space = spaceblock.querySelector(".space");
    //   space.style.backgroundColor = "white";
    //   let p1 = spaceblock.querySelector(".p1");
    //   p1.style.backgroundColor = "white";
    //   let p2 = spaceblock.querySelector(".p2");
    //   p2.style.backgroundColor = "white";
    //   let p3 = spaceblock.querySelector(".p3");
    //   p3.style.backgroundColor = "white";
    //   let p4 = spaceblock.querySelector(".p4");
    //   p4.style.backgroundColor = "white";
    //   let plus = spaceblock.querySelector(".plus");
    //   plus.style.backgroundColor = "white";
    //   let minus = spaceblock.querySelector(".minus");
    //   minus.style.backgroundColor = "white";
    // }
    // if (active_player.powerstone) {
    //   console.log("power");
    // }
    // if (active_player.realitystone) {
    //   console.log("reality");
    //   let realityblock = document.getElementsByClassName("reality-stone")[0];
    //   realityblock.querySelector(".reality").style.backgroundColor = "white";
    // }
    // if (active_player.soulstone && active_player.stonecount >= 2) {
    //   let flag = false;
    //   console.log("soul");
    //   if (active_player != player1_data) {
    //     console.log(active_player);
    //     console.log(player1_data);
    //     if (
    //       player1_data.timestone ||
    //       player1_data.spacestone ||
    //       player1_data.powerstone ||
    //       player1_data.realitystone ||
    //       player1_data.memorystone
    //     ) {
    //       flag = true;
    //       let soulblock = document.getElementsByClassName("soul-stone")[0];
    //       let p = soulblock.querySelector(".p1");
    //       p.style.backgroundColor = "white";
    //     }
    //   }

    //   if (active_player != player2_data) {
    //     if (
    //       player2_data.timestone ||
    //       player2_data.spacestone ||
    //       player2_data.powerstone ||
    //       player2_data.realitystone ||
    //       player2_data.memorystone
    //     ) {
    //       flag = true;
    //       let soulblock = document.getElementsByClassName("soul-stone")[0];
    //       let p = soulblock.querySelector(".p2");
    //       p.style.backgroundColor = "white";
    //     }
    //   }

    //   if (active_player != player3_data) {
    //     if (
    //       player3_data.timestone ||
    //       player3_data.spacestone ||
    //       player3_data.powerstone ||
    //       player3_data.realitystone ||
    //       player3_data.memorystone
    //     ) {
    //       flag = true;
    //       let soulblock = document.getElementsByClassName("soul-stone")[0];
    //       let p = soulblock.querySelector(".p3");
    //       p.style.backgroundColor = "white";
    //     }
    //   }

    //   if (active_player != player4_data) {
    //     if (
    //       player4_data.timestone ||
    //       player4_data.spacestone ||
    //       player4_data.powerstone ||
    //       player4_data.realitystone ||
    //       player4_data.memorystone
    //     ) {
    //       flag = true;
    //       let soulblock = document.getElementsByClassName("soul-stone")[0];
    //       let p = soulblock.querySelector(".p4");
    //       p.style.backgroundColor = "white";
    //     }
    //   }
    //   if (flag) {
    //     document.getElementsByClassName("soul")[0].style.backgroundColor =
    //       "white";
    //   }
    // }
    // if (active_player.memorystone) {
    //   console.log("memory");
    //   let flag = false;
    //   if (active_player != player1_data) {
    //     console.log("player1");
    //     flag = true;
    //     let memoryblock = document.getElementsByClassName("memory-stone")[0];
    //     let p = memoryblock.querySelector(".p1");
    //     p.style.backgroundColor = "white";
    //   }

    //   if (active_player != player2_data) {
    //     console.log("player2");
    //     flag = true;
    //     let memoryblock = document.getElementsByClassName("memory-stone")[0];
    //     let p = memoryblock.querySelector(".p2");
    //     p.style.backgroundColor = "white";
    //   }

    //   if (active_player != player3_data) {
    //     flag = true;
    //     let memoryblock = document.getElementsByClassName("memory-stone")[0];
    //     let p = memoryblock.querySelector(".p3");
    //     p.style.backgroundColor = "white";
    //   }

    //   if (active_player != player4_data) {
    //     flag = true;
    //     let memoryblock = document.getElementsByClassName("memory-stone")[0];
    //     let p = memoryblock.querySelector(".p4");
    //     p.style.backgroundColor = "white";
    //   }
    //   if (flag) {
    //     document.getElementsByClassName("memory")[0].style.backgroundColor =
    //       "white";
    //   }
    // }
  } else {
    console.log("nooption");
    confirm_move();
  }
}

function isaavailoption() {
  if (active_player.isStones) {
  }
  if (active_player.timestone) {
    return true;
  }
  if (active_player.spacestone) {
    return true;
  }
  if (active_player.powerstone) {
    let nextindex = active_player.position + number;
    if (
      nextindex == enemy_loc[0] ||
      nextindex == enemy_loc[1] ||
      nextindex == enemy_loc[2] ||
      nextindex == enemy_loc[3] ||
      nextindex == enemy_loc[4] ||
      nextindex == enemy_loc[5] ||
      nextindex == enemy_loc[6] ||
      nextindex == enemy_loc[7] ||
      nextindex == enemy_loc[8]
    ) {
      return true;
    }
  }
  if (active_player.realitystone) {
    return true;
  }
  if (active_player.soulstone) {
    for (let i = 0; i < players.length; i++) {
      if (active_player != window[players[i]]) {
        if (
          window[players[i]].timestone ||
          window[players[i]].spacestone ||
          window[players[i]].powerstone ||
          window[players[i]].realitystone ||
          window[players[i]].memorystone
        ) {
          return true;
        }
      }
    }
    // if (active_player != player1_data) {
    //   if (
    //     player1_data.timestone ||
    //     player1_data.spacestone ||
    //     player1_data.powerstone ||
    //     player1_data.realitystone ||
    //     player1_data.memorystone
    //   ) {
    //     return true;
    //   }
    // }

    // if (active_player != player2_data) {
    //   if (
    //     player2_data.timestone ||
    //     player2_data.spacestone ||
    //     player2_data.powerstone ||
    //     player2_data.realitystone ||
    //     player2_data.memorystone
    //   ) {
    //     return true;
    //   }
    // }

    // if (active_player != player3_data) {
    //   if (
    //     player3_data.timestone ||
    //     player3_data.spacestone ||
    //     player3_data.powerstone ||
    //     player3_data.realitystone ||
    //     player3_data.memorystone
    //   ) {
    //     return true;
    //   }
    // }

    // if (active_player != player4_data) {
    //   if (
    //     player4_data.timestone ||
    //     player4_data.spacestone ||
    //     player4_data.powerstone ||
    //     player4_data.realitystone ||
    //     player4_data.memorystone
    //   ) {
    //     return true;
    //   }
    // }
  }
  if (active_player.memorystone) {
    return true;
  }
  return false;
}

function element_from_html(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElemenChild;
}

var portal_status = true;
var speed = 2;
var source = 1;
var destination = 5;
var path = [];
var grid_coordinates = {
  1: { x: 0, y: 365 },
  2: { x: 48, y: 365 },
  3: { x: 96, y: 365 },
  4: { x: 144, y: 365 },
  5: { x: 192, y: 365 },
  6: { x: 240, y: 365 },
  7: { x: 288, y: 365 },
  8: { x: 336, y: 365 },
  9: { x: 384, y: 365 },
  10: { x: 432, y: 365 },
  20: { x: 0, y: 325 },
  19: { x: 48, y: 325 },
  18: { x: 96, y: 325 },
  17: { x: 144, y: 325 },
  16: { x: 192, y: 325 },
  15: { x: 240, y: 325 },
  14: { x: 288, y: 325 },
  13: { x: 336, y: 325 },
  12: { x: 384, y: 325 },
  11: { x: 432, y: 325 },
  21: { x: 0, y: 285 },
  22: { x: 48, y: 285 },
  23: { x: 96, y: 285 },
  24: { x: 144, y: 285 },
  25: { x: 192, y: 285 },
  26: { x: 240, y: 285 },
  27: { x: 288, y: 285 },
  28: { x: 336, y: 285 },
  29: { x: 384, y: 285 },
  30: { x: 432, y: 285 },
  40: { x: 0, y: 245 },
  39: { x: 48, y: 245 },
  38: { x: 96, y: 245 },
  37: { x: 144, y: 245 },
  36: { x: 192, y: 245 },
  35: { x: 240, y: 245 },
  34: { x: 288, y: 245 },
  33: { x: 336, y: 245 },
  32: { x: 384, y: 245 },
  31: { x: 432, y: 245 },
  41: { x: 0, y: 205 },
  42: { x: 48, y: 205 },
  43: { x: 96, y: 205 },
  44: { x: 144, y: 205 },
  45: { x: 192, y: 205 },
  46: { x: 240, y: 205 },
  47: { x: 288, y: 205 },
  48: { x: 336, y: 205 },
  49: { x: 384, y: 205 },
  50: { x: 432, y: 205 },
  60: { x: 0, y: 165 },
  59: { x: 48, y: 165 },
  58: { x: 96, y: 165 },
  57: { x: 144, y: 165 },
  56: { x: 192, y: 165 },
  55: { x: 240, y: 165 },
  54: { x: 288, y: 165 },
  53: { x: 336, y: 165 },
  52: { x: 384, y: 165 },
  51: { x: 432, y: 165 },
  61: { x: 0, y: 125 },
  62: { x: 48, y: 125 },
  63: { x: 96, y: 125 },
  64: { x: 144, y: 125 },
  65: { x: 192, y: 125 },
  66: { x: 240, y: 125 },
  67: { x: 288, y: 125 },
  68: { x: 336, y: 125 },
  69: { x: 384, y: 125 },
  70: { x: 432, y: 125 },
  80: { x: 0, y: 85 },
  79: { x: 48, y: 85 },
  78: { x: 96, y: 85 },
  77: { x: 144, y: 85 },
  76: { x: 192, y: 85 },
  75: { x: 240, y: 85 },
  74: { x: 288, y: 85 },
  73: { x: 336, y: 85 },
  72: { x: 384, y: 85 },
  71: { x: 432, y: 85 },
  81: { x: 0, y: 45 },
  82: { x: 48, y: 45 },
  83: { x: 96, y: 45 },
  84: { x: 144, y: 45 },
  85: { x: 192, y: 45 },
  86: { x: 240, y: 45 },
  87: { x: 288, y: 45 },
  88: { x: 336, y: 45 },
  89: { x: 384, y: 45 },
  90: { x: 432, y: 45 },
  100: { x: 0, y: 5 },
  99: { x: 48, y: 5 },
  98: { x: 96, y: 5 },
  97: { x: 144, y: 5 },
  96: { x: 192, y: 5 },
  95: { x: 240, y: 5 },
  94: { x: 288, y: 5 },
  93: { x: 336, y: 5 },
  92: { x: 384, y: 5 },
  91: { x: 432, y: 5 }
};

{
  let canvas = document.getElementById("canvas6");
  let ctx = canvas.getContext("2d");
  let playerImage = new Image();
  playerImage.src = "DoctorStrange-anime1.png";
  let Sprite_Width = 100;
  let Sprite_Height = 137;
  let CANVAS_HEIGHT = (canvas.height = 400);
  let CANVAS_WIDTH = (canvas.width = 480);
  let FrameY = 0;
  let dx = 0;
  let dy = 365;
  let canvas2 = document.getElementById("canvas1");
  let ctx2 = canvas2.getContext("2d");
  let playerImage2 = new Image();
  playerImage2.src = "IronMan-anime1.png";
  let Sprite_Width2 = 100;
  let Sprite_Height2 = 141;
  let CANVAS_HEIGHT2 = (canvas.height = 400);
  let CANVAS_WIDTH2 = (canvas.width = 480);
  let FrameY2 = 0;
  let dx2 = 0;
  let dy2 = 365;
  let canvas3 = document.getElementById("canvas2");
  let ctx3 = canvas3.getContext("2d");
  let playerImage3 = new Image();
  playerImage3.src = "Captain-America Anime1.png";
  let Sprite_Width3 = 100;
  let Sprite_Height3 = 141;
  let CANVAS_HEIGHT3 = (canvas.height = 400);
  let CANVAS_WIDTH3 = (canvas.width = 480);
  let FrameY3 = 0;
  let dx3 = 0;
  let dy3 = 365;
  let canvas4 = document.getElementById("canvas3");
  let ctx4 = canvas4.getContext("2d");
  let playerImage4 = new Image();
  playerImage4.src = "thor-anime6.png";
  let Sprite_Width4 = 224;
  let Sprite_Height4 = 171;
  let CANVAS_HEIGHT4 = (canvas.height = 400);
  let CANVAS_WIDTH4 = (canvas.width = 480);
  let FrameY4 = 2;
  let dx4 = 0;
  let dy4 = 365;
  window.onload = () => {
    ctx.drawImage(
      playerImage,
      0,
      FrameY * Sprite_Height,
      Sprite_Width,
      Sprite_Height,
      dx,
      dy,
      CANVAS_WIDTH - 432,
      CANVAS_HEIGHT - 365
    );
    ctx2.drawImage(
      playerImage2,
      0,
      FrameY2 * Sprite_Height2,
      Sprite_Width2,
      Sprite_Height2,
      dx2,
      dy2,
      CANVAS_WIDTH2 - 432,
      CANVAS_HEIGHT2 - 365
    );
    ctx3.drawImage(
      playerImage3,
      0,
      FrameY3 * Sprite_Height3,
      Sprite_Width3,
      Sprite_Height3,
      dx3,
      dy3,
      CANVAS_WIDTH3 - 432,
      CANVAS_HEIGHT3 - 365
    );
    ctx4.drawImage(
      playerImage4,
      0,
      FrameY4 * Sprite_Height4,
      Sprite_Width4,
      Sprite_Height4,
      dx4 + 5,
      dy4 - 6,
      CANVAS_WIDTH4 - 425,
      CANVAS_HEIGHT4 - 360
    );
  };
}



async function doctor_hand_rotate(start_x, start_y, end_x, end_y, dir) {
  return new Promise(function (resolve) {
    let canvas = document.getElementById("canvas6");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = canvas.height = 400;
    let CANVAS_WIDTH = canvas.width = 480;

    let playerImage = new Image();
    playerImage.src = 'DoctorStrange-anime5.png';
    let Sprite_Width = 180;
    let Sprite_Height = 214;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 15;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    console.log("hand rotate start");
    for (let j = 0; j < speed; j++) {

      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      if (dir == "right") {

        ctx.drawImage(playerImage, FrameX * Sprite_Width, FrameY * Sprite_Height, Sprite_Width, Sprite_Height, dx, dy - 3, CANVAS_WIDTH - 425, CANVAS_HEIGHT - 355);
      } else {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(playerImage, FrameX * Sprite_Width, FrameY * Sprite_Height, Sprite_Width, Sprite_Height, -dx - 50, dy - 3, CANVAS_WIDTH - 425, CANVAS_HEIGHT - 355);
        ctx.restore();
      }
      if (GameFrames % StaggerFrames == 0) {
        FrameX++;
        if (FrameY == 0) {
          Sprite_Width = 180;
          Sprite_Height = 214;
        }
        if (FrameY == 1) {
          Sprite_Width = 165;
          Sprite_Height = 214;
        }
        if (FrameY == 2) {
          Sprite_Width = 178;
          Sprite_Height = 214;
        }
        if (FrameY == 3) {
          Sprite_Width = 175;
          Sprite_Height = 214;
          if (FrameX == 3) {
            Sprite_Height = 212;
            Sprite_Width = 172;
          }
          if (FrameX == 1) {
            Sprite_Height = 212;
            Sprite_Width = 174;
          }
        }
        if (FrameX > 2) {
          FrameX = 0;
          FrameY++;
          if (FrameY > 3) {
            FrameY = 0;
            value = false;
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            console.log("hand rotate done");
            resolve(true);
          }
        }
      }
      if (value) {

        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        // dx++;
        // if (dx == end_x) {
        //   value = false;
        //   console.log("right done");
        //   resolve(true);
        // }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()

  })

}


async function doctor_portal_rotate(start_x, start_y, end_x, end_y, canvas_layer, In_or_out, dir) {
  return new Promise(function (resolve) {
    let canvas = document.getElementById(`canvas${canvas_layer}`);
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = canvas.height = 400;
    let CANVAS_WIDTH = canvas.width = 480;

    let playerImage = new Image();
    playerImage.src = 'DoctorStrange-anime6.png';
    let Sprite_Width = 120;
    let Sprite_Height = 411;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 15;
    let dx = start_x;
    let dy = start_y - 5;
    let moveStagger = 1;
    let moveFrames = 0;
    let FrameX_counter = 0;
    let Sprite_Width_counter = 0;
    let CANVAS_HEIGHT_counter = 0;
    let dy_counter = 0;
    let temp = false;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    console.log("portal rotate start")
    for (let j = 0; j < speed; j++) {

      animate();
    }

    async function animate() {

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      if (In_or_out == "in") {
        if (dir == "right") {

          ctx.drawImage(playerImage, FrameX * Sprite_Width + FrameX_counter, FrameY * Sprite_Height, Sprite_Width + Sprite_Width_counter, Sprite_Height, (dx + 40), dy + dy_counter - 5, CANVAS_WIDTH - 470, CANVAS_HEIGHT - 360 + CANVAS_HEIGHT_counter);
        }
        else {

          ctx.drawImage(playerImage, FrameX * Sprite_Width + FrameX_counter, FrameY * Sprite_Height, Sprite_Width + Sprite_Width_counter, Sprite_Height, (dx + 40) - 40, dy + dy_counter - 5, CANVAS_WIDTH - 470, CANVAS_HEIGHT - 360 + CANVAS_HEIGHT_counter);
        }
      }
      else {
        dy = end_y;
        ctx.save();
        ctx.scale(-1, 1);
        if (dir == "right") {

          ctx.drawImage(playerImage, FrameX * Sprite_Width + FrameX_counter, FrameY * Sprite_Height, Sprite_Width + Sprite_Width_counter, Sprite_Height, -(dx + 40) - 9, dy + dy_counter - 5, CANVAS_WIDTH - 470, CANVAS_HEIGHT - 360 + CANVAS_HEIGHT_counter);
        } else {
          ctx.drawImage(playerImage, FrameX * Sprite_Width + FrameX_counter, FrameY * Sprite_Height, Sprite_Width + Sprite_Width_counter, Sprite_Height, -(dx + 40) - 9 - 40, dy + dy_counter - 5, CANVAS_WIDTH - 470, CANVAS_HEIGHT - 360 + CANVAS_HEIGHT_counter);

        }
        ctx.restore();
      }


      if (GameFrames % StaggerFrames == 0) {
        FrameX++;

        if (temp == false) {

          if (FrameX == 0) {
            FrameX_counter = 0;
            Sprite_Width_counter = 0;
            CANVAS_HEIGHT_counter = -15;
          }
          else if (FrameX == 1) {
            FrameX_counter = 0;
            Sprite_Width_counter = 15;
            CANVAS_HEIGHT_counter = -12;
            dy_counter = 13;
          }
          else if (FrameX == 2) {
            Sprite_Width_counter = 30;
            CANVAS_HEIGHT_counter = -9;
            dy_counter = 11;
          }
          else if (FrameX == 3) {
            FrameX_counter = 10;
            Sprite_Width_counter = 35;
            CANVAS_HEIGHT_counter = -8;
            dy_counter = 10;
          }
          else if (FrameX == 4) {
            FrameX_counter = 30;
            Sprite_Width_counter = 47;
            CANVAS_HEIGHT_counter = -5;
            dy_counter = 9;
          }
          else if (FrameX == 5) {
            FrameX_counter = 53;
            Sprite_Width_counter = 57;
            CANVAS_HEIGHT_counter = -4;
            dy_counter = 8;
          }
          else if (FrameX == 6) {
            FrameX_counter = 85;
            Sprite_Width_counter = 63;
            CANVAS_HEIGHT_counter = -3;
            dy_counter = 7;
          }
          else if (FrameX == 7) {
            FrameX_counter = 120;
            Sprite_Width_counter = 74;
            CANVAS_HEIGHT_counter = -2;
            dy_counter = 6;
          }
          else if (FrameX == 8) {
            FrameX_counter = 165;
            Sprite_Width_counter = 78;
            CANVAS_HEIGHT_counter = -1;
            dy_counter = 5;
          }
          else if (FrameX == 9) {
            FrameX_counter = 215;
            Sprite_Width_counter = 85;
            CANVAS_HEIGHT_counter = 0;
          }
          if (FrameX > 9) {
            temp = true;
            FrameX = 0;
            FrameX_counter = 0;
            Sprite_Width_counter = 0;
            CANVAS_HEIGHT_counter = 15;
            StaggerFrames = 4;
            dy = start_y;
            dy_counter = 0;
          }
        }
        else {
          if (FrameX == 1) {
            FrameX++;
          }


          if (FrameX == 0) {
            FrameX_counter = 0;
            Sprite_Width_counter = 0;
            CANVAS_HEIGHT_counter = 15;
          }
          else if (FrameX == 1) {
            FrameX_counter = 0;
            Sprite_Width_counter = 15;
            CANVAS_HEIGHT_counter = 12;
          }
          else if (FrameX == 2) {
            Sprite_Width_counter = 30;
            CANVAS_HEIGHT_counter = 9;
          }
          else if (FrameX == 3) {
            FrameX_counter = 10;
            Sprite_Width_counter = 35;
            CANVAS_HEIGHT_counter = 8;
          }
          else if (FrameX == 4) {
            FrameX_counter = 30;
            Sprite_Width_counter = 47;
            CANVAS_HEIGHT_counter = 5;
          }
          else if (FrameX == 5) {
            FrameX_counter = 53;
            Sprite_Width_counter = 57;
            CANVAS_HEIGHT_counter = 4;
          }
          else if (FrameX == 6) {
            FrameX_counter = 85;
            Sprite_Width_counter = 63;
            CANVAS_HEIGHT_counter = 3;
          }
          else if (FrameX == 7) {
            FrameX_counter = 120;
            Sprite_Width_counter = 74;
            CANVAS_HEIGHT_counter = 2;
          }
          else if (FrameX == 8) {
            FrameX_counter = 165;
            Sprite_Width_counter = 78;
            CANVAS_HEIGHT_counter = 1;
          }
          else if (FrameX == 9) {
            FrameX_counter = 215;
            Sprite_Width_counter = 85;
            CANVAS_HEIGHT_counter = 0;
          }
          if (FrameX > 9) {
            FrameX = 0;
            FrameX_counter = 0;
            Sprite_Width_counter = 0;
            CANVAS_HEIGHT_counter = 15;
          }
        }




      }
      if (value) {

        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        // dx++;
        // if (dx == end_x) {
        //   value = false;
        //   console.log("right done");
        //   resolve(true);
        // }
      }
      if (!portal_status) {
        value = false;
        cancelAnimationFrame(animate);
        console.log("portal rotate done");
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        resolve(true);
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()


  })

}

var doctor_portal_move_done=false;

async function doctor_portal_move_check(){
  return new Promise((resolve, reject) => {
    let intervalid=setInterval(()=>{
      if(doctor_portal_move_done){
        clearInterval(intervalid);
        resolve(true);
      }
      else{
        console.log("not done");
      }
    },500)
  });
}

async function doctor_portal_move() {
  document.getElementById('canvas7').getContext('2d').clearRect(0, 0, 480, 400);
  portal_status = true;
  doctor_portal_move_done=false;
  let start_x = path[0].from[0];
  let start_y = path[0].from[1];
  let end_x = path[path.length - 1].to[0];
  let end_y = path[path.length - 1].to[1];
  if (path[0].direction == "right" || path[0].direction == "up") {
    doctor_portal_rotate(start_x, start_y, end_x, end_y, 4, "in", "right");
  }
  else {
    doctor_portal_rotate(start_x, start_y, end_x, end_y, 4, "in", "left");
  }
  if (path[path.length - 1].direction == "right" || path[path.length - 1].direction == "up") {
    doctor_portal_rotate(end_x - 40, start_y, end_x, end_y, 5, "out", "right");
  }
  else {
    doctor_portal_rotate(end_x - 40, start_y, end_x, end_y, 5, "out", "left");
  }
  if (path[0].direction == "right" || path[0].direction == "up") {
    await doctor_hand_rotate(start_x, start_y, end_x, end_y, "right");
    await doctor_right_in_through_portal(start_x, start_y, end_x, end_y);
    await doctor_portal_move_check();
    console.log("doctor portal move done");
  }
  else {
    await doctor_hand_rotate(start_x, start_y, end_x, end_y, "left");
    await doctor_left_in_through_portal(start_x, start_y, end_x, end_y);
    await doctor_portal_move_check();
    console.log("doctor portal move done");
  }

}

async function doctor_right_in_through_portal(start_x, start_y, end_x, end_y) {
  return new Promise(async function (resolve) {
    let canvas = document.getElementById("canvas6");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = canvas.height = 400;
    let CANVAS_WIDTH = canvas.width = 480;

    let playerImage = new Image();
    playerImage.src = 'DoctorStrange-anime1.png';
    let Sprite_Width = 100;
    let Sprite_Height = 137;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 2;
    let moveFrames = 0;
    let FrameX_counter = 0;
    let temp = false;
    let temp2 = false;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawImage(playerImage, FrameX-FrameX_counter, FrameY * Sprite_Height, Sprite_Width, Sprite_Height, dx, dy, CANVAS_WIDTH - 445, CANVAS_HEIGHT - 370);
    // await hold(4000);
    console.log("right in start")
    for (let j = 0; j < speed; j++) {

      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(playerImage, FrameX - FrameX_counter, FrameY * Sprite_Height, Sprite_Width, Sprite_Height, dx, dy, CANVAS_WIDTH - 445, CANVAS_HEIGHT - 370);
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 8) {
          FrameY = 0;
        }
      }
      if (value) {

        requestAnimationFrame(animate);
      }

      if (moveFrames % moveStagger == 0) {
        if (temp == false) {
          value = false;
          setTimeout(function () {
            value = true;
            temp = true;
            animate();
          }
            , 1000);
        }

        dx++;
        if (FrameX_counter < Sprite_Width) {

          if (dx >= start_x + 15) {
            FrameX_counter++;
            dx--;
            if (temp2 == false) {
              temp2 = true;
              if (path[path.length - 1].direction == "right" || path[path.length - 1].direction == "up") {

                doctor_right_out_through_portal(start_x, start_y, end_x, end_y);
              } else {
                doctor_left_out_through_portal(start_x, start_y, end_x, end_y);
              }
            }
          }
        }
        else {
          value = false;
          console.log("right in done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()

  })
}


async function doctor_right_out_through_portal(start_x, start_y, end_x, end_y) {
  return new Promise(async function (resolve) {
    let canvas = document.getElementById("canvas7");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = canvas.height = 400;
    let CANVAS_WIDTH = canvas.width = 480;

    let playerImage = new Image();
    playerImage.src = 'DoctorStrange-anime1.png';
    let Sprite_Width = 100;
    let Sprite_Height = 137;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = end_x + 3;
    let dy = end_y;
    let moveStagger = 2;
    let moveFrames = 0;
    let FrameX_counter = 100;
    let temp = false;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    // await hold(4000);
    console.log("right out start");
    for (let j = 0; j < speed; j++) {

      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(playerImage, FrameX + FrameX_counter, FrameY * Sprite_Height, Sprite_Width, Sprite_Height, dx, dy, CANVAS_WIDTH - 445, CANVAS_HEIGHT - 370);
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 8) {
          FrameY = 0;
        }
      }
      if (value) {

        requestAnimationFrame(animate);
      }

      if (moveFrames % moveStagger == 0) {

        dx++;
        if (FrameX_counter >= 0) {
          FrameX_counter--;

        }
        else {
          dx++;
        }
        dx--;
        if (dx >= end_x + 10) {
          value = false;
          console.log("right out done");
          portal_status = false;
          doctor_portal_move_done=true;
          resolve(true);

        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()

  })
}



async function doctor_left_in_through_portal(start_x, start_y, end_x, end_y) {
  return new Promise(async function (resolve) {
    let canvas = document.getElementById("canvas6");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = canvas.height = 400;
    let CANVAS_WIDTH = canvas.width = 480;

    let playerImage = new Image();
    playerImage.src = 'DoctorStrange-anime2.png';
    let Sprite_Width = 127;
    let Sprite_Height = 143;
    let FrameX = 0;
    let FrameY = 2;
    let GameFrames = 0;
    let StaggerFrames = 12;
    let dx = start_x + 8;
    let dy = start_y;
    let moveStagger = 2;
    let moveFrames = 0;
    let FrameX_counter = 0;
    let temp = false;
    let temp2 = false;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawImage(playerImage, FrameX-FrameX_counter, FrameY * Sprite_Height, Sprite_Width, Sprite_Height, dx, dy, CANVAS_WIDTH - 445, CANVAS_HEIGHT - 370);
    // await hold(4000);
    console.log("left in start");
    for (let j = 0; j < speed; j++) {

      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(playerImage, FrameX + FrameX_counter, FrameY * Sprite_Height, Sprite_Width, Sprite_Height, dx, dy, CANVAS_WIDTH - 445, CANVAS_HEIGHT - 370);
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 3) {
          FrameY = 1;
        }
      }
      if (value) {

        requestAnimationFrame(animate);
      }

      if (moveFrames % moveStagger == 0) {
        if (temp == false) {
          value = false;
          setTimeout(function () {
            value = true;
            temp = true;
            animate();
          }
            , 1000);
        }

        dx--;
        if (FrameX_counter < Sprite_Width) {

          if (dx <= start_x) {
            FrameX_counter++;
            dx++;
            if (temp2 == false) {
              temp2 = true;
              if (path[path.length - 1].direction == "left" || path[path.length - 1].direction == "down")
                doctor_left_out_through_portal(start_x, start_y, end_x, end_y);
              else {
                doctor_right_out_through_portal(start_x, start_y, end_x, end_y);
              }
            }
          }
        }
        else {
          value = false;
          console.log("left in done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()

  })
}



async function doctor_left_out_through_portal(start_x, start_y, end_x, end_y) {
  return new Promise(async function (resolve) {
    let canvas = document.getElementById("canvas7");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = canvas.height = 400;
    let CANVAS_WIDTH = canvas.width = 480;

    let playerImage = new Image();
    playerImage.src = 'DoctorStrange-anime2.png';
    let Sprite_Width = 127;
    let Sprite_Height = 143;
    let FrameX = 0;
    let FrameY = 2;
    let GameFrames = 0;
    let StaggerFrames = 12;
    let dx = end_x + 9;
    let dy = end_y;
    let moveStagger = 2;
    let moveFrames = 0;
    let FrameX_counter = 115;
    let temp = false;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    // await hold(4000);
    console.log("left out start");
    for (let j = 0; j < speed; j++) {

      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(playerImage, FrameX - FrameX_counter, FrameY * Sprite_Height, Sprite_Width, Sprite_Height, dx, dy, CANVAS_WIDTH - 445, CANVAS_HEIGHT - 370);
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 3) {
          FrameY = 1;
        }
      }
      if (value) {

        requestAnimationFrame(animate);
      }

      if (moveFrames % moveStagger == 0) {

        dx--;
        if (FrameX_counter >= 0) {
          FrameX_counter--;

        }
        else {
          dx--;
        }
        dx++;
        if (dx == end_x) {
          value = false;
          console.log("left out done");
          portal_status = false;
          doctor_portal_move_done=true;
          resolve(true);

        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()

  })
}



async function doctor_right_move(start_x, start_y, end_x, end_y) {
  return new Promise(function (resolve) {
    let canvas = document.getElementById("canvas6");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "DoctorStrange-anime1.png";
    let Sprite_Width = 100;
    let Sprite_Height = 137;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;

    for (let j = 0; j < speed; j++) {
      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 365
      );
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 8) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dx++;
        if (dx == end_x) {
          value = false;
          console.log("right done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function doctor_left_move(start_x, start_y, end_x, end_y) {
  return new Promise(function (resolve) {
    let canvas = document.getElementById("canvas6");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "DoctorStrange-anime2.png";
    let Sprite_Width = 127;
    let Sprite_Height = 143;
    let FrameX = 0;
    let FrameY = 2;
    let GameFrames = 0;
    let StaggerFrames = 12;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 365
      );
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 3) {
          FrameY = 1;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dx--;
        if (dx == end_x) {
          value = false;
          console.log("left done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function doctor_down_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas6");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "DoctorStrange-anime3.png";
    let Sprite_Width = 137;
    let Sprite_Height = 150;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 365
      );
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 8) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dy++;
        if (dy == end_y) {
          value = false;
          console.log("down done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function doctor_up_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas6");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "DoctorStrange-anime3.png";
    let Sprite_Width = 137;
    let Sprite_Height = 150;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 365
      );
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 8) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dy--;
        if (dy == end_y) {
          value = false;
          console.log("up done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Iron_right_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "IronMan-anime1.png";
    let Sprite_Width = 100;
    let Sprite_Height = 141;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 430,
        CANVAS_HEIGHT - 360
      );

      Sprite_Height = 143;
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 11) {
          FrameY = 0;
        }
        if (FrameY % 3 == 0) {
          Sprite_Height + 1;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dx++;
        if (dx == end_x) {
          value = false;
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}
async function Iron_left_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "IronMan-anime2.png";
    let Sprite_Width = 100;
    let Sprite_Height = 141;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 430,
        CANVAS_HEIGHT - 360
      );

      Sprite_Height = 143;
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 11) {
          FrameY = 0;
        }
        if (FrameY % 3 == 0) {
          Sprite_Height + 1;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dx--;
        if (dx == end_x) {
          value = false;
          console.log("left done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Iron_up_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "IronMan-anime3.png";
    let Sprite_Width = 127;
    let Sprite_Height = 184;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 355
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 3) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dy--;
        if (dy == end_y) {
          value = false;
          console.log("up done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Iron_down_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "IronMan-anime7.png";
    let Sprite_Width = 105;
    let Sprite_Height = 139;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 438,
        CANVAS_HEIGHT - 365
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 3) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dy++;
        if (dy == end_y) {
          value = false;
          console.log("up done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function America_right_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "Captain-America Anime1.png";
    let Sprite_Width = 126;
    let Sprite_Height = 180;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 12;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 426,
        CANVAS_HEIGHT - 355
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 8) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dx++;
        if (dx == end_x) {
          value = false;
          console.log("right done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function America_left_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "Captain-America Anime2.png";
    let Sprite_Width = 126;
    let Sprite_Height = 180;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 12;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 426,
        CANVAS_HEIGHT - 355
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 8) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dx--;
        if (dx == end_x) {
          value = false;
          console.log("left done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function America_up_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "Captain-America Anime4.png";
    let Sprite_Width = 124;
    let Sprite_Height = 178;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 428,
        CANVAS_HEIGHT - 360
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 4) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dy--;
        if (dy == end_y) {
          value = false;
          console.log("up done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function America_down_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "Captain-America Anime5.png";
    let Sprite_Width = 167;
    let Sprite_Height = 186;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 2;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height + 40,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 423,
        CANVAS_HEIGHT - 350
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 8) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dy++;
        if (dy == end_y) {
          value = false;
          console.log("down done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Thor_right_hammer_spin(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      value = false;
      resolve(true);
    }, 1000);
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "thor-anime3.png";
    let Sprite_Width = 206;
    let Sprite_Height = 144;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 365
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 6) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        // dx++;
        // if (dx == end_x) {
        //   value=false;
        //   console.log("right done");
        //   resolve(true);
        // }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Thor_right_fly(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "thor-anime4.png";
    let Sprite_Width = 252;
    let Sprite_Height = 128;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      // ctx.strokeRect(dx,dy,48,40);
      ctx.save();
      ctx.translate(dx, dy);
      ctx.rotate((-20 * Math.PI) / 180);
      ctx.translate(-dx, -dy);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx - 5,
        dy + 10,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 365
      );
      ctx.restore();
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 1) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dx++;
        if (dx == end_x) {
          value = false;
          console.log("right done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Thor_right_fly2(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "thor-anime6.png";
    let Sprite_Width = 224;
    let Sprite_Height = 170;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 13;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy - 6,
        CANVAS_WIDTH - 426,
        CANVAS_HEIGHT - 360
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        // if (FrameY > 2) {
        //  FrameX=0;
        // }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        if (FrameY == 2) {
          value = false;
          resolve(true);
        }
        // dx++;
        // if (dx == end_x) {
        //   value=false;
        //   console.log("right done");
        //   resolve(true);
        // }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Thor_right_move(start_x, start_y, end_x, end_y) {
  return new Promise(async (resolve, reject) => {
    await Thor_right_hammer_spin(start_x, start_y, end_x, end_y);
    await Thor_right_fly(start_x, start_y, end_x, end_y);
    await Thor_right_fly2(end_x, end_y, end_x, end_y);
    console.log("right done");
    resolve(true);
  });
}

async function Thor_left_hammer_spin(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      value = false;
      resolve(true);
    }, 1000);
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "thor-anime3.png";
    let Sprite_Width = 206;
    let Sprite_Height = 144;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        -dx - 48,
        dy,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 365
      );
      // ctx.restore();
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 6) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        // dx++;
        // if (dx == end_x) {
        //   value=false;
        //   console.log("right done");
        //   resolve(true);
        // }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Thor_left_fly(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "thor-anime8.png";
    let Sprite_Width = 252;
    let Sprite_Height = 128;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      // ctx.strokeRect(dx,dy,48,40);

      ctx.save();
      ctx.translate(dx, dy);
      ctx.rotate((20 * Math.PI) / 180);
      ctx.translate(-dx, -dy);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx + 5,
        dy - 10,
        CANVAS_WIDTH - 432,
        CANVAS_HEIGHT - 365
      );
      ctx.restore();
      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 1) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dx--;
        if (dx == end_x) {
          value = false;
          console.log("right done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Thor_left_fly2(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "thor-anime6.png";
    let Sprite_Width = 224;
    let Sprite_Height = 170;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 13;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.save();
      ctx.scale(-1, 1);

      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        -dx - 48,
        dy - 6,
        CANVAS_WIDTH - 426,
        CANVAS_HEIGHT - 360
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        // if (FrameY > 2) {
        //  FrameX=0;
        // }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        if (FrameY == 2) {
          value = false;
          resolve(true);
        }
        // dx++;
        // if (dx == end_x) {
        //   value=false;
        //   console.log("right done");
        //   resolve(true);
        // }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Thor_left_move(start_x, start_y, end_x, end_y) {
  return new Promise(async (resolve, reject) => {
    await Thor_left_hammer_spin(start_x, start_y, end_x, end_y);
    await Thor_left_fly(start_x, start_y, end_x, end_y);
    await Thor_left_fly2(end_x, end_y, end_x, end_y);
    console.log("left done");
    resolve(true);
  });
}

async function Thor_up_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "thor-anime7.png";
    let Sprite_Width = 189;
    let Sprite_Height = 196;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy,
        CANVAS_WIDTH - 426,
        CANVAS_HEIGHT - 355
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 2) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dy--;
        if (dy == end_y) {
          value = false;
          console.log("right done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

async function Thor_down_move(start_x, start_y, end_x, end_y) {
  return new Promise((resolve, reject) => {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    let CANVAS_HEIGHT = (canvas.height = 400);
    let CANVAS_WIDTH = (canvas.width = 480);

    let playerImage = new Image();
    playerImage.src = "thor-anime7.png";
    let Sprite_Width = 189;
    let Sprite_Height = 196;
    let FrameX = 0;
    let FrameY = 0;
    let GameFrames = 0;
    let StaggerFrames = 8;
    let dx = start_x;
    let dy = start_y;
    let moveStagger = 1;
    let moveFrames = 0;

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var value = true;
    for (let j = 0; j < speed; j++) {
      animate();
    }
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(
        playerImage,
        0,
        FrameY * Sprite_Height,
        Sprite_Width,
        Sprite_Height,
        dx,
        dy - 5,
        CANVAS_WIDTH - 426,
        CANVAS_HEIGHT - 355
      );

      if (GameFrames % StaggerFrames == 0) {
        FrameY++;
        if (FrameY > 2) {
          FrameY = 0;
        }
      }
      if (value) {
        requestAnimationFrame(animate);
      }
      if (moveFrames % moveStagger == 0) {
        dy++;
        if (dy == end_y) {
          value = false;
          console.log("right done");
          resolve(true);
        }
      }

      GameFrames++;
      moveFrames++;
    }
    // animate()
  });
}

function path_calculator(a, b) {
  let source = a;
  let destination = b;
  path = [];
  if (source < destination) {
    for (let i = source; i < destination; i++) {
      let dir, from, to;
      let next = i + 1;
      if (grid_coordinates[i].x < grid_coordinates[next].x) {
        dir = "right";
      } else if (grid_coordinates[i].x > grid_coordinates[next].x) {
        dir = "left";
      } else if (grid_coordinates[i].y < grid_coordinates[next].y) {
        dir = "down";
      } else if (grid_coordinates[i].y > grid_coordinates[next].y) {
        dir = "up";
      }

      if (path.length == 0) {
        path.push({
          from: [grid_coordinates[i].x, grid_coordinates[i].y],
          to: [grid_coordinates[next].x, grid_coordinates[next].y],
          direction: dir
        });
      } else {
        if (path[path.length - 1].direction == dir) {
          path[path.length - 1].to = [
            grid_coordinates[next].x,
            grid_coordinates[next].y
          ];
        } else {
          path.push({
            from: [grid_coordinates[i].x, grid_coordinates[i].y],
            to: [grid_coordinates[next].x, grid_coordinates[next].y],
            direction: dir
          });
        }
      }
    }
  } else {
    for (let i = source; i > destination; i--) {
      let dir, from, to;
      let next = i - 1;
      if (grid_coordinates[i].x < grid_coordinates[next].x) {
        dir = "right";
      } else if (grid_coordinates[i].x > grid_coordinates[next].x) {
        dir = "left";
      } else if (grid_coordinates[i].y < grid_coordinates[next].y) {
        dir = "down";
      } else if (grid_coordinates[i].y > grid_coordinates[next].y) {
        dir = "up";
      }

      if (path.length == 0) {
        path.push({
          from: [grid_coordinates[i].x, grid_coordinates[i].y],
          to: [grid_coordinates[next].x, grid_coordinates[next].y],
          direction: dir
        });
      } else {
        if (path[path.length - 1].direction == dir) {
          path[path.length - 1].to = [
            grid_coordinates[next].x,
            grid_coordinates[next].y
          ];
        } else {
          path.push({
            from: [grid_coordinates[i].x, grid_coordinates[i].y],
            to: [grid_coordinates[next].x, grid_coordinates[next].y],
            direction: dir
          });
        }
      }
    }
  }
}

// dice_roll();

async function doctor_move() {
  for (let i = 0; i < path.length; i++) {
    if (path[i].direction == "right") {
      await doctor_right_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "left") {
      await doctor_left_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "up") {
      await doctor_up_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "down") {
      await doctor_down_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    }
  }
  // active_dice();
}

async function Iron_move() {
  for (let i = 0; i < path.length; i++) {
    if (path[i].direction == "right") {
      await Iron_right_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "left") {
      await Iron_left_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "up") {
      await Iron_up_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "down") {
      await Iron_down_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    }
  }
  // active_dice();
}

async function America_move() {
  for (let i = 0; i < path.length; i++) {
    if (path[i].direction == "right") {
      await America_right_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "left") {
      await America_left_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "up") {
      await America_up_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "down") {
      await America_down_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    }
  }
  // active_dice();
}

async function Thor_move() {
  for (let i = 0; i < path.length; i++) {
    if (path[i].direction == "right") {
      await Thor_right_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "left") {
      await Thor_left_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "up") {
      await Thor_up_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    } else if (path[i].direction == "down") {
      await Thor_down_move(
        path[i].from[0],
        path[i].from[1],
        path[i].to[0],
        path[i].to[1]
      );
    }
  }
  // active_dice();
}

// function GameStart(){

//   if(player1_data.position!=100 && player2_data.position!=100 && player3_data.position!=100 && player4_data.position!=100){

//   }

// }
