import MainBanner1 from "./Component/MainBanner1";
import MainBanner2 from "./Component/MainBanner2";
import MainBanner3 from "./Component/MainBanner3";
import MainBanner4 from "./Component/MainBanner4";
import MainBanner5 from "./Component/MainBanner5";

const Main = () =>{
    return(
        <>
        <div className="contain">
            <div className="banner banner-1">
                <MainBanner1/>
            </div>
            <div className="banner-2">
               <MainBanner2/>
            </div>
            <div className="banner-3">
                <MainBanner3/>
            </div>
            <div className="banner-4">
                <MainBanner4/>
            </div>
            <div className="banner-5">
                <MainBanner5/>
            </div>
        </div>
        </>
    )
};
export default Main;