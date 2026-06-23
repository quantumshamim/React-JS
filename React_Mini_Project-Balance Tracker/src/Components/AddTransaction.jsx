function AddTransaction() {
  return (
    <>
        <form>
            <input type="text"  placeholder= "please add details" className="p-2 m-2 border border-indigo-500 "/>
            <input type="number" placeholder= "enter your amounts" className="p-2 m-2 border border-indigo-500 "/>
            <button className="bg-blue-500 text-white p-2 rounded">Add Amount</button>

        </form>
    </>
  )
}

export default AddTransaction
