import Content from '../layouts/content'
import Scrollchor from './global/scrollchor';

const Vehicles = [
  {
    name: 'Mercedes S550',
    img: '/static/vehicles/s550benz.png'
  },
  {
    name: 'Lincoln Town Car',
    img: '/static/vehicles/lincolntowncar.png'
  },
  {
    name: 'Chevy Suburban',
    img: '/static/vehicles/suburban.png'
  },
  {
    name: 'Ford Transit 350HD',
    img: '/static/vehicles/fordtransit.jpg'
  },
  {
    name: 'Cadillac Escalade',
    img: '/static/vehicles/escalade.png'
  },
  {
    name: 'Lincoln MKT',
    img: '/static/vehicles/mkt.png'
  }
]

export default ({onReserve}) => (
  <Content title="Our Fleet" id="reserve">
    <section className="fleet">
      {
        Vehicles.map(({name, img}, index) => {
          return (
            <div className="vehicle" key={index}>
              <div className="vehicle-image">
                <div><img src={img} alt=""/></div>
              </div>
              <span>{name}</span>
            </div>
          )
        })
      }
    </section>
      <div className="reserve"><Scrollchor to="reserve" className="reserve_button" beforeAnimate={ onReserve }>Reserve</Scrollchor></div>
    <style jsx>
      {`
        .fleet {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 10px;
        }
        .vehicle {
          max-width: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 30px;
        }
        .vehicle-image {
            display: flex;
            align-items: center;
            height: 220px;
        }
        .vehicle-image img{
          width: 100%;
        }
        span {
          color: #8a8a8a;
          padding-bottom: 10px;
        }
        .reserve { text-align: center }
         button {
          cursor: pointer;
          border: none;
          background: #1e3c72;
          padding: 10px 50px;
          color: #ffffff;
          max-width: 240px;
          border-radius: 4px;
          outline: none;
        }
        .reserve :global(.reserve_button) {
          cursor: pointer;
          border: none;
          background: #1e3c72;
          padding: 10px 50px;
          color: #ffffff;
          max-width: 240px;
          border-radius: 4px;
          outline: none;
          text-decoration: none;
        }
      `}
    </style>
  </Content>
)
