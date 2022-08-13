export default function Info() {
  return (
      <section className="info-section">
          <img className="info-section__img" src="info-profile.jpeg" alt="picture of a person" />
          <div className="info-section__text">
            <h1 className="info-section__title">Franklin Pineda</h1>
            <h2 className="info-section__profession">Full-stack developer</h2>
            <p className="info-section__page"><a>franklindev.co</a></p>
            <div className="info-section__links-buttons">
                <button className="info-section__button email"><span></span>Email</button>
                <button className="info-section__button linkedln"><span></span>Linkedln</button>
            </div>
          </div>
      </section>
  )
}