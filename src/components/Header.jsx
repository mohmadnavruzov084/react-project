function Header() {
  return (
    <>
      <title>MovieHub</title>
      <header className="header">
        <div className="container">
          <div className="header-box">
            <div className="header__logo">
              <a href="#">MovieHub</a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a href="">Главная</a>
                </li>
                <li className="header__nav-item">
                  <a href="">Категории</a>
                </li>
                <li className="header__nav-item">
                  <a href="">Поиск</a>
                </li>
                <li className="header__nav-item">
                  <a href="">Обо мне</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr className="header-hr" />
      </header>
    </>
  );
}

export default Header;
