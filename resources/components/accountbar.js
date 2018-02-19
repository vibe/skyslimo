import Link from "next/link";

export default ({ authenticated }) => (
  <section className="userbar">
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/logout"><a>Logout</a></Link></li>
      </ul>

    <style jsx>
      {
        `
			.userbar {
				width: 100%;
				position: fixed;
				background: #ffffff;
				z-index: 98;
    			box-shadow: rgba(0, 0, 0, 0.14902) 2px 2px;
			}
			.userbar ul {
				list-style-type: none;
				margin: 0;
				padding:0;
				text-align: right;

			}
			.userbar li {
				display: inline-block;
				padding: 0 10px;
			}
			a {
				padding: 15px 10px;
				display: block;
				text-decoration: none;
				color: #1e3c72;
			}
		`
      }
    </style>
  </section>
);
