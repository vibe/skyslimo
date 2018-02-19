import Scrollchor from './global/scrollchor'

export default ({toggleReservation}) => (
  <section className="landing" id="landing">
    <div className="logo"><img src="/static/logo.png" alt="Skys Limo"/></div>
    <h1>lets travel. <span>together.</span></h1>
    <Scrollchor to="reserve" className="nav-link" beforeAnimate={ toggleReservation }>reserve now</Scrollchor>
    <style jsx>
      {`
        .landing {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: url(/static/background.jpg) no-repeat center center;
          background-size: cover;
          color: #5e5f60;
        }
        h1 {
          padding-bottom: 20px;
        }
        span {
          color: #1e3c72;
        }
        .landing :global(.nav-link) {
          text-decoration: none;
          background: none;
          border: 4px solid #1e3c72;
          border-radius: 5px;
          padding: 8px 10px;
          color: #1e3c72;
        }
        img {
          max-width: 177px;
        }

        @media (min-width: 969px) {
          .logo {
            display: none;
            padding: 20px;
          }

        }

      `}
    </style>
  </section>
)
