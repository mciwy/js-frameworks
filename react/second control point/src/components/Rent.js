import PictureSection from "./PictureSection"
import photo_2 from '../assets/img/photo_2.png'

function Rent() {
    let data = [{ id: 1, rowParam: 'row-reverse', img: photo_2, title: 'Прокат велосипедов', text: 'У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!', bgc: 'white', classNme: 'Rent_image' }]

    return (
        <>
            {data.map((el) => <PictureSection
                rowParam={el.rowParam}
                img={el.img}
                title={el.title}
                text={el.text}
                bgc={el.bgc}
                classNme={el.classNme}
            />)}
        </>
    )
}

export default Rent