import './style.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="p-3 bg-dark text-white custom-navbar">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-md-auto">
                        <span className="logo"><i className="bi bi-cursor icon-logo"></i> <span>HuntPress</span></span>
                    </Link>
                
                    <ul className="nav ml-0">
                        <li><Link to="/" className="nav-link px-2 text-white">Product</Link></li>
                        <li><Link to="/" className="nav-link px-2 text-white">Faqs</Link></li>
                        <li><Link to="/" className="nav-link px-2 text-white">Pricing</Link></li>
                    </ul>
            
                    <div className="text-end link-action">
                        <Link type="button" to='/login' className="btn btn-outline-light me-4">Sign in</Link>
                        <Link type="button" to='/register' className="btn btn-warning">Get started</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
