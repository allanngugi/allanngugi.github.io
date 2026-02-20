// Fade IN when page loads
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

// Smooth transition when clicking links
document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    // Only animate internal pages
    if (href && !href.startsWith("#") && !href.startsWith("http")) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = href;
            }, 400); // matches CSS timing
        });
    }
});
