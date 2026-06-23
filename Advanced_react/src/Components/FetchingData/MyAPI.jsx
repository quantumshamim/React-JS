import { useEffect, useState } from "react"

function DataFetching(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> response.json())
        .then((data)=> setData(data))
        .catch((error)=> setError(error))
    }, [])

    if(error){
        return <div>Error is {error.message}</div>
    }

    return(
        <>
            <h1>My Api Recent Post</h1>
            <ul>
                {data.map((post)=>(
                    <li key = {post.id}>
                        {post.id} <br />
                        {post.title}
                    </li>
                )
            )}
            </ul>
        </>
    )
}
export default DataFetching