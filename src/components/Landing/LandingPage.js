import Header from '../Header';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landing-container">
            <Header />
            <div className='landing-buttons'>
                <button className="button button__primary"><Link to="/search">Search Recipes</Link></button>
                <button className="button button__primary"><Link to="/allrecipes">See All Recipes</Link></button>
            </div>            
        </div>
    );
};

export default LandingPage;