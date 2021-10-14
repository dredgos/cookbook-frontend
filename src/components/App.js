import '../styles/main.scss'
import LandingPage from './Landing/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchForm from './SearchForm';
import AllRecipes from './AllRecipes/AllRecipes';




const App = () => {

    return (
      <>
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/search">
          <SearchForm />
        </Route>
        <Route exact path="/allrecipes">
          <AllRecipes />
        </Route>

      </Router>

      </>
    )   
}
export default App;