
const copyEmailEl = document.getElementById("copy-email");
copyEmailEl.addEventListener("click", () => {
    navigator.clipboard.writeText("heartleafhoaboard@googlegroups.com");
    copyEmailEl.innerText = "copied!";
    setTimeout(() => {
        copyEmailEl.innerText = "copy to clipboard";
    }, 2000);
});