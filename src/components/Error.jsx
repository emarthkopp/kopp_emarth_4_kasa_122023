import { Link } from 'react-router-dom'
import '../styles/Error.scss';

function Error() {
    return (
      <div>
        <div className="errorPage">
          <h2 className="errorTitle">404</h2>
          <div className="errorText">
            Oups! la page que vous demandez n'existe pas.
          </div>
          <Link to="/" className="linkError">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
    );
}
 
export default Error