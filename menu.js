console.log("HIIIIII");

let gameTypeDefaultPlayers=`  <div class="select-game-type-default-container">

<div class="select-game-type-frames">
<div class="select-game-type-default-players">
<img class="profile-pic"  src="IronMan_0-100.png" alt="oops">
<h4>IronMan</h4>
<div class="chosen-anime">
<img class="animation-pic" src="IronMan_0-100.png" alt="oops">
</div>
</div>
</div>
<div class="select-game-type-frames">
<div class="select-game-type-default-players">
<img class="profile-pic"  src="Thor22_182-0.png" alt="oops">
<h4>Thor</h4>
<div class="chosen-anime">
<img class="animation-pic" src="Thor22_182-0.png" alt="oops">
</div></div>
</div>
<div class="select-game-type-frames">
<div class="select-game-type-default-players">
<img class="profile-pic"  src="Captain America_182-2.png" alt="oops">
<h4>CaptainAmerica</h4>
<div class="chosen-anime">
<img class="animation-pic" src="Captain America_182-2.png" alt="oops">
</div>
</div>
</div>
<div class="select-game-type-frames">
<div class="select-game-type-default-players">
<img class="profile-pic"  src="DoctorStrange1_182-1.png" alt="oops">
<h4>DoctorStrange</h4>
<div class="chosen-anime">
<img class="animation-pic" src="DoctorStrange1_182-1.png" alt="oops">
</div>
</div>
</div>
</div>`;
let gameType4Players=`  <div class="select-game-type-4p-container">

<div class="select-game-type-frames">

<div class="select-game-type-4p-players">

<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="IronMan_0-100.png" alt="oops">
<h4>IronMan</h4>
<div class="chosen-anime">
<img class="animation-pic" src="IronMan_0-100.png" alt="oops">
</div>

</div>
</div>

<div class="select-game-type-frames">

<div class="select-game-type-4p-players">

<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="Thor22_182-0.png" alt="oops">
<h4>Thor</h4>
<div class="chosen-anime">
<img class="animation-pic" src="Thor22_182-0.png" alt="oops">
</div>
</div>

</div>

<div class="select-game-type-frames">

<div class="select-game-type-4p-players">

<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="Captain America_182-2.png" alt="oops">
<h4>CaptainAmerica</h4>
<div class="chosen-anime">
<img class="animation-pic" src="Captain America_182-2.png" alt="oops">
</div>

</div>
</div>


<div class="select-game-type-frames">

<div class="select-game-type-4p-players">


<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="DoctorStrange1_182-1.png" alt="oops">
<h4>DoctorStrange</h4>
<div class="chosen-anime">
<img class="animation-pic" src="DoctorStrange1_182-1.png" alt="oops">
</div>

</div>
</div>
</div>`;
let gameType3Players=` <div class="select-game-type-3p-container">

<div class="select-game-type-frames">

<div class="select-game-type-3p-players">

<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="IronMan_0-100.png" alt="oops">
<h4>IronMan</h4>
<div class="chosen-anime">
<img class="animation-pic" src="IronMan_0-100.png" alt="oops">
</div>

</div>


</div>


<div class="select-game-type-frames">
<div class="select-game-type-3p-players">

<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="Thor22_182-0.png" alt="oops">
<h4>Thor</h4>
<div class="chosen-anime">
<img class="animation-pic" src="Thor22_182-0.png" alt="oops">
</div>

</div>
</div>

<div class="select-game-type-frames">
<div class="select-game-type-3p-players">

<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="Captain America_182-2.png" alt="oops">
<h4>CaptainAmerica</h4>
<div class="chosen-anime">
<img class="animation-pic" src="Captain America_182-2.png" alt="oops">
</div>

</div>
</div>
</div>`;
let gameType2Players=` <div class="select-game-type-2p-container">
<div class="select-game-type-frames">

<div class="select-game-type-2p-players">

<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="IronMan_0-100.png" alt="oops">
<h4>IronMan</h4>
<div class="chosen-anime">
<img class="animation-pic" src="IronMan_0-100.png" alt="oops">
</div>

</div>
</div>

<div class="select-game-type-frames">
<div class="select-game-type-2p-players">

<img class="cross-icon" src="cross-icon.png" alt="x">
<img class="profile-pic"  src="Thor22_182-0.png" alt="oops">
<h4>Thor</h4>
<div class="chosen-anime">
<img class="animation-pic" src="Thor22_182-0.png" alt="oops">
</div>
</div>

</div>
</div>`;
let gameTypeDefaultBtn=document.getElementsByClassName("select-game-type-default")[0];
gameTypeDefaultBtn.addEventListener("click",()=>{
  document.getElementsByClassName("select-game-type-section-container")[0].innerHTML=`${gameTypeDefaultPlayers}`;
});
let gameType4PBtn=document.getElementsByClassName("select-game-type-4p")[0];
gameType4PBtn.addEventListener("click",()=>{
  document.getElementsByClassName("select-game-type-section-container")[0].innerHTML=`${gameType4Players}`;
});
let gameType3PBtn=document.getElementsByClassName("select-game-type-3p")[0];
gameType3PBtn.addEventListener("click",()=>{
  document.getElementsByClassName("select-game-type-section-container")[0].innerHTML=`${gameType3Players}`;
});
let gameType2PBtn=document.getElementsByClassName("select-game-type-2p")[0];
gameType2PBtn.addEventListener("click",()=>{
  document.getElementsByClassName("select-game-type-section-container")[0].innerHTML=`${gameType2Players}`;
});




