// filter buttons
document.querySelectorAll(".all-jobs").forEach(element => {
  element.addEventListener("click", function(event) {
    const all = document.getElementById("jobs");
   const interview = document.getElementById("interviewed");
   const reject = document.getElementById("rejected")
   all.classList.remove("hidden");
   interview.classList.add("hidden");
   reject.classList.add("hidden");
  });
});
document.querySelectorAll(".all-inter").forEach(element => {
  element.addEventListener("click", function(event) {
    const all = document.getElementById("jobs");
   const interview = document.getElementById("interviewed");
   const reject = document.getElementById("rejected")
    all.classList.add("hidden");
   interview.classList.remove("hidden");
   reject.classList.add("hidden");
  });
});
document.querySelectorAll(".all-rej").forEach(element => {
  element.addEventListener("click", function(event) {
    const all = document.getElementById("jobs");
   const interview = document.getElementById("interviewed");
   const reject = document.getElementById("rejected")
    all.classList.add("hidden");
   interview.classList.add("hidden");
   reject.classList.remove("hidden");
  });
});

// status update

document.querySelectorAll(".inter").forEach(element => {
  element.addEventListener("click", function() {
    const cards = document.querySelectorAll(".job-card")
    for (const card of cards ){
      console.log(card)
    }
  });
});

document.querySelectorAll(".rej").forEach(element => {
  element.addEventListener("click", function() {
  });
});