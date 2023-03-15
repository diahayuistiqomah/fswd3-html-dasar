while (true) {
  var playerChoice = prompt("Pilih Scizor, Rock, atau Paper?").toLowerCase();

  var computerChoice = Math.random();
  if (computerChoice < 0.2) {
    computerChoice = "Scizor";
  } else if (computerChoice < 0.4) {
    computerChoice = "Rock";
  } else if (computerChoice < 0.6) {
    computerChoice = "Paper";
  } else if (computerChoice < 0.8) {
    computerChoice = "scizor";
  } else {
    computerChoice = "rock";
  }

  // Membuat switch statement untuk menentukan hasil permainan
  switch (playerChoice) {
    case "scizor":
      switch (computerChoice) {
        case "Scizor":
        case "scizor":
          alert(`Computer memilih ${computerChoice} Hasilnya adalah seri!`);
          break;
        case "Rock":
        case "rock":
          alert(`Computer memilih ${computerChoice} Kamu kalah! Rock mengalahkan Scizor.`);
          break;
        case "Paper":
        case "paper":
          alert(`Computer memilih ${computerChoice} Kamu menang! Scizor mengalahkan Paper.`);
          break;
      }
      break;
    case "rock":
      switch (computerChoice) {
        case "Scizor":
        case "scizor":
          alert(`Computer memilih ${computerChoice} Kamu menang! Rock mengalahkan Scizor.`);
          break;
        case "Rock":
        case "rock":
          alert(`Computer memilih ${computerChoice} Hasilnya adalah seri!`);
          break;
        case "Paper":
        case "paper":
          alert(`Computer memilih ${computerChoice} Kamu kalah! Paper mengalahkan Rock.`);
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "Scizor":
        case "scizor":
          alert(`Computer memilih ${computerChoice} Kamu kalah! Scizor mengalahkan Paper.`);
          break;
        case "Rock":
        case "rock":
          alert(`Computer memilih ${computerChoice} Kamu menang! Paper mengalahkan Rock.`);
          break;
        case "Paper":
        case "paper":
          alert(`Computer memilih ${computerChoice} Hasilnya adalah seri!`);
          break;
      }
      break;
    default:
      alert("Pilihan yang kamu masukkan salah. Mohon pilih Scizor, Rock, atau Paper.");
      break;
  }
}
