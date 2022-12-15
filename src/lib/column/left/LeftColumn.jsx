import AdminBox from "./sub/AdminBox.jsx"
import MiscBox from "./sub/MiscBox.jsx"

function LeftColumn() {
    return (
        <div id="left-column">
            <AdminBox />
            <MiscBox />
        </div>
    )
}

export default LeftColumn