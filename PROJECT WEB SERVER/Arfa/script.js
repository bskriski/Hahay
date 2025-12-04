document.getElementById("add-skill").addEventListener("click", function() {
    const skillText = document.getElementById("new-skill").value;

    if (skillText.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = skillText;
        li.classList.add("fade-in");
        document.getElementById("skill-list").appendChild(li);

        document.getElementById("new-skill").value = "";
    }
});
