import './Produits.scss';

function Produits ({avatar,nom,categories,unites,ventes}){
 
    return(
        <tr>
            <td className="avatar"> <img src= {avatar} alt="avatar" /></td>
            <td className="nom"> {nom}</td>
            <td><button>Modifier</button></td>
            <td className="categories">{categories}</td>
            <td className="unites">{unites}</td>
            <td className="ventes">{ventes}</td>
        </tr>
    )
}

export default Produits;