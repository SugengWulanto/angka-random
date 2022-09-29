function numb(param) {
    let acak = Math.floor(Math.random() * 6) + 1;
    document.getElementById("pilihan").textContent = param;
    document.getElementById("rndm").textContent = acak;
    const element = document.getElementById("hasil");
    if (param === acak) {
      element.style.color = "green";
      element.textContent = "selamat kamu benar";
    } else {
      element.style.color = "red";
      element.textContent = "maaf kamu salah";
    }
  }