import { useState } from "react"

function Form(){

    const [formdata, setformdata] = useState(
        {
            name:"",
            email:""
        }
    );
    const [submitteddata, setsubmitteddata] = useState(
        {
            name:"",
            email:""
        }
    );

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setformdata(
            (preData)=>({
                ...preData,
                [name]:value
            })
        )
    }

    const HandleSubmit = (event)=>{
        event.preventDefault();
        setsubmitteddata(formdata)
    }

    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="w-full p-10 max-w-md bg-white rounded-lg shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">LogIn Form</h1>

                    <form>
                        <div>
                            <label className="block text-sm text-gray-600">Name :</label>
                            <input onChange={handleChange} type="text" placeholder="Enter your Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm " name="name" value={formdata.name}/>
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">Email :</label>
                            <input onChange={handleChange} type="text" placeholder="Enter your Mail" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" name="email" value={formdata.email}/>
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">Password :</label>
                            <input type="password" placeholder="Enter your Password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm "/>
                        </div>
                        <button onClick={HandleSubmit} type="submit" className="w-full bg-indigo-600 text-white p-2 mt-2 rounded-md">Login</button>
                    </form>

                    <div>
                        <h2 className="text-center  mt-5 font-semibold">User Information</h2>
                        <p className="text-gray-700">Name: {submitteddata.name}</p>
                        <p className="text-gray-700">Email: {submitteddata.email}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Form