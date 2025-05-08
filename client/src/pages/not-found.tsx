function NotFoundPage() {
    return (
      <div className="page page--not-found">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="/">
                  <img
                    className="header__logo"
                    src="/img/logo.svg"
                    alt="Rent service logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
  
        <main className="page__main page__main--404 container">
          <h1 className="visually-hidden">404: Not Found</h1>
          <div className="not-found">
            <p className="not-found__text">Sorry, the page you are looking for does not exist.</p>
            <a className="not-found__link button" href="/">Go back to main page</a>
          </div>
        </main>
      </div>
    );
  }
  
  export { NotFoundPage };