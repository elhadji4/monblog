const addArticleButton = document.getElementById("add-article-button");
const popupForm = document.getElementById("popup-form");
const articleForm = document.getElementById("article-form");

addArticleButton.addEventListener("click", function() {
  popupForm.style.display = "block";
});

articleForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const articleTitle = document.getElementById("article-title").value;
  const articleDate = document.getElementById("article-date").value;
  const articleTime = document.getElementById("article-time").value;
  const articleAuthor = document.getElementById("article-author").value;

  // click sur ajout articles 

  popupForm.style.display = "none";
});
