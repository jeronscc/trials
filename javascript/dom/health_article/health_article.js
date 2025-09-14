const xhr = new XMLHttpRequest();
const url = "health_article.json";

// prepare a GET request
xhr.open("GET", url, true);
// response from the server should be in JSON format (must inform)
xhr.responseType = "json";

xhr.onload = function () {
  const articles = xhr.response.articles;
  const articlesDiv = document.getElementById("articles");

  // create HTML elements using forEach
  articles.forEach(function (article) {
    var articleDiv = document.createElement("div");
    articleDiv.classList.add("article");
    var title = document.createElement("h2");
    title.textContent = article.title;
    var description = document.createElement("p");
    description.textContent = article.description;
    var waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve:";
    var waysList = document.createElement("ul");
    article.ways_to_achieve.forEach(function (way) {
      var listItem = document.createElement("li");
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });
    var benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits:";
    var benefitsList = document.createElement("ul");
    article.benefits.forEach(function (benefit) {
      var listItem = document.createElement("li");
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);
    articlesDiv.appendChild(articleDiv);
  });
};

// send the request
xhr.send();