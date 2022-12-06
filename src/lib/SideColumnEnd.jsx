import SideColEndRecent from "./SideColEndRecent"
import SideColEndTopicStats from "./SideColEndTopicStats"
import SideColEndUserStats from "./SideColEndUserStats"

function SideColumnEnd () {
    return(
        <div id="side-col-end-div">
            <SideColEndTopicStats/>
            <SideColEndRecent/>
            <SideColEndUserStats/>
        </div>
    )
}

export default SideColumnEnd