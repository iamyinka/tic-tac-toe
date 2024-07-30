function openPlayerConfigModal(e) {
  currentPlayerId += Number(e.target.dataset["playerid"]);
  console.log(currentPlayerId);
  modal.style.display = "flex";
}

function closeModal(e) {
  if (e.target.classList.contains("modal")) {
    modal.style.display = "none";
    errorMsg.textContent = "";
    playerName.value = "";
    setPlayerNameForm.firstElementChild.classList.remove("error");
    currentPlayerId = 0;
  }
}

function submitPlayerNameForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newPlayerName = formData.get("player_name").trim();
  //   console.log("New player name: ", newPlayerName);

  if (!newPlayerName) {
    e.target.firstElementChild.classList.add("error");
    errorMsg.textContent = "Please enter a valid player name!";
  } else {
    if (currentPlayerId === 1) {
      players[0].textContent = newPlayerName;
    } else if (currentPlayerId === 2) {
      players[1].textContent = newPlayerName;
    }
    modal.style.display = "none";
    playerName.value = "";
    currentPlayerId = 0;
  }
}
