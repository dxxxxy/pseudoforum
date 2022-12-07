function ChoiceBox({data}) {
    return (
        <fieldset id="choice-box">
            <legend>Filter Posts</legend>
            <form>
                <div>
                    <label htmlFor="firstSelect">Choose Category</label>
                    <select name="firstSelect">
                        <option value="1">Category 1 - Coding - Computer Science</option>
                        <option value="2">Category 2 - Project Management</option>
                        <option value="3">Category 3 - Communication</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="secondSelect">Choose Topic</label>
                    <select name="secondSelect">
                        <option value="e">The Number One Reason You Should (Do) Coding using REactJS</option>
                    </select>
                </div>
            </form>
        </fieldset>
    )
}

export default ChoiceBox