function TransactionList(Transactions) {
  return (
    <>
        <ul>
            {Transactions.map(
                (transaction)=>(
                    <li className={transaction.amount > 0 ? "bg-green-100" : "bg-red-100"}>
                        {transaction.text}
                        <span>{transaction.amount}</span>
                    </li>
                )
            )}
        </ul>
    </>
  )
}

export default TransactionList
