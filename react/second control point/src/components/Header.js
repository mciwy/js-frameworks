import Logo from '../assets/img/logo.png'
import PictureSection from './PictureSection'
import velozar from '../assets/img/velozar.png'

function Header() {
    let src = velozar
    let menu_list = ['О нас', 'Услуги', 'Rent']

    let data = [{ id: 1, rowParam: 'row', img: velozar, title: 'Веломастерская “Велозар”', text: 'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.', bgc: 'beige', classNme: 'header_image' }]

    return (
        <>
            <header className="header">
                <img className="header__logo" src={Logo} ></img>
                <ul className="header__menu-list">
                    {
                        menu_list.map((el, ind) => <li key={ind}>{el}</li>)
                    }
                </ul>
                <button className="header__button">
                    Связаться
                </button>
            </header>
            {data.map((el) => <PictureSection
                rowParam={el.rowParam}
                img={src}
                title={el.title}
                text={el.text}
                bgc={el.bgc}
                classNme={el.classNme}
            />)}


        </>
    )
}

export default Header