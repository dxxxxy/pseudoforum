function UserStats({data}) {
    return (
        <fieldset id="user-stats">
            <legend>Users Stats</legend>
            <table>
                <thead>
                    <tr>
                        <td>User</td>
                        <td># of Posts</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return (<tr>
                                <td>{item.user_id}</td>
                                <td>{item.nberPosts}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default UserStats