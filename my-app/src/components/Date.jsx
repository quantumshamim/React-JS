function MyDate(){
    const Time = new Date();
    return(
        <>
            <h3>Local Date and Time</h3>
            <p>{Time.toLocaleString()}</p>
        </>
    )
}
export default MyDate