import './Categories.scss';

function Categories({nom,couleur}){

    return(
        <li className="nom" style={{backgroundColor : couleur}}>{nom}</li>
    );
}

export default Categories;