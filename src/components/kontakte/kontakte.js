import React, { Component } from "react"
import "./kontakte.css"
import { Container, Jumbotron } from "react-bootstrap"

class Kontakte extends Component {
    render() {
        return (
            <div className="medizin">
                <br />

                <Container>
                    <Jumbotron className="kontjumb" >
                        <div className="mt2">
                        </div>


                        <span className="landtext" > ТРУДОУСТРОЙСТВО МЕДСЕСТЕР В ГЕРМАНИИ </span>
                        <br />
                        <span className="landtitle" >
                            Для гражданов СНГ

                        </span>


                    </Jumbotron>
                    <br />
                    <h2 className="h2kontw">
                            Требования 
                        </h2>
                    <div className="pro" fluid>
                        <br/>
                        <h2 className="h2kont">
                            Процедура трудоустройства медсестер в Германии
                            
</h2>
<br/>
<ul className="ulkontakt"> 
    <li>
    Для того, что бы официально работать медицинской сестрой в клинике Германии, необходимо пройти индивидуальную процедуру признания
    </li>
    <li>
    диплома (это касается всех лиц, получивших образование в третьих странах). В процессе индивидуальной процедуры признания апробационное
    </li>
    <li>
    ведомство сравнивает Ваше образование с аналогичным германским образованием. При этом речь идет о таких критериях, как содержание и
    </li>
    <li>
    длительность образования, а также опыт работы по специальности.
    </li>
</ul>
<ul className="ulkontakt">
    <li>
    Наша компания предоставляет возможность получить временное разрешение на работу по специальности в ограниченном объеме
    </li>
    <li>
    (работа помощником медсестры) с одновременным обучением недостающих предметов. Обучение проходит в клинике по месту Вашей

    </li>
    <li>
    дальнейшей работы и является достаточным для 100% признания диплома.
    </li>
    </ul>
    <ul className="ulkontakt">
        <li>
        Важно: ни один СНГ диплом медицинской сестры не соответствует немецкому диплому. Апробационное ведомство признает диплом 
        </li>
        <li>
    частично и    укажет , какие предметы необходимо доучить для 100% признания диплома!
        </li>
    </ul>
                    </div>
                    
                   
                        
                

                </Container>
            </div>

        )
    }
}

export default Kontakte;