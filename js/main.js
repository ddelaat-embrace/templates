var baseCSSUrl = "https://ddelaat-embrace.github.io/templates/css/brands/";

var urlParams = new URLSearchParams(window.location.search);
var brand = urlParams.get("brand") || "embrace";

//--load the associated brand CSS
var cssURL = baseCSSUrl + brand + ".css";
var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = cssURL;
document.head.appendChild(linkElement);

//--append the same brand param to any existing links
document.querySelectorAll('a').forEach(linkElement => {
    const linkUrl = new URL(linkElement.href, window.location.href);
    linkUrl.searchParams.set('brand', brand);
    linkElement.href = linkUrl.toString();
});