import Banner3ItemTable from "./Banner3ItemTable";
const MainBanner3 = () =>{
    return(
        <>
        <div className="banner-3-control">
            <div className="banner3-choosepage">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><p className="trending">Trending</p></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><p className="top">Top</p></button>
                    </li>
                </ul>
            </div>
            <div className="banner3-choosepage button-seeall-24h">
                {/* <button type="button" className="see-all banner3">
                    <p>24h  ˅</p>
                </button> */}
                <div class="dropdown">
                    <button class="see-all banner3 btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <p>24h ˅</p>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Week</a></li>
                        <li><a class="dropdown-item" href="#">Month</a></li>
                        <li><a class="dropdown-item" href="#">Year</a></li>
                    </ul>
                </div>
                <button type="button" className="see-all banner3">
                    <p>See all ˃˃</p>
                </button>
            </div>
        </div>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="table-1">
                    <div className="table-double">
                        <table class="table table1">
                            <thead>
                            <tr className="title-table">
                                    <th className=" collection" scope="col">Collection</th>
                                    <th className=" floorprice"scope="col">Floor price</th>
                                    <th className=" volume"scope="col">Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Banner3ItemTable number="1" img="/media/img/17.jpg" name="RTFKT x RIMOWA Meta..." price="0.23 ETH" sale="1.195 ETH"/>
                                <Banner3ItemTable number="2" img="/media/img/18.jpg" name="EVERYBODYS" price="0.02 ETH" sale="201 ETH"/>
                                <Banner3ItemTable number="3" img="/media/img/19.jpg" name="DentedFeelsNFT" price="0.13 ETH" sale="62 ETH"/>
                                <Banner3ItemTable number="4" img="/media/img/20.jpg" name="Kitaro World Official" price="0.23 ETH" sale="1.195 ETH"/>
                                <Banner3ItemTable number="5" img="/media/img/21.jpg" name="Degenheim" price="0.23 ETH" sale="1.195 ETH"/>
                                
                            </tbody>
                        </table>
                        <table class="table table1">
                            <thead>
                                <tr className="title-table">
                                    <th className=" collection" scope="col">Collection</th>
                                    <th className=" floorprice"scope="col">Floor price</th>
                                    <th className=" volume"scope="col">Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Banner3ItemTable number="6" img="/media/img/22.jpg" name="Kooks by Terry Urban" price="0.23 ETH" sale="1.195 ETH"/>
                                <Banner3ItemTable number="7" img="/media/img/23.jpg" name="Terrapin Universe Her..." price="0.02 ETH" sale="201 ETH"/>
                                <Banner3ItemTable number="8" img="/media/img/24.jpg" name="Innermost by Brian M..." price="0.13 ETH" sale="62 ETH"/>
                                <Banner3ItemTable number="9" img="/media/img/25.jpg" name="ZuckBots" price="0.23 ETH" sale="1.195 ETH"/>
                                <Banner3ItemTable number="10" img="/media/img/26.jpg" name="Wizards of the Tower S..." price="0.23 ETH" sale="1.195 ETH"/>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="table-1">
                    <div className="table-double">
                        <table class="table table1">
                            <thead>
                            <tr className="title-table">
                                    <th className=" collection" scope="col">Collection</th>
                                    <th className=" floorprice"scope="col">Floor price</th>
                                    <th className=" volume"scope="col">Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Banner3ItemTable number="1" img="/media/img/27.jpg" name="Kooks by Terry Urban" price="0.23 ETH" sale="1.195 ETH"/>
                                <Banner3ItemTable number="2" img="/media/img/28.jpg" name="Terrapin Universe Her..." price="0.02 ETH" sale="201 ETH"/>
                                <Banner3ItemTable number="3" img="/media/img/29.jpg" name="Innermost by Brian M..." price="0.13 ETH" sale="62 ETH"/>
                                <Banner3ItemTable number="4" img="/media/img/30.jpg" name="ZuckBots" price="0.23 ETH" sale="1.195 ETH"/>
                                <Banner3ItemTable number="5" img="/media/img/31.jpg" name="Wizards of the Tower S..." price="0.23 ETH" sale="1.195 ETH"/>
                            </tbody>
                        </table>
                        <table class="table table1">
                            <thead>
                                <tr className="title-table">
                                    <th className=" collection" scope="col">Collection</th>
                                    <th className=" floorprice"scope="col">Floor price</th>
                                    <th className=" volume"scope="col">Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Banner3ItemTable number="6" img="/media/img/32.jpg" name="RTFKT x RIMOWA Meta..." price="0.23 ETH" sale="1.195 ETH"/>
                                <Banner3ItemTable number="7" img="/media/img/33.jpg" name="EVERYBODYS" price="0.02 ETH" sale="201 ETH"/>
                                <Banner3ItemTable number="8" img="/media/img/34.jpg" name="DentedFeelsNFT" price="0.13 ETH" sale="62 ETH"/>
                                <Banner3ItemTable number="9" img="/media/img/35.jpg" name="Kitaro World Official" price="0.23 ETH" sale="1.195 ETH"/>
                                <Banner3ItemTable number="10" img="/media/img/36.jpg" name="Degenheim" price="0.23 ETH" sale="1.195 ETH"/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default MainBanner3;