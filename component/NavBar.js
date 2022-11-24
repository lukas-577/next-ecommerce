import Link from "next/link";
export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar fixed-top">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    Duda
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href="/contacto">
                                Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href="/">
                                Home
                            </Link>
                        </li>
                        {/* <li class="nav-item">
                  <a class="nav-link active colorTexto" href="#">eneable</a>
                </li>  */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}