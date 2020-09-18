import React, {Component} from 'react'
import  classes from './HelloWorld.css'



class HelloWorld extends Component{

    rename = event => {

        this.x = event.target.value.toUpperCase()
        console.log(this.x)
    };



render () {

    return(
        <div>
        <h1 className={classes.Title}>Добро пожаловать</h1>
        <div className={classes.HelloWorld}>

            <p>Для доступа к супер секретным данным.
            Введите своё кодовое имя </p> <div className={classes.input}>
            <input type="text" onChange={this.rename}/></div><br/>
            <div className={classes.button}><button onClick={() => this.props.userName(this.x)}>Получить доступ</button></div>

        </div></div>

    )
}}

export  default  HelloWorld