function MainColChoiceBox ({data}) {
    return(
        <div id="main-col-choice-box">
            <form>
                <label htmlFor="firstSelect">Choose Category</label>
                <select name="firstSelect">
                    <option value="1">Category 1 - Coding - Computer Science</option>
                    <option value="2">Category 2 - Biology - Applied Sciences</option>
                    <option value="3">Category 3 - gaming</option>
                </select>
                <label htmlFor="secondSelect">Choose Topic</label>
                <select name="secondSelect">
                    <option value="e">The Number One Reason You Should (Do) Coding using REactJS</option>
                </select>
            </form>
        </div>
    )
}

export default MainColChoiceBox