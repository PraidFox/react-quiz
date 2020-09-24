import React, {Component} from 'react'
import classes from './FinishedQuiz.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
    const  successCount = Object.keys(props.results).reduce((total, key) => {
      if(props.results[key] === 'success'){
          total++
      }

      return total
    }, 0)

    const result = () => {

        if(successCount >= 9){
            return <div>
                <p>Восхитительно! Вы прирожденный ресторатор. Высокий сервис у вас в крови! Начальный этап пройден. Можно побаловать себя чашечкой горячего шоколада!</p>
                <img src="https://d.radikal.ru/d40/2009/23/c6ac35a8a33b.jpg" alt=""/>
            </div>
        } else if(successCount >= 6){
            return <div>
                <p>Целеустремлённость и знание базовых основ ресторанного сервиса - ваша сильная сторона! Продолжайте развивать свои навыки, спецагент!</p>
                <img src="https://d.radikal.ru/d12/2009/31/60c87ed8c0ce.jpg" alt=""/>
            </div>

        } else {
            return <div>
                <p>Каким-то образом вы попали в это спецзадание с минимумом подготовки. А ну, немедленно начинайте учиться крутить салфетки!</p>
                <img src="https://d.radikal.ru/d14/2009/cd/3f6f140ff7cd.jpg" alt=""/>
            </div>
        }

    }


    return (
        <div className={classes.FinishedQuiz}>
                       <p>{result()}</p>
            <p>Правильно {successCount} из {props.quiz.length-4}</p>
            <div className={classes.HTK}>А ещё Вы можете обучиться специальности в Хабаровском технологическом колледже.<br/><a href="https://khtk27.ru/" className={classes.HTKlink}>ХТК: Вперёд!</a></div>
            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
            </div>

        </div>
    )

}

export default FinishedQuiz