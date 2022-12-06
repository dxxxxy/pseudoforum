import MainColChoiceBox from "./MainColChoiceBox"
import MainColForumBox from "./MainColForumBox"

function MainColumn () {
    return(
        <div id="main-col-div">
            <MainColChoiceBox/>
            <MainColForumBox/>
        </div>
    )
}

export default MainColumn