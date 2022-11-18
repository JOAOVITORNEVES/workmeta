import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por  

                        <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-dos-santos-neves-silva-38b03b225/">  @João Vitor Dos Santos Neves Silva</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header
