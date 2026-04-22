function MyList(){

    const User = [
        {
            id: 1,
            name: "eshan",
            prof: "Programmer"
        },
        {
            id: 2,
            name: "tutul",
            prof: "Programmer"
        },
        {
            id: 3,
            name: "salman",
            prof: "Programmer"
        }
    ]
    return(
        <>
            {
                User.map(
                    (myUser)=>(
                        <li key={myUser.id}>
                            {myUser.name}, {myUser.prof}
                        </li>
                    )
                )
            }
        </>
    )
}

export default MyList