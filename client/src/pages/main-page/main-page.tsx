import { CitiesCard } from '../../components/cities-card/cities-card';
function MainPage(){
    const cards = Array.from({ length: 6 });

  return (
    <div className="page page--gray page--main">
      <header className="header">
      </header>

      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
              </form>
              <div className="cities__places-list places__list tabs__content">
                {cards.map((_, index) => (
                  <CitiesCard key={index} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { MainPage };