function StudentInfo({username, number, address}){
    return(
        <>
            <h2>{username}</h2>
            <p>phone: {number}</p>
            <p>add: {address}</p>
        </>
    )
}
export default StudentInfo