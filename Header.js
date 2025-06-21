const Header = ({ dark, children, className, to }) => {
    dark = !!dark ? "dark" : "light";
    return (
        <nav
            className={`navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")}
        >
            {to ? (
                <a href={to} className="navbar-brand">
                    {children}
                </a>
            ) : (
                <span className="navbar-brand">{children}</span>
            )}
        </nav>
    );
};
export default Header;
