import './TableauProduits.scss';
import Produits from "./produits.jsx";
import listeProduits from './data/produits.json';

function TableauProduits(){

    return(
        <section>
            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Produit</th>
                    <th></th>
                    <th>Categories</th>
                    <th>Unités</th>
                    <th>Ventes</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            listeProduits.map(
                                (unProduit) => <Produits key = {unProduit.id} {...unProduit}/>
                            )
                        }
                   
                </tbody>
            </table>
        </section>

    );
}

export default TableauProduits;