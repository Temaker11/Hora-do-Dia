function carregar() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 5 && hora < 12) {
    // Bom dia
    img.src = "./img/dia .png";
    document.body.style.background = "#4563f7";
  } else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = "./img/tarde.png";
    document.body.style.background = "#f1f502";
  } else if ((hora >= 19 && hora <= 23) || (hora >= 0 && hora <= 4)) {
    // Boa noite
    img.src = "./img/noite .png";
    document.body.style.background = "#111442";
  }
}
