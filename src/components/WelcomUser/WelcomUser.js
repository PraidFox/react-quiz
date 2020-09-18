import  React from 'react'
import  classes from './WelcomUser.css'


const WelcomUser = props =>(
    <div>
    <h1>Приветствуем вас, Спецагент {props.name} </h1>
    <div className={classes.WelcomUser}>

        <p>Срочно требуется ваша помощь в раскрытие опасной группировки: "ресторанных критиков и писателей плохих отзывов". Для выполнения миссии вам предстоит внедриться в ресторан в роли официанта. Но так ли это просто? Давайте проверим это на первой тренировочной базе.</p>
        <div className={classes.button}><button onClick={props.weCame}>Приступить к тренировочной миссии</button></div>
    </div>
    </div>


);





export  default  WelcomUser