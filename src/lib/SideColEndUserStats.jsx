function SideColEndUserStats ({data}) {
    return(
        <div id="side-col-end-user" className="side-col-end">
            <h1>Users Stats</h1>
            <table>
                <thead>
                    <tr>
                        <td>user</td>
                        <td>nberPost</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        // data && data.length > 0 && data.map((item) => {
                        //     return (<tr>
                        //         <td>{item.user_id}</td>
                        //         <td>{item.nberPosts}</td>
                        //     </tr>)
                        // })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SideColEndUserStats