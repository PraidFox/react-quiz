import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import HellowWorld from '../../components/HelloWorld/HellowWorld'
import WelcomUser from "../../components/WelcomUser/WelcomUser";
import ActiveVideo from  '../../components/ActiveVideo/ActiveVideo'
import fiveVideo from '../../components/ActiveVideo/video/5_film_ofitsiant.mp4'
import sevenVideo from '../../components/ActiveVideo/video/7__Am-nyam.mp4';
import eightVideo from '../../components/ActiveVideo/video/8_Ofitsiant_-_professional.mp4';
import tenVideo from '../../components/ActiveVideo/video/10_400_kapel_valeryanki_i_salat.mp4';



class Quiz extends Component{

    state = {
        name: null,
        welcom: true,
        results: {}, // {[id]: success error}
        isFinished: false,
        activeQuestion: 0,
        informativeID: null,
        answerState: null, // { [id]: 'success' 'error' },
        button: 'disabled',
        quiz: [
            {   typeQuiz: 'string',
                question:'Вы на месте... вокруг тишина и спокойствие. До открытия ресторана вам необходимо:',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Расставить везде шпионские жучки и спрятаться', id: 1},
                    {text: 'Переодеться в форму официанта и начать подготовку торгового зала', id: 2},
                ],
                informative: [
                    {text: 'От кого прячемся, вокрук же никого нет', id: 1},
                    {text: 'Это было просто!', id: 2},
                ]

            },
            {   typeQuiz: 'string',
                question:'Необходимо, засервировать стол, как бы не ошибиться! Какой вариант выбрать?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: <img src="https://a.radikal.ru/a35/2009/7b/8dd1a01a666f.jpg" alt=""/>, id: 1},
                    {text: <img src="https://c.radikal.ru/c38/2009/7a/391db38d3c8f.jpg" alt=""/>, id: 2},
                    {text: <img src="https://a.radikal.ru/a05/2009/e9/5d4997e41b90.jpg" alt=""/>, id: 3},
                ],
                informative: [
                    {text: 'Великолепно', id: 1},
                    {text: 'О ужас! Еще есть время всё исправить!', id: 2},
                    {text: 'О ужас! Еще есть время всё исправить!', id: 3}
                ]
             },
            {   typeQuiz: 'string',
                question:'У каждого спец-агента должен быть свой суперсекретный гаджет. Что можно использовать в этой миссии?',
                rightAnswerId: 4,
                id: 3,
                answers: [
                    {text: 'Рентген-очки', id: 1},
                    {text: 'Порализующая жвачка', id: 2},
                    {text: 'Скрытая камера в кулоне', id: 3},
                    {text: 'Ручка с исчезающими чернилами', id: 4}
                ],
                informative: [
                    {text: 'Очки официанты не носят', id: 1},
                    {text: 'Ничего пить и жевать на рабочем месте нельзя (только в комнате отдыха)', id: 2},
                    {text: 'Украшений должно быть по минимуму, да и для съёмки людей потребуется их согласие', id: 3},
                    {text: 'Ручку с собой носить можно и даже нужно, главное не записать ей заказ, а то как потом всё вспомнить?!', id: 4}
                ]
            },
            {   typeQuiz: 'string',
                question:'Для начала стоит попробовать улучшить популярность ресторана. Поэтому, при встрече гостя следует:',
                rightAnswerId: 3,
                id: 4,
                answers: [
                    {text: 'Использовать свой шарм! (Улыбаться, подшучивать, дружески похлопывать по плечу)', id: 1},
                    {text: 'Угостить коктейлем', id: 2},
                    {text: 'Быть приветливым, вежливым и внимательным', id: 3},
                ],
                informative: [
                    {text: 'Улыбка, конечно, хорошо, она расположит человека к вам, но нарушать личную зону комфорта ни в коем случае нельзя', id: 1},
                    {text: 'Бесплатное угощение возможно и расположит человека к вам, но нельзя раздавать еду и напитки бесплатно. На вас недобро посмотрит бармен!', id: 2},
                    {text: 'Лучший подход - внимание, приветливость, опрятность и грамотная речь', id: 3}
                ]
            },
            {   typeQuiz: 'video',
                question: 'Не волнуйтесь! Вокруг шумно и много голодных людей! Пора принимать заказ.',
                video: fiveVideo
            },
            {   typeQuiz: 'string',
                question: 'Что же принести гостям?',
                rightAnswerId: 2,
                id: 5,
                answers: [
                    {text: '3 порции немецких сосисок', id: 1},
                    {text: '1 треску и 2 порции немецких сосисок', id: 2},
                    {text: '1 стейк, 1 треску, 1 немецкие сосиски', id: 3},
                    {text: '3 порции фуагра с шампанским', id: 4}
                ],
                informative: [
                    {text: 'Ошибка, будьте внимательнее', id: 1},
                    {text: 'Блестяще', id: 2},
                    {text: 'Ошибка', id: 3},
                    {text: 'Изысканно, но не то, что хотели гости', id: 4}
                ]
            },
            {   typeQuiz: 'string',
                question:'Посетитель попросил принести ему стакан воды. Обазан ли официант бесплатно приносить воду?',
                rightAnswerId: 2,
                id: 6,
                answers: [
                    {text: 'Да', id: 1},
                    {text: 'Нет', id: 2},
                ],
                informative: [
                    {text: 'А вот и нет! Нет такого закона, обязывающего приносить воду. Но, всё же, официант может её принести "по доброте душевной"', id: 1},
                    {text: 'Верно! Нет такого закона, обязывающего приносить воду. Но, всё же, официант может её принести "по доброте душевной"', id: 2}
                ]
            },
            {   typeQuiz: 'video',
                question: 'Второй столик ожидает напитки! Поторопитесь!',
                video: sevenVideo
            },
            {   typeQuiz: 'string',
                question:'Ам-ням очарован и забыл все правила. Гостья не получила заказ, поднос перевернулся. А как же правильно распологать предметы на подносе?',
                rightAnswerId: 2,
                id: 7,
                answers: [
                    {text: <img src="https://a.radikal.ru/a36/2009/9b/abd30df8a3ab.jpg" alt=""/>, id: 1},
                    {text: <img src="https://d.radikal.ru/d09/2009/66/63d1d02106ac.jpg" alt=""/>, id: 2},
                    {text: <img src="https://a.radikal.ru/a03/2009/2f/eb4dde635a52.jpg" alt=""/>, id: 3},
                ],
                informative: [
                    {text: 'Не верно. Тяжёлые и высокие предметы следует располагать ближе к себе. Так будет проще держать равновесие. А еще, поднос не должен быть скользким.', id: 1},
                    {text: 'Верно. Тяжёлые и высокие предметы следует располагать ближе к себе. Так будет проще держать равновесие. А еще, поднос не должен быть скользким.', id: 2},
                    {text: 'Не верно. Тяжёлые и высокие предметы следует располагать ближе к себе. Так будет проще держать равновесие. А еще, поднос не должен быть скользким.', id: 3}
                ]
            },
            {   typeQuiz: 'video',
                question: 'Еще один гость готов сделать заказ',
                video: eightVideo
            },
            {   typeQuiz: 'string',
                question:'Нужно ли записывать заказ гостя?',
                rightAnswerId: 1,
                id: 8,
                answers: [
                    {text: "Да, всегда", id: 1},
                    {text: "Нет, если гость всего один", id: 2},
                    {text: "Нет, если официант - профессионал", id: 3},
                    {text: "На выбор официанта", id: 4}
                ],
                informative: [
                    {text: 'Правильно. Заказ обязательно нужно записывать и повторять гостю.', id: 1},
                    {text: 'Не верно. Заказ обязательно нужно записывать и повторять гостю.', id: 2},
                    {text: 'Не верно. Заказ обязательно нужно записывать и повторять гостю.', id: 3},
                    {text: 'Не верно. Заказ обязательно нужно записывать и повторять гостю.', id: 4}
                ]
            },
            {   typeQuiz: 'string',
                question:'Коллега, подайте-ка мне, пожалуйста, коктейльный бокал. Взять:',
                rightAnswerId: 1,
                id: 9,
                answers: [
                    {text: <img src="https://a.radikal.ru/a04/2009/18/c297bdad1829.jpg" alt=""/>, id: 1},
                    {text: <img src="https://b.radikal.ru/b14/2009/97/cf486cd4f691.jpg" alt=""/>, id: 2},
                    {text: <img src="https://d.radikal.ru/d07/2009/14/b9415a6f99b0.jpg" alt=""/>, id: 3},
                    {text: <img src="https://d.radikal.ru/d11/2009/60/768fd72572fe.jpg" alt=""/> , id: 4}
                ],
                informative: [
                    {text: 'Браво! Традиционно, коктейльным бокалом считается именно мартинка. В маргоритке подают только маргариту, в бокале олд-фэшн - крепкие благородные напитки, в хайболе - воду, соки.', id: 1},
                    {text: 'Кажется, персонал начинает что-то подозревать. Традиционно, коктейльным бокалом считается именно мартинка. В маргоритке подают только маргариту, в бокале олд-фэшн - крепкие благородные напитки, в хайболе - воду, соки.', id: 2},
                    {text: 'Кажется, персонал начинает что-то подозревать. Традиционно, коктейльным бокалом считается именно мартинка. В маргоритке подают только маргариту, в бокале олд-фэшн - крепкие благородные напитки, в хайболе - воду, соки.', id: 3},
                    {text: 'Кажется, персонал начинает что-то подозревать. Традиционно, коктейльным бокалом считается именно мартинка. В маргоритке подают только маргариту, в бокале олд-фэшн - крепкие благородные напитки, в хайболе - воду, соки.', id: 4}
                ]
            },
            {   typeQuiz: 'video',
                question: 'Посетитель чем-то не доволен...',
                video: tenVideo
            },
            {   typeQuiz: 'string',
                question:'Оказалось, гость сомневается в выходе блюда. Как поступить в такой ситуации?',
                rightAnswerId: 2,
                id: 10,
                answers: [
                    {text: 'Возмутиться, отстаивать честь ресторана', id: 1},
                    {text: 'Предложить проверить вес блюда с помощью весов', id: 2},
                    {text: 'Провести гостя на кухню, что бы он лично проследил за тем, как готовится его блюдо и сколько сырья закладывается', id: 3},
                ],
                informative: [
                    {text: 'Возмущения и убеждения гостя не переубедят.', id: 1},
                    {text: 'Правильнее всего решить проблему простым взвешиванием', id: 2},
                    {text: 'В кухню нельзя пропускать гостей - это нарушение правил санитарии и гигиены', id: 3}
                ]
            },
            {   typeQuiz: 'string',
                question:'Еще один посетитель за 8 столиком очень и очень не доволен, кричит, машет руками. Нужно срочно что-то сделать, пока все не обратили на вас внимание.',
                rightAnswerId: 3,
                id: 11,
                answers: [
                    {text: 'Убежать', id: 1},
                    {text: 'Применить силу', id: 2},
                    {text: 'Попытаться решить конфликт разговором.', id: 3},
                    {text: 'Сообщить посетителю, что вы тут первый день.', id: 4}
                ],
                informative: [
                    {text: 'Это привлечёт еще больше внимания. В случае конфлика поможет только внимание к гостью. Нужно выслушать гостя, спокойно и вежливо предложить варианты решения проблемы. Сбегая, оправдываясь или крича в ответ вы только ухудшите ситуацию.', id: 1},
                    {text: 'Ни в коем случае. В случае конфлика поможет только внимание к гостью. Нужно выслушать гостя, спокойно и вежливо предложить варианты решения проблемы. Сбегая, оправдываясь или крича в ответ вы только ухудшите ситуацию.', id: 2},
                    {text: 'Отличный выбор. В случае конфлика поможет только внимание к гостью. Нужно выслушать гостя, спокойно и вежливо предложить варианты решения проблемы. Сбегая, оправдываясь или крича в ответ вы только ухудшите ситуацию.', id: 3},
                    {text: 'Неудачный выбор. В случае конфлика поможет только внимание к гостью. Нужно выслушать гостя, спокойно и вежливо предложить варианты решения проблемы. Сбегая, оправдываясь или крича в ответ вы только ухудшите ситуацию.', id: 4}
                ]
            },
            {   typeQuiz: 'string',
                question:'У каждого агента должен быть свой неповторимый стиль. Но нельзя себя выдать. Вы подозреваете, что среди официанток есть подставной шпион, который подначивает гостей писать плохие отзывы и не оставлять чаевые. Она отлично маскируется, но что же её выдаёт?',
                rightAnswerId: 2,
                id: 12,
                answers: [
                    {text: 'Длинные волосы', id: 1},
                    {text: 'Сильный запах дорогого порфюма', id: 2},
                    {text: 'Серьги-гвоздики в ушах', id: 3},
                ],
                informative: [
                    {text: 'У официанта могут быть волосы любой длины, так же допускаются небольшие серьги. Но нельзя использовать резкие запахи. (Даже если духи очень дорогие). ', id: 1},
                    {text: 'У официанта могут быть волосы любой длины, так же допускаются небольшие серьги. Но нельзя использовать резкие запахи. (Даже если духи очень дорогие). ', id: 2},
                    {text: 'У официанта могут быть волосы любой длины, так же допускаются небольшие серьги. Но нельзя использовать резкие запахи. (Даже если духи очень дорогие). ', id: 3}
                ]
            }
        ]
    };



    onAnswerClickHandler = answerId => {
if(this.state.informativeID == null){


        this.setState({
            informativeID: answerId-1
        });
        console.log(this.state)
}

        //Часть против бага. Если не будет этой заглушки, то при нажатие дважды на правильный ответ, то перескочить следующий.
        if(this.state.answerState) {
            //const key = Object.keys(this.state.answerState)[0];
           // if(this.state.answerState[key] === 'success'){
                return
            // } else {
            //     return
            // }
        }
        //Конец исправления бага.

        const question =this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        const timeout = window.setTimeout(() => {
            this.activeButton()

            /*this.setState({
                button: null,
            });*/

            window.clearTimeout(timeout)
        }, 10//00
         );


        if(question.rightAnswerId === answerId){
            if(!results[question.id]) {
                results[question.id] = 'success'
           }

            this.setState(
                {   //informativeID: answerId,
                    answerState: {[answerId]: 'success'},
                    results,

                }
            )


        } else {

            results[question.id]= 'error'
            this.setState({
                //informativeID: answerId,
                answerState: {[answerId]: 'error'},
                results,

            })

        }


    };




    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    nextQuiz = () => {
        if(this.isQuizFinished()){
            this.setState({
                isFinished: true
            })
        } else {
            this.setState({
                activeQuestion: this.state.activeQuestion + 1,
                answerState: null
            })
        }

        this.setState({
            button: 'disabled',
            informativeID: null,
        })

    };

    activeButton = () => {
        this.setState({
            button: null,
        })
    };

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}

        })
    };

    writeName = userName => {
        this.setState({
            name: userName,
        })
    };

    weCame = () => {
        console.log(this.state.welcom === false)
        this.setState({
            welcom: false,
        })
    }


    render(){





        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>


                    {this.state.name == null ?
                        <HellowWorld
                            userName = {this.writeName}
                        />
                            :
                        this.state.welcom !== false ?

                            <WelcomUser
                                name = {this.state.name}
                                weCame = {this.weCame}
                            />
                            :
                        this.state.isFinished ?
                             <FinishedQuiz
                                 results = {this.state.results}
                                 quiz = {this.state.quiz}
                                 onRetry = {this.retryHandler}
                             /> :

                            this.state.quiz[this.state.activeQuestion].typeQuiz == 'string' ?

                             <ActiveQuiz

                                 answers = {this.state.quiz[this.state.activeQuestion].answers}
                                 question = {this.state.quiz[this.state.activeQuestion].question}
                                 onAnswerClick = {this.onAnswerClickHandler}
                                 quizLenght={this.state.quiz.length}
                                 answerNumber={this.state.activeQuestion + 1}
                                 state = {this.state.answerState}
                                 button = {this.state.button}
                                 nextQuiz = {this.nextQuiz}
                                 info = {this.state.quiz[this.state.activeQuestion].informative[this.state.informativeID]?.text}
                             /> :

                                <ActiveVideo
                                    title = {this.state.quiz[this.state.activeQuestion].question}
                                    video = {this.state.quiz[this.state.activeQuestion].video}
                                    nextQuiz = {this.nextQuiz}
                                />
                    }






                </div>

            </div>
        )
    }
}

export default Quiz