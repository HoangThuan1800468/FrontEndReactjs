function Banner3ItemTable(props){
    return(
        <>
        <tr>
            <th scope="row">
                <div className="table-item">
                    <p>{props.number}</p>
                    <img className="table-img" src={props.img} alt="..."/> 
                    <div className="name-item">
                        <p>{props.name}</p>
                        <span className="icon blue-stick"/>
                    </div>
                </div>
            </th>
            <td className="value"><p>{props.price}</p></td>
            <td className="value"><p>{props.sale}</p></td>
        </tr>
        </>
    )
};
export default Banner3ItemTable;