import AdminBox from "./AdminBox"

function Header () {
    return(
        <div id="header">
            <p>Pseudo Forum</p>
        </div>
    )
}

function Body () {
    return(
        <div>
            <AdminBox/>
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