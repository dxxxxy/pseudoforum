import MiddleColumn from "./column/middle/MiddleColumn.jsx"
import LeftColumn from "./column/left/LeftColumn.jsx"
import RightColumn from "./column/right/RightColumn.jsx"
import {FaReact} from "react-icons/all";

function Header() {
    return (
        <div id="header">
            <p>pseudoforum&trade;</p>
            <input type="text" placeholder="Search for content"></input>
        </div>
    )
}

function Body() {
    return (
        <div id="body">
            <LeftColumn/>
            <MiddleColumn/>
            <RightColumn/>
        </div>
    )
}

function Footer() {
    return (
        <div id="footer">
            <div>
                <FaReact id="react" />
                <p> Project</p>
            </div>
            <p>Shuya Liu (2136141) | Serhiy Fedurtsya (2135229) | Jack Hannan (2037915)</p>
            <p>&copy; 2022</p>
        </div>
    )
}

const Main = {
    Header,
    Body,
    Footer
}

export default Main 