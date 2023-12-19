import Images from "./im";
import serv from "./images/im1.png";


export default function Main() {
    return (
        <div className="main">
            <div className="header__data">
                <div className="header__data-service">
                    <h1>
                        сервис по поиску публикаций о компании по его ИНН
                    </h1>
                    <p className="p__top1">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                    </p>

                </div>
                <div>
                    <Images image={serv} />
                </div>
            </div>
        </div>
    )
}


