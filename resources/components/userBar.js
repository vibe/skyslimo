import Link from "next/link";

export default ({ authenticated }) => (
    <section className="userbar">
        {authenticated
            ? <ul>
                  <li><Link href="/account"><a>My Account</a></Link></li>
                  <li><Link href="/account/history"><a>History</a></Link></li>
                  <li><Link href="/account/payment"><a>Payment</a></Link></li>
              </ul>
            : <ul>
                  <li><Link href="/login"><a>Login</a></Link></li>
                  <li><Link href="/register"><a>Register</a></Link></li>
              </ul>}

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
				padding: 0 20px;
				text-align: center;
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

			@media (min-width: 969px) {
				.userbar {
					margin-left: -262px;
				}
				.userbar ul {
					text-align: right;
				}
			}
		`
            }
        </style>
    </section>
);
