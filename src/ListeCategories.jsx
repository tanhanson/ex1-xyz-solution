import './ListeCategories.scss';
import Categories from './categories';

import NomCategories from './data/categories.json';

function ListeCategories(){

    return(
      <main className='ListeCategories'>
        <h2>Catalogue</h2>
        <ul>
          {
            NomCategories.map(
              (uneCategorie) => <Categories key = {uneCategorie.id} {...uneCategorie}/>
            )
          }
        </ul>
      </main>
    );
}

export default ListeCategories;