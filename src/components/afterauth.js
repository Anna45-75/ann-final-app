import { Link } from 'react-router-dom'

function AfterAuth() {
    return (
        <div className="main">
            <div class="header__nav">
                <div class="logo"></div>
                <nav class="topnav">
                    <a href="">Главная</a>
                    <a href="">Тарифы</a>
                    <a href="">FAQ</a>
                </nav>
                <div class="card_auth">
                    <p>Использовано компаний <span class="card_auth__black">34</span><br />
                        Лимит по компаниям <span class="card_auth__green">100</span></p>
                </div>
                <div class="card_auth_avatar">
                    <div class="card_auth_avatar_text">Алексей А.
                        <div class="card_auth_avatar_link"> <Link to="/login">Выйти</Link></div>
                    </div>
                    <div class="card_auth_avatar_im"></div>
                </div>
            </div>

            <div class="header__nav_mobile">
                <div class="hamburger-menu">
                    <div class="logo"></div>
                    <div class="card_auth">
                        <p>Использовано компаний <span class="card_auth__black">34</span><br />
                            Лимит по компаниям <span class="card_auth__green">100</span></p>
                    </div>
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>
                    <ul class="menu__box">
                        <li>
                            <div class="logo_nav"></div>
                        </li>
                        <li><a class="menu__item" href="#">Главная</a></li>
                        <li><a class="menu__item" href="#">Тарифы</a></li>
                        <li><a class="menu__item" href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AfterAuth

