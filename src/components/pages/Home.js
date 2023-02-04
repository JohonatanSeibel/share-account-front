
import LinkButton from '../layout/LinkButton'
import style from './css//Home.module.css'

function Home(){
    return (
        <section className={style.home_container}>
            <h1>Bem vindo ao <span>Share Account</span></h1>
            <p>Faça o rateio de sua conta Aqui!</p>
            <LinkButton to="/order" text="New Order"/>
        </section>
    )
}

export default Home