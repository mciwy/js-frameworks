import CardSection from "./CardSection"

function GridSection() {

    let data = [
        { id: 1, bgc: '#22356F', title: 'Годовое ТО', text: 'text1' },
        { id: 2, bgc: '#0052C1', title: 'Выравнивание колёс', text: 'text1' },
        { id: 3, bgc: '#76B58B', title: 'Настройка переключатлей', text: 'text1' },
    ]

    return (
        <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '480px', margin: '0' }}>
            {data.map((el) => <CardSection
                bgc={el.bgc}
                title={el.title}
                text={el.text}
            />)}
        </div>
    )
}

export default GridSection
