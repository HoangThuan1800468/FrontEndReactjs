import CardProduct1 from "./CardProduct1";
const MainBanner4 = () =>{
    return(
        <>
        <div className="control-1">
            <p>Popular</p>
            <button type="button" className="see-all">
                <p>See More  ˃˃</p>
            </button>
        </div>
        <div className="banner4-cart">
            <CardProduct1 img="/media/img/37.jpg" name="Isekai #3683" infor="Isekai Meta" price="0,69" price1="($1.08,84)"  sale="1.089,84"/>
            <CardProduct1 img="/media/img/38.jpg" name="Pop It Punk #18431" infor="Pop It Punks" price="0,69" price1="($1.08,84)" sale="1.089,84"/>
            <CardProduct1 img="/media/img/39.jpg" name="Angry Ape #2591" infor="Angry Ape Army" price="0,69" price1="($1.08,84)" sale="1.089,84"/>
            <CardProduct1 img="/media/img/40.jpg" name="Everybody #8122" infor="EVERYBODYS" price="0,69" price1="($1.08,84)" sale="1.089,84"/>
            <CardProduct1 img="/media/img/41.jpg" name="YuGiYn #8755" infor="YuGiYn" price="0,69" price1="($1.08,84)" sale="1.089,84"/>
            <CardProduct1 img="/media/img/42.jpg" name="Queen of Ether" infor="Art by RL" price="0,69" price1="($1.08,84)" sale="1.089,84"/>
            <CardProduct1 img="/media/img/43.jpg" name="PEC Friends #3400" infor="PECFriends" price="0,69" price1="($1.08,84)" sale="1.089,84"/>
            <CardProduct1 img="/media/img/44.jpg" name="Nonsense" infor="Forms + Shapes by Peter Tarka" price="0,69" price1="($1.08,84)" sale="1.089,84"/>
        </div>
        
        </>
    )
};
export default MainBanner4;