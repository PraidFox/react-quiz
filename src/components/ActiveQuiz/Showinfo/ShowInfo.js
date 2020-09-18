import  React from 'react'
import  classes from './ShowInfo.css'


const ShowInfo = props => {

    let cls = []

    if(props.info != null){
        cls.push(classes.ShowInfo)
    }

    return(
        <p className={cls}>{props.info}</p>
    )
}

export  default  ShowInfo