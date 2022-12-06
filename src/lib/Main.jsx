import MainColumn from "./MainColumn"
import SideColumn from "./SideColumn"
import SideColumnEnd from "./SideColumnEnd"

function Header () {
    return(
        <div id="header">
            <p>Pseudo Forum</p>
            <form>
                <input type="text" placeholder="search the entire forum"></input>
            </form>
        </div>
    )
}

function Body () {
    return(
        <div id="body">
            <SideColumn/>
            <MainColumn/>
            <SideColumnEnd/>
        </div>
    )
}

function Footer () {
    return(
        <div id="footer">
            <h1>Projet 2 - using react</h1>
            <h1>
                Shuya Liu 2136141/
                Serhiy Fedurtsya 2135229/
                Jack Hannan 2037915/
                copy right 2022
            </h1>
        </div>
    )
}

const Main = {
    Header,
    Body,
    Footer
}

export default Main 