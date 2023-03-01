import './Css/Home.css';
import './Css/Main.css'
import './Css/NavBar.css';
import './Css/SearchBar.css';
import './Css/MainBanner1.css';
import './Css/MainBanner2.css';
import './Css/MainBanner3.css';
import './Css/MainBanner4.css';
import './Css/MainBanner5.css';

import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

function Home() {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <article>
        <Main/>
    </article>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default Home;
