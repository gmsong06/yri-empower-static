function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach(async (el) => {
        const file = el.getAttribute("data-include");
        if (file) {
            const response = await fetch(file);
            if (response.ok) {
                el.innerHTML = await response.text();
            } else {
                el.innerHTML = "Error loading component.";
            }
        }
    });
}
window.onload = includeHTML;

window.onscroll = function () {
    const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width =
        scrollPercentage + "%";
};