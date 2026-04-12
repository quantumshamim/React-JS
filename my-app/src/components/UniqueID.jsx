function UniqueID(){
    const userList = [
        {
            id:1,
            name: "Shamim",
            prof: "Programmer",
            age: 24
        },
        {
            id:2,
            name: "Bristy",
            prof: "CSO",
            age: 22
        },
        {
            id:3,
            name: "Israt",
            prof: "Student",
            age: 16
        }
    ]
    return(
        <>
            <h2>List of User</h2>
            <div>
                {userList.map((person)=>(
                    <ul key={person.id}>
                        <li>{person.id}</li>
                        <li>{person.name}</li>
                        <li>{person.prof}</li>
                        <li>{person.age}</li>
                    </ul>
                    
                ))}
            </div>
        </>
    )
}
export default UniqueID