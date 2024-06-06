const water = ["salt", "dirt", "calcite", "uranium", "rubber"];
const notOkayWater = ["uranium", "dirt"];

document.getElementById("filterButton").addEventListener("click", filterWater);

function filterWater() {
  const bucketContent = document.getElementById("bucketContent");
  const jugContent = document.getElementById("jugContent");
  const filterButton = document.getElementById("filterButton");

  // Add wringing effect to the button
  filterButton.classList.add("wring");

  // Add pouring effect to the button
  addPourParticles(filterButton);

  // After wringing effect ends, proceed with filtering
  setTimeout(() => {
    filterButton.classList.remove("wring");

    // Display water array in the bucket
    bucketContent.innerHTML = water.join(", ");
    bucketContent.style.opacity = 1;

    // Add shake effect to the bucket
    const bucket = document.getElementById("bucket");
    bucket.classList.add("shake");

    // Add water particles effect
    addWaterParticles(bucket);

    // After 2 seconds, filter the water and pour into the jug
    setTimeout(() => {
      bucket.classList.remove("shake");

      // Filter out not okay water
      const filteredWater = water.filter(
        (item) => !notOkayWater.includes(item)
      );

      // Update bucket content and jug content
      bucketContent.innerHTML = notOkayWater.join(", ") + " (removed)";
      jugContent.innerHTML = filteredWater.join(", ");
      jugContent.style.opacity = 1;

      // Add water particles to the jug
      addWaterParticles(jug);
    }, 2000);
  }, 1000); // Wringing animation duration
}

function addPourParticles(container) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "pour-particle";
    particle.style.left = `${Math.random() * 100}%`;
    container.appendChild(particle);

    // Remove particle after animation ends
    setTimeout(() => {
      particle.remove();
    }, 1000); // Duration of pour animation
  }
}

function addWaterParticles(container) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "water-particle";
    particle.style.left = `${Math.random() * 100}%`;
    container.appendChild(particle);

    // Remove particle after animation ends
    setTimeout(() => {
      particle.remove();
    }, 2000);
  }
}
