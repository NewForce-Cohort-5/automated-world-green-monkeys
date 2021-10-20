import { useCities } from "../cities/CityDataProvider.js";

export const city = (city) => {
    return `
    <div class="col-4">
    <div class="card shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
      <img src="${city.image}" alt="${city.name}">
      </svg>

      <div class="card-body">
        <h2>${city.name}</h2>
        <p class="card-text">
          ${city.description}
        </p>
        <h6>Points of Interest</h6>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <small class="text-muted">${city.pointsOfInterest[0].name}, ${city.pointsOfInterest[1].name}</small>
        </div>
      </div>
    </div>
  </div>
    `
}