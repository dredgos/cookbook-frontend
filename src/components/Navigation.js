import { useState } from 'react';
import SearchForm from './SearchForm';

const Navigation = () => {

    const [userSearch, setUserSearch] = useState(false)


    const handleSearch = () => (setUserSearch(!userSearch))

    return (
        <div>
            <button>See All Meals</button>
            <button onClick={handleSearch}>Search</button>
            {userSearch ? <SearchForm /> : null}            
        </div>
    );
};

export default Navigation;