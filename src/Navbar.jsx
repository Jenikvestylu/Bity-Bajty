import './App.css';

function Navbar() {
    return (
        <div className="Navbar">
            <nav class="navbar navbar-light" style={{ backgroundColor: 'lightblue' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://learnworthy.net/wp-content/uploads/2020/03/The-amazing-history-of-the-Data-Byte.png" alt="" width="55" height="24" class="d-inline-block align-text-top"></img>
                            Převodník bitů/bajtů
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
