import MiddleColumn from "./column/middle/MiddleColumn.jsx"
import LeftColumn from "./column/left/LeftColumn.jsx"
import RightColumn from "./column/right/RightColumn.jsx"
import {FaReact} from "react-icons/all";

function Header({setFilter}) {
    return (
        <div id="header">
            <p>pseudoforum&trade;</p>
            <input type="text" placeholder="Search for content" onChange={(e) => setFilter(e.target.value)}></input>
        </div>
    )
}

function Body({filter}) {
    return (
        <div id="body">
            <LeftColumn/>
            <MiddleColumn filter={filter}/>
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

export { Header, Body, Footer }