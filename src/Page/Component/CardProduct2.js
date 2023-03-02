
function CardProduct2(props){
    return(
        <>
        <div className="cart">
            <div className="banner-4-over-img">
                <img className="banner-4-img" src={props.img} alt="..."/>
                <div className="banner-5-sale">
                    <p>Last sale: {props.sale}</p>
                </div>
            </div>
            <div className="banner-4-infor-card">
                <p className="banner-4-namecard">{props.name}</p>
                <div className="banner-4-namecard-stick banner-5-namecard-stick">
                    <p>{props.infor}</p>
                    <span className="icon blue-stick banner-4-iconbluestick"/>
                </div>
                <div className="banner-4-price-button banner-5-price-button-hide">
                    <div className="banner-4-price-eth">
                        <span className="icon banner-4-icon eth"/>
                        <p className="price-card-1">{props.price1}
                            <p className="price-card-2">{props.price2}</p>
                        </p>
                        
                    </div>
                </div>
                                
            </div>
            <button type="button" className="banner-5-button-addtocard">
                <p>Add to cart</p>
            </button>
            <button type='button' className="banner-4-button-heart">
                <span className="icon banner-4-icon icon-heart"/>
            </button>
        </div>
        </>
    )
};
export default CardProduct2;