export const navbar = () => {
    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img
          src="imgs/logo.png"
          alt="Green Monkey's Logo"
          width="200"
          height="200"
          class="d-inline-block align-text-center"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Bahamas.html">Bahamas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="bhutan.html">Bhutan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="portugal.html">Portugal</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
}