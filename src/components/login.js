import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import Images from "./im";
import man from "./images/im9.png";
import lock from "./images/ikon7.png";
import Footer from "./footer";
import Navbar from './navbar';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="row main">
                <div className="col-lg-8 col-sm-11 order-lg-first order-sm-last order-first">
                    <h1 className="left__form-h1">Для оформления подписки
                        на тариф, необходимо авторизоваться.</h1>
                    <div className="left__form-img"><Images image={man} /></div>
                </div>

                <div className="col-lg-4 col-sm-11 order-lg-last order-sm-first order-last">
                    <div className="card__form">
                        <div className="card__img-form"><Images image={lock} /></div>
                        <div className="log">
                            <div className="login__form">
                                Войти</div>
                            <a href="" className="reg">Зарегистрироваться</a>
                        </div>
                        <div className="inp">
                            <div>
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <p>Логин или номер телефона:</p>
                                            <Field type="email" name="email" />
                                            <ErrorMessage name="email" component="div" />
                                            <p>Пароль:</p>
                                            <Field type="password" name="password" />
                                            <ErrorMessage name="password" component="div" />
                                            <button className="bottom" type="submit" disabled={isSubmitting}><Link to="/admin" className='bottom'>Войти</Link></button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <p><a href="" className="passw">Восстановить пароль</a></p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Login