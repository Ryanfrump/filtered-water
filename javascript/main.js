const water = ["salt", "dirt", "calcite", "uranium", "rubber"];
const notOkayWater = ["uranium", "dirt"];

document.getElementById("filterButton").addEventListener("click", filterWater);

function filterWater() {
  const bucketContent = document.getElementById("bucketContent");
  const jugContent = document.getElementById("jugContent");
  const filterButton = document.getElementById("filterButton");

  filterButton.classList.add("wring");

  addPourParticles(filterButton);

  setTimeout(() => {
    filterButton.classList.remove("wring");

    bucketContent.innerHTML = water.join(", ");
    bucketContent.style.opacity = 1;

    const bucket = document.getElementById("bucket");
    bucket.classList.add("shake");

    addWaterParticles(bucket);

    setTimeout(() => {
      bucket.classList.remove("shake");

      const filteredWater = water.filter(
        (item) => !notOkayWater.includes(item)
      );

      bucketContent.innerHTML = notOkayWater.join(", ") + " (removed)";
      jugContent.innerHTML = filteredWater.join(", ");
      jugContent.style.opacity = 1;

      addWaterParticles(jug);
    }, 2000);
  }, 1000);
}

function addPourParticles(container) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "pour-particle";
    particle.style.left = `${Math.random() * 100}%`;
    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}

function addWaterParticles(container) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "water-particle";
    particle.style.left = `${Math.random() * 100}%`;
    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 2000);
  }
}
