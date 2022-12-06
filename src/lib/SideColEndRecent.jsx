function SideColEndRecent ({data}) {
    return(
        <div id="side-col-end-recent" className="side-col-end">
            <h1>Recent Posts</h1>
            <table>
                <thead>
                    <tr>
                        <td>author</td>
                        <td>date</td>
                        <td>rate</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        data && data.length > 0 && data.map((item) => {
                            return (<tr>
                                <td>{item.user_id}</td>
                                <td>{item.password}</td>
                                <td>{item.nBerPosts}</td>
                            </tr>)
                        })
                    } */}
                </tbody>
            </table>
        </div>
    )
}

export default SideColEndRecent