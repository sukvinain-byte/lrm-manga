function searchManga() {
    const input = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    const cards = document.querySelectorAll(".card");

    let found = 0;

    cards.forEach(function(card) {
        const title = card
            .querySelector("h3")
            .textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (found === 0) {
        alert("ไม่พบมังงะที่ค้นหา");
    }
}

// กด Enter เพื่อค้นหา
document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            searchManga();
        }
    });
