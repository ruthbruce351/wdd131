const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}