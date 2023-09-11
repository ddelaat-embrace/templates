var baseCSSUrl = "https://ddelaat-embrace.github.io/templates/css/brands/";

var urlParams = new URLSearchParams(window.location.search);
var brand = urlParams.get("brand") || "embrace";
var cssURL = baseCSSUrl + brand + ".css";

var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = cssURL;
document.head.appendChild(linkElement);