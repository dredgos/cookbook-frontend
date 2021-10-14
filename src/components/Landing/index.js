import { connect } from 'react-redux';
import LandingPage from './LandingPage';
import { getAllRecipes } from '../../data/actions/api';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllRecipes: (data) => dispatch(getAllRecipes(data)),
    };
};

export default connect(null, mapDispatchToProps)(LandingPage);