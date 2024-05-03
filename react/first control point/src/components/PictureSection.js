
function PictureSection(props) {
    let { classNme, rowParam, img, title, text, bgc } = props

    return (
        <section style={{ display: 'flex', flexDirection: rowParam, backgroundColor: bgc }}>
            <div className="section__textBlock">
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>
            <img className={classNme} src={img}>
            </img>
        </section>
    )
}

export default PictureSection