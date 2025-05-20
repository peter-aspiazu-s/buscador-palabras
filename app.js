const searchInput = document.getElementById("search");
const content = document.getElementById("content");
const count = document.getElementById("count");


searchInput.addEventListener("input", () => {

  const originalText = content.textContent;
  const searchTerm = searchInput.value.trim();

  if(searchTerm === ""){
    content.innerHTML = originalText;
    count.textContent = "";
    return;
  }

  const regex = new RegExp(`(${searchTerm})`, "gi");

  const highlightedText = originalText.replace(regex, `<span class="highlight">$1</span>`);

  content.innerHTML = highlightedText;

  const matches = originalText.match(regex);
  const total = matches ? matches.length : 0;

  count.textContent = `🔍 Coincidencias encontradas: ${total}`;
})