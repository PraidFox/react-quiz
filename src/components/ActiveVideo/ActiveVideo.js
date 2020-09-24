import  React from 'react'
import  classes from './ActiveVideo.css'
import ReactPlayer from 'react-player'

const ActiveVideo = props =>{

    console.log(props.video);


    return (
<div>
    <h1>{props.title}</h1>
    <div className={classes.ActiveVideo}>

        <ReactPlayer
            url={props.video}
            controls= {true}
            width = '100%'
            height='100%'
        />

        <br/>
            <div style={{textAlign: "center"}}>Смотрите видео внимательно, следующий вопрос будет связан именно с ним.</div>
        <br/>
                <div className={classes.button}><button disabled={props.button} onClick={props.nextQuiz}> Следующий вопрос</button></div>
    </div>
</div>
)};

export  default  ActiveVideo