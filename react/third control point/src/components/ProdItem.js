import Stars from "./Stars"

function ProdItem({ id, img, title, price, onDelete, rating }) {
    const handleDelete = () => {
        onDelete(id)
    }
    return (

        <div className="card">
            <img src={img} />
            <h2>{title}</h2>
            <p>{price}</p>
            <button onClick={handleDelete}><i class="fa fa-trash" aria-hidden="true"></i></button>
            <Stars rating={rating} />
        </div>
    )
}

export default ProdItem