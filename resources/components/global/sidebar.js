import Scrollchor from './scrollchor'

export default () => (
	<section className="sidebar">
		<div className="logo">
		      <img src="/static/logo.png" alt=""/>
          <h1>SkysLimo</h1>
		</div>
    <nav>
      <ul>
        <li><Scrollchor to="landing" className="nav-link">Home</Scrollchor></li>
        <li><Scrollchor to="about" className="nav-link">About Us</Scrollchor></li>
        <li><Scrollchor to="reserve" className="nav-link">Reserve</Scrollchor></li>
        <li><Scrollchor to="contact" className="nav-link">Contact</Scrollchor></li>
      </ul>
    </nav>
    <div className="social-links">
      <ul>
        <li><a href="https://www.facebook.com/skyslimo/"><img src="/static/facebook.png" alt=""/></a></li>
        <li><a href="#"><img src="/static/instagram.png" alt=""/></a></li>
        <li><a href="#"><img src="/static/linkedin.png" alt=""/></a></li>
      </ul>
    </div>

        <style jsx>
      {`
        .sidebar {
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          width: 262px;
          height: 100%;
          min-height: 100%;
          flex: 1;
          background: #EFEFEF;
          box-shadow: rgba(0, 0, 0, 0.14902) 2px 2px 4px;
          z-index: 99;

        }
        .logo {
          text-align: center;
          padding: 20px 0;
        }
        .logo img {
          max-width: 100%;
        }
        h1 {
          padding-top: 20px;
          color: #043b86;
          font-size: 18px;
        }
        nav {
          height: 50%;
        }
        ul {
          list-style-type: none;
          padding: 0;
          height: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        li {
          font-size: 20px;
          transition: all .3s;
        }
        li a, li :global(.nav-link) {
          text-decoration: none;
          text-transform: uppercase;
          color: #1e3c72;
          display: block;
          width: 100%;
          padding: 15px 60px;
        }
        .social-links {
          margin-top: auto;
          padding: 15px;
        }
        .social-links ul {
          flex-direction: row;
          padding: 0;
          margin: 0;
          width: 100%;
        }
        .social-links ul li {
          padding: 0;
        }
        .social-links a{
          padding: 0;
          display: block;
        }
        nav li:hover {
          background: rgba(0,0,0, .24);
          border-right: 10px solid #1e3c72;
        }
        nav li:hover a{
          font-style: bold;
        }
        @media (max-width: 969px) {
        .sidebar {
          display: none;
        }
      }
      `}
    </style>
	</section>
)
