import React from 'react'
import facebook from '../assets/footer/facebook.svg'
import whatsApp from '../assets/footer/whatsApp.svg'
import instagram from '../assets/footer/instagram.svg'
import sneakers from '../assets/sneakers.svg'
import style from './footer.module.css'

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footerTop}>
        <ul className={style.feedback}>
          <li>
            <a href="">Отзывы</a>
          </li>
          <li className={style.center}>
            <a href="">Промокоды</a>
          </li>
          <li>
            <a href="">Доставка</a>
          </li>

        </ul>

        <ul className={style.cash}>
          <li>
            <a href="">Отслеживание</a>
          </li>
          <li className={style.center}>
            <a href="">Возврат</a>
          </li>
          <li>
            <a href="">Способ оплаты</a>
          </li>

        </ul>
        <ul className={style.address}>
          <li>
            <a href="">г.Бишкек ул. Ибраева 4</a>
          </li>
          <li className={style.center}>
            <a href="">+9967770070707</a>
          </li>
          <li>
            <a href="">select@gmail.com</a>
          </li>
        </ul>
        <ul >
          <li>
            <a href="">
              <img className={style.social} src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img className={style.social} src={whatsApp} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img className={style.social} src={instagram} alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <form  className={style.form} action="">
          <input className={style.input} type="text" placeholder='Введите ваш Email'/>
          <button className={style.btn}>Подписаться</button>
        </form>
      </div>
      <div className={style.sneakers}>
        <img src={sneakers} alt="" />
        
      </div>
    
    </div>
  )
}

export default Footer
