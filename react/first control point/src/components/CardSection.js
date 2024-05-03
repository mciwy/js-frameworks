function CardSection(props) {
    let { title, text, bgc } = props

    return (
        <div className="grid_card" style={{ backgroundColor: bgc }}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default CardSection