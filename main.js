let bioList = document.querySelectorAll(".bio_list li");
let texts = document.querySelectorAll(".texts div");

bioList.forEach(link => {
    link.addEventListener("click", function() {
        // Remove 'active' class from all list items
        bioList.forEach(link => link.classList.remove("active"));
        // Add 'active' class to the clicked link
        this.classList.add("active");

        // Get the target text based on the clicked link
        let targetId = this.getAttribute("data-target");

        // Remove 'active_text' class from all text divs
        texts.forEach(text => text.classList.remove("active_text"));

        // Add 'active_text' class to the corresponding text div
        document.getElementById(targetId).classList.add("active_text");
    });
});
