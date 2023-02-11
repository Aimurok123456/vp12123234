import React from 'react'
import style from './reviews.module.css'
import darya from '../assets/reviews/darya.png'
import yuriy from '../assets/reviews/yuriy.png'
import ilyas from '../assets/reviews/ilyas.png'
import stars from '../assets/reviews/stars.png'

function Reviews() {
  return (
    <div className={style.reviews}>
        <div className={style.container}>
            <h2 className={style.response}>Отзывы</h2>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.top}>
                        <img className={style.face} src={darya} alt="" />
                        <div className={style.person}>
                        <h2 className={style.name}>Дарья</h2>
                        <img className={style.star} src={stars} alt="" />
                        </div>
                    </div>
                    <p>“Высокое качество по приемлемой цене.Один из лучших магазинов.”</p>
                </div>
                <div className={style.card}>
                    <div className={style.top}>
                        <img className={style.face} src={yuriy} alt="" />
                        <div className={style.person}>
                        <h2 className={style.name}>Юрий</h2>
                        <img className={style.star} src={stars} alt="" />
                        </div>
                    </div>
                    <p> “ Долго искал в магазинах города бутсы Puma SpeedFlow , заказал у Select Sneakers и очень доволен покупкой.” </p>
                </div>
                <div className={style.card}>
                    <div className={style.top}>
                        <img className={style.face} src={ilyas} alt="" />
                        <div className={style.person}>
                        <h2 className={style.name}>Ильяс</h2>
                        <img className={style.star}  src={stars} alt="" />
                        </div>
                    </div>
                    <p>“Только оригинал, отличный выбор моделей, быстрая доставка. Все на высшем уровне.”</p>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Reviews