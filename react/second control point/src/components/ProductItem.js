function ProductItem(props) {
    let { id, name, price, count, increment, decrement, Delete } = props

    function handleDelete() {
        Delete(id)
    }
    return (
        <>
            {count !== 0 &&
                <div className="did" key={id} onDoubleClick={handleDelete}>
                    <h1>{name}</h1>
                    <div>{price}</div>
                    <div>{count}</div>
                    <div >
                        <button onClick={() => increment(id)}>+</button>
                        <button onClick={() => decrement(id)}>-</button>
                    </div>
                </div>}
        </>
    )
}

export default ProductItem