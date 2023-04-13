import "../stylesheets/headerDropDown.css";

const HeaderDropDown = () => {
    const linkItems = ['HOME', 'ABOUT', 'SERVICES', 'PRODUCTS', 'CONTACT', 'LOGIN'];
    return (
        <div className="header-dropdown">
            {
                linkItems.map((item) => (
                    < div className="menu-links">{item}</div>
                ))
            }
        </div >
    )
}

export default HeaderDropDown;