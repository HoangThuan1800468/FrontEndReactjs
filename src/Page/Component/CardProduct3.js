function CardProduct3(props){
    return(
        <>
        <div className="card-banner-2">
            <img className="banner-2-img" src={props.img} alt="..."/>
            <img className="banner-2-avatar" src={props.avt} alt="..."/>
            <button type="button" className="banner-2-nameicon">
                <p>TeamAzuki</p>
                <span className="icon blue-stick"/>
            </button>
            <button type="button" className="banner-2-nameimage">
                <p>BEANZ Offical</p>
            </button>
        </div>
        </>
    )
};
export default CardProduct3;