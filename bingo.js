const cells = document.getElementsByTagName("td");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    this.classList.toggle("checked");
  });
}
