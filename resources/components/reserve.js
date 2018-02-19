import Content from '../layouts/content'
import ReservationForm from './forms/reservation'

export default ({reservationType, cancelReservation, changeReserveType, handleReservation}) => (
    <Content title="Reserve" id="reserve">
      <section className="reserve">
        <div className="vehicle">
          <button className="cancelReservation" onClick={ () => cancelReservation()}>Cancel</button>
        </div>
        <div className="switchReserve">
          <button onClick={()=> changeReserveType('PTP')} className={reservationType === 'PTP' ? 'active' : ''}>Point To Point</button>
          <button onClick={()=> changeReserveType('Charter')} className={reservationType === 'Charter' ? 'active' : ''}>Charter/Hourly</button>
        </div>



        <ReservationForm reservationType={reservationType} handleReservation={handleReservation}/>


      </section>
      <style jsx>
      {`
        .vehicle {
          max-width: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 30px;
          margin: 0 auto;
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
        button {
          cursor: pointer;
        }
        .cancelReservation {
          border: none;
          background: #1e3c72;
          padding: 10px 50px;
          color: #ffffff;
          max-width: 240px;
          border-radius: 4px;
          outline: none;
        }
        .switchReserve {
          text-align: center;
        }
        .switchReserve button {
          display: inline-block;
          border: none;
          color: #1e3c72;
          background: #ffffff;
          padding: 15px 65px;
          margin: 10px;
          max-width: 240px;
          border-radius: 4px;
          outline: none;
          box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.19);
        }
        .switchReserve button.active {
          background: #1e3c72;
          color: #ffffff;
        }
      `}
      </style>
    </Content>
)
