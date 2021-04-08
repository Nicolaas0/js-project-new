let rgb = Math.round(Math.random() * 255);

document.getElementById('btn').addEventListener('click', function () {
    document.body.style.backgroundColor =
      "rgb(" +
      Math.round(Math.random() * 255) + "," +
      Math.round(Math.random() * 255) +
      "," +
      Math.floor(Math.random * 255) +
      ")";
});