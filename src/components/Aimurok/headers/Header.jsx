import React from 'react'
import cart from '../assets/nav/Cart.svg'
import heart from '../assets/nav/heart.svg'
import vector from '../assets/nav/Vector.svg'
import sneakers from '../assets/sneakers.svg'
import style from './header.module.css'


function Header() {
    return (
    <>
        <div className={style.container}>
            <header>
                
                <div className={style.navTop}>
                <div className={style.sneakers}>
                    <img src={sneakers} alt="" />
                </div>
                    <ul className={style.navRecords}>
                        <li className={style.delivery}>
                            <a href="">Доставка и оплата </a>
                        </li>
                        <li className={style.contacts}>
                            <a href=""> Контакты</a>
                        </li>
                    </ul>
                    <p className={style.hidden}>hello</p>
                </div>
                <div className={style.navFolder}>
                    <div className={style.nav__container}>
                        <ul className={style.nav__catalog}>
                            <li>
                                <a href="">Мужские</a>
                            </li>
                            <li  className={style.women}>
                                <a href="">Женские</a>
                            </li>
                            <li>
                                <a href="">Новинки</a>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <form >
                            < input type="text" className={style.input}/>
                        </form>
                    </div>
                    <div className={style.nav__individual}>
                        <ul className={style.individual}>
                            <li>
                                <a href=""><img src={vector} alt="" /></a>
                            </li>
                            <li className={style.heart}>
                                <a href=""><img src={heart} alt="" /></a>
                            </li>
                            <li>
                                <a href=""><img src={cart} alt="" /></a>
                            </li>
                        </ul>
                    </div>



                </div>

            </header>
        </div>
        <div className={style.bottom}></div>
    </>
    )
}

export default Header