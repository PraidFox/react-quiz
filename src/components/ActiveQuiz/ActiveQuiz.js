import  React from 'react'
import  classes from './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'
import ShowInfo from './Showinfo/ShowInfo'

const ActiveQuiz = props =>{

    let cls = [classes.button]

    if(props.button){
        cls.push(classes.disable)
    }

   return( <div>
    <h1>Выберите правильный ответ</h1>

    <div className={classes.ActiveQuiz}>


<p className={classes.Qustion}>

    <span>

        {props.question}
    </span>

</p>

       { <AnswersList
           state={props.state}
           answers={props.answers}
           onAnswerClick={props.onAnswerClick}
        />}
        <ShowInfo
            info = {props.info}
        />
        <div className={cls.join(' ')}><button disabled={props.button} onClick={props.nextQuiz}> Следующий вопрос </button></div>


    </div>
        <small>{props.answerNumber} из {props.quizLenght}</small></div>

   )}

export  default  ActiveQuiz