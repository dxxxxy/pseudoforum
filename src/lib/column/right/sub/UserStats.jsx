function UserStats({ data }) {
    //sorting array
    data.sort((a, b) => b.nberPosts - a.nberPosts)

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
                        data.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.user_id}</td>
                                    <td>{item.nberPosts}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default UserStats