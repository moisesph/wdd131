const displayVisit = document.querySelector(".visits");

let visitsNum = Number(window.localStorage.getItem("reviews-counts")) || 0;

if (visitsNum! == 0) {
    displayVisit.textContent = numVisits;
} else {
    displayVisit.textContent = `Welcome, this is your first review!!`
}

visitsNum++;

localStorage.setItem("reviews-counts, visitsNumb")


