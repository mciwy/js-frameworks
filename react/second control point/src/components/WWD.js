import GridSection from "./GridSection"
import PictureSection from './PictureSection'
import img from '../assets/img/photo_1.png'


function WWD() {
    let data = [{ id: 1, rowParam: 'row', img: img, title: 'Веломастерская “Велозар”', text: 'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.', bgc: 'beige', classNme: 'WWD_image' }]

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

            <section className="WWD_text">
                <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.<br /> А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
            </section>

            <GridSection />

        </>
    )
}

export default WWD