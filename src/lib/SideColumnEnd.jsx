import SideColEndRecent from "./SideColEndRecent"
import SideColEndTopicStats from "./SideColEndTopicStats"
import SideColEndUserStats from "./SideColEndUserStats"
import { useState, useEffect } from "react"


function SideColumnEnd () {
    const [data, setData] = useState();

    return(
        <div id="side-col-end-div">
            <SideColEndTopicStats data={setData}/>
            <SideColEndRecent/>
            <SideColEndUserStats/>
        </div>
    )
} 

export default SideColumnEnd