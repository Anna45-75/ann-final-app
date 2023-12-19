import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="main">
            <div className="header__nav">
                <div className="logo"></div>
                <nav className="topnav">
                    <Link to="/">Главная</Link>
                    <a href="">Тарифы</a>
                    <a href="">FAQ</a>
                </nav>
                <div className="login">
                    <a href="">Зарегистрироваться</a>
                    <span className="login__razd"></span>
                    <>
                        <div className="login__log">
                            <Link to="/login" >Войти</Link>
                        </div>
                    </>
                </div>
            </div>

            <div className="header__nav_mobile">
                <div className="hamburger-menu">
                    <div className="logo"></div>
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li>
                            <div className="logo_nav"></div>
                        </li>
                        <li className="menu__item"><Link to="/">Главная</Link></li>
                        <li><a className="menu__item" href="#">Тарифы</a></li>
                        <li><a className="menu__item" href="#">FAQ</a></li>
                        <li className="menu__item_reg">
                            <a href="">Зарегистрироваться</a>
                        </li>
                        <li className="login__log"><Link to="/login">Войти</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar