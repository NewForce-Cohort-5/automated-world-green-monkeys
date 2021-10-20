import { useLandmarks } from "../landmarks/LandmarkDataProvider.js"

export const landmark = (landmark) => {
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
      <img src="${landmark.image}" alt="${landmark.name}">
      </svg>

      <div class="card-body">
        <h2>${landmark.name}</h2>
        <p class="card-text">
          ${landmark.description}
        </p>
        <h6>Location</h6>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <small class="text-muted">${landmark.location}</small>
        </div>
      </div>
    </div>
  </div>
    `
}