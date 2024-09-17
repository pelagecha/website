document.querySelectorAll(".story").forEach((story) => {
    story.addEventListener("click", function () {
        const fullScreenDiv = document.createElement("div");
        fullScreenDiv.classList.add("full-screen-story");

        const fullScreenContent = document.createElement("div");
        fullScreenContent.classList.add("full-screen-content");

        // Load the full story content (this can also be done via AJAX if needed)
        fetch(story.getAttribute("data-full-content"))
            .then((response) => response.text())
            .then((data) => {
                fullScreenContent.innerHTML = data;
                fullScreenDiv.appendChild(fullScreenContent);
                document.body.appendChild(fullScreenDiv);

                // Make it visible with transition
                setTimeout(() => fullScreenDiv.classList.add("visible"), 10);

                // Close on click outside or ESC key
                fullScreenDiv.addEventListener("click", function () {
                    fullScreenDiv.classList.remove("visible");
                    setTimeout(() => fullScreenDiv.remove(), 500);
                });

                document.addEventListener("keydown", function (event) {
                    if (event.key === "Escape") {
                        fullScreenDiv.classList.remove("visible");
                        setTimeout(() => fullScreenDiv.remove(), 500);
                    }
                });
            });
    });
});
