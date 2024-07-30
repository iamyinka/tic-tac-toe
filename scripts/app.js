let currentPlayerId = 0;
let players = document.querySelectorAll(".players__player--name");

console.log(players);

const modal = document.querySelector(".modal");
const player1EditBtn = document.getElementById("player-1-edit-btn");
const player2EditBtn = document.getElementById("player-2-edit-btn");
const setPlayerNameForm = document.querySelector("#set-player-name");
const playerName = document.querySelector("#player-name");
const errorMsg = document.querySelector("#error-msg");

modal.addEventListener("click", closeModal);
player1EditBtn.addEventListener("click", openPlayerConfigModal);
player2EditBtn.addEventListener("click", openPlayerConfigModal);
setPlayerNameForm.addEventListener("submit", submitPlayerNameForm);
