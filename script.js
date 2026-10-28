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

function updateCounters() {
  let interCount = 0;
  let rejCount = 0;

  document.querySelectorAll(".job-card").forEach(card => {
    const stats = card.querySelector(".stats");

    if (!stats) return;

    if (stats.innerText === "Interviewed") {
      interCount++;
    } else if (stats.innerText === "Rejected") {
      rejCount++;
    }
  });

  document.getElementById("total-interview").innerText = interCount;
  document.getElementById("total-rejected").innerText = rejCount;
}
document.querySelectorAll(".all-jobs").forEach(button => {
  button.addEventListener("click", function() {

    document.querySelectorAll(".job-card").forEach(card => {
      card.classList.remove("hidden");
    });

  });
});
document.getElementById("jobs").addEventListener("click", function(event) {
  const btn = event.target.closest(".inter, .rej");

  if (!btn) return;

  const card = btn.closest(".job-card");
  const status = card.querySelector(".stats");

  if (btn.classList.contains("inter")) {
    status.innerText = "Interviewed";
    status.className = "stats border border-green-500 text-green-500 inline-block px-2 py-1 font-bold bg-green-100 m-0";
  } else {
    status.innerText = "Rejected";
    status.className = "stats border border-red-500 text-red-500 inline-block px-2 py-1 font-bold bg-red-100 m-0";
  }

  updateCounters();
  applyFilter();
});
