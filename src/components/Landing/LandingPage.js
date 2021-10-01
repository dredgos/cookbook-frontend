import Header from '../Header';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <Header />
            <div className='landing-buttons'>
                <button className="button button__primary">Search Recipes</button>
                <button className="button button__primary">See All Recipes</button>
            </div>            
        </div>
    );
};

export default LandingPage;