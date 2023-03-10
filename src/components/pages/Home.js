
import LinkButton from '../layout/LinkButton'
import style from './css//Home.module.css'

function Home(){
    return (
        <section className={style.home_container}>
            <h1>Welcome to <span>Share Account</span></h1>
            <p>Share your account here!</p>
            <LinkButton to="/order" text="New Order"/>
        </section>
    )
}

export default Home