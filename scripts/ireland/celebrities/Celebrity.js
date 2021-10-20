import { useCelebrities } from "../celebrities/CelebritiesDataProvider.js"

export const celebrity = (celebrity) => {
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
      <img src="${celebrity.image}" alt="${celebrity.name}">
      </svg>

      <div class="card-body">
        <h2>${celebrity.name}</h2>
        <p class="card-text">
          ${celebrity.description}
        </p>
        <h6>Place of Birth</h6>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <small class="text-muted">${celebrity.birthPlace}</small>
        </div>
      </div>
    </div>
  </div>
    `
}