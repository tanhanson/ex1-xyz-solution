import './Appli.scss';
import Entete from './entete.jsx';
import ListeCategories from './ListeCategories.jsx';
import TableauProduits from './tableauProduits.jsx';


function Appli() {

  return (
    <div className='Appli'>
      <Entete/>
      <ListeCategories/>
      <TableauProduits/>
    </div>
  
  )
}

export default Appli;
