document.addEventListener("DOMContentLoaded", function () {
    const scrollableStories = document.querySelector(".scrollable-stories");
    const storyContent = document.querySelector(".story-content");
    const storyText = document.querySelector(".story-text");
    const closeStoryButton = document.querySelector(".close-story");

    // Add 100 stories
    for (let i = 1; i <= 100; i++) {
        const story = document.createElement("div");
        story.className = "story";
        story.setAttribute("data-story", `Story ${i}`);
        story.textContent = `Story ${i}`;
        scrollableStories.appendChild(story);
    }

    // Expand story content
    const stories = document.querySelectorAll(".story");
    stories.forEach((story) => {
        story.addEventListener("click", function () {
            const storyData = this.getAttribute("data-story");
            storyText.textContent = storyData;
            storyContent.classList.add("active");
        });
    });

    // Close story content
    closeStoryButton.addEventListener("click", function () {
        storyContent.classList.remove("active");
    });
});
