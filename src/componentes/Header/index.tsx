import logosvg from "../../SVG/logo.svg"

const Header = () => {
    const desclogo = "Essa é a descrição do Blog"


    return(
        <header className="flex-space-between">

            <div className="logo">
                <img src={logosvg} alt={desclogo}/>
            </div>
            <div className="search">
                <input type="text" className="input=search" name="search"/>
            </div>

            <ul className="menu">
                <li className="nav-link "><a href="#">Option 1</a></li>
                <li className="nav-link "><a href="#">Option 2</a></li>
                <li className="nav-link "><a href="#">Option 3</a></li>
            </ul>

        </header>
    );

}

export default Header