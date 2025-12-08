for (checkbox of document.getElementsByClassName("checkbox")) {
    checkbox.addEventListener("click", function () {
        if (this.clicked != "yes") {
        this.clicked = "yes";
        this.children[0].innerText = "✓"; 
        } else {
        this.clicked = "no";
        this.children[0].innerText = "";
        }
    });
}