function CardProduct1(props){
    return(
        <>
        <div className="cart">
            <div className="banner-4-over-img">
                <img className="banner-4-img" src={props.img} alt="..."/>
            </div>
            <div className="banner-4-infor-card">
                <p className="banner-4-namecard">{props.name}</p>
                <div className="banner-4-namecard-stick">
                    <p>{props.infor}</p>
                    <span className="icon blue-stick banner-4-iconbluestick"/>
                </div>
                <div className="banner-4-price-button">
                    <div className="banner-4-price-eth">
                        <span className="icon banner-4-icon eth"/>
                        <p className="price-card-1">{props.price} <p className="price-card-2">{props.price1}</p></p>
                    </div>
                    <button type="button" className="banner-4-button-place-a-bid">
                        <p>Place a Bid</p>
                    </button>
                </div>
            </div>
            <button type='button' className="banner-4-button-heart">
                <span className="icon banner-4-icon icon-heart"/>
            </button>
        </div>
        </>
    )
};
export default CardProduct1;

