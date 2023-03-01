import SearchBar from "./Component/SearchBar";
import NavBarItems from "./Component/NavBarItems";
import NavBarButton from "./Component/NavBarButton";
import NavBarLogo from "./Component/NavBarLogo";
const NavBar = () =>{
    return(
        <>
        <nav className="header-navbar">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><NavBarLogo/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-search">
                            <SearchBar/>
                        </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-item-button">
                            <li className="nav-item navbar-li Home-background"><a href="#">Home</a></li>
                            <li className="nav-item navbar-li nav-item-menu"><a href="#">Explore</a></li>
                            <li className="nav-item navbar-li nav-item-menu" ><a href="#">Stats</a></li>
                            <li className="nav-item navbar-li nav-item-menu"><a href="#">Create</a></li>  
                            <div className="nav-hiden"> 
                            <li className="nav-item navbar-li nav-item-menu"><a href="#">Profile</a></li>
                            <li className="nav-item navbar-li nav-item-menu" ><a href="#">Wallet</a></li>
                            <li className="nav-item navbar-li nav-item-menu"><a href="#">Favorite</a></li>                        
                            </div>
                            <div className="navbar-3">
                                <NavBarButton/>
                            </div>
                            </ul>
                    </div>
                </div>
            </nav>
                {/* <div className="navbar-1">
                    <NavBarLogo/>
                </div>
                <div className="navbar-search">
                    <SearchBar/>
                </div>
                <div className="navbar-2">
                    <NavBarItems/>
                </div>
                <div className="navbar-3">
                    <NavBarButton/>
                </div> */}
        </nav>
        </>
    )
};
export default NavBar;