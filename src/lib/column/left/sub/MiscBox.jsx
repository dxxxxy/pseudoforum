function MiscBox() {
    const setRandomAccentColor = () => {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        document.documentElement.style.setProperty("--accent-color", "#" + color);
    }

    return (
        <fieldset>
            <legend>Miscellaneous</legend>
            <button onClick={setRandomAccentColor}>Randomize Accent</button>
        </fieldset>
    )
}

export default MiscBox