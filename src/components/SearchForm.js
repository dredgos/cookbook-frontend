
const SearchForm = () => {
    return (
        <form>
            <section>
                <label htmlFor="easy">Easy</label>
                <input type="checkbox" id="easy" name="easy" value="easy"/>
                <label htmlFor="medium">Medium</label>
                <input type="checkbox" id="medium" name="medium" value="medium"/>
                <label htmlFor="hard">Hard</label>
                <input type="checkbox" id="hard" name="hard" value="hard"/>
            </section>
            <label htmlFor="time">Time (mins)</label>
            <input type="number" />
            <section>
                <label htmlFor="beef">Beef</label>
                <input type="checkbox" id="beef" name="beef" value="beef"/>
                <label htmlFor="chicken">Chicken</label>
                <input type="checkbox" id="chicken" name="chicken" value="chicken"/>
                <label htmlFor="lamb">Lamb</label>
                <input type="checkbox" id="lamb" name="lamb" value="lamb"/>
                <label htmlFor="pork">Pork</label>
                <input type="checkbox" id="pork" name="pork" value="pork"/>
                <label htmlFor="veggie">Veggie</label>
                <input type="checkbox" id="veggie" name="veggie" value="veggie"/>
            </section>       
            <input type="submit" value="Find Meals"/>            
        </form>
        
    );
};

export default SearchForm;