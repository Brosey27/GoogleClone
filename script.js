const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        window.open(googleSearchURL, "_blank");
    }
});
