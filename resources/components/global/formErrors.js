export default ({errors}) => (
<section className="errors">
	<ul>
		{ errors.map((error, index) => {
			return (<li className="error" key={index}> - {error.payload.message}</li>)
		}) }
	</ul>
	<style jsx>
	{`
		.errors {
			padding: 15px;
			width: 80%;
 			margin: 0 auto;
 			margin-bottom: 30px;
		}
		ul {
			text-align: left;
			padding: 0;
			margin: 0;
		}
		li {
			margin-bottom: 10px;
			list-style: none;
			background: #ECC8C5;
			color: #B23230;
			border: 2px solid #e42525;
			padding: 5px;
		}
	`}
	</style>
</section>
)