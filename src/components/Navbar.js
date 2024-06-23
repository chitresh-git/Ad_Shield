import './css/navbar.css'


const Navbar = () => {

    return (
        <div>


<nav class="navbar navbarmain navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ad_Shield</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link" href="https://notion-one-jade.vercel.app/contact" target='_blank'>Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://notion-one-jade.vercel.app/" target='_blank'>Notion</a></li>
            <li><a class="dropdown-item" href="https://one-note-zeta.vercel.app/" target='_blank'>OneNote</a></li>
            <li><a class="dropdown-item" href="https://global-post.vercel.app/" target='_blank'>GlobalPost</a></li>
            <li><a class="dropdown-item" href="#">ShowGen</a></li>
            
          </ul>
        </li>

      </ul>

    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
