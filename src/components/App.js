import '../styles/main.scss'
import Navigation from './Navigation'
import Home from './Home'
import { BrowserRouter as Router, Route,} from 'react-router-dom';

const App = () => {

    return (
      <>
      <Router>
        <>
          <Home />
          <Navigation />
        </>
      </Router>
      </>
    )   
}
export default App;