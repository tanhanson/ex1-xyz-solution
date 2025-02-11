import './Entete.scss';

function Entete(){
    return(
        <header className="Entete">
            <p>xyz</p>
            <p>Admin</p>
            <form>
                <input type="text" name="name" />
                <input type="submit" value="Connexion" />
                <input type="submit" value="Inscription" />
            </form>
        </header>
    );
}

export default Entete;