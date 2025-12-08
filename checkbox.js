checkboxes = document.getElementsByClassName("checkbox");
for (i = 0; i < checkboxes.length; i++) {
checkboxes[i].addEventListener("click", function () {
    if (this.clicked != "yes") {
    this.clicked = "yes";
    this.children[0].innerText = "✓"; 
    } else {
    this.clicked = "no";
    this.children[0].innerText = "";
    }
});
}