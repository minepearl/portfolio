document.addEventListener("DOMContentLoaded", function () {
    const moreButton = document.getElementById("moreButton");
    const pptList = document.getElementById("pptList");
  
    moreButton.addEventListener("click", function () {
      if (pptList.classList.contains("hidden")) {
        pptList.classList.remove("hidden");
      } else {
        pptList.classList.add("hidden");
      }
    });
  });
  