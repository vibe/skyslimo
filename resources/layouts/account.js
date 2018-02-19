import React from 'react'
import Header from '../components/global/header'

class AccountPage extends React.Component {
  constructor(props) {
    super(props)
  }
  static async getInitialProps({req}) {
    console.log("account getInitialProps")
    return {
      test: 'test'
    }
  }
  render() {
    return  (
      <div className="layout">
        <Header title={this.props.title}/>
        <section className="content">
          { this.props.children }
        </section>
        <style jsx>
          {`
				.layout {
					height: 100%;
					width: 100%;
					background: #ffffff;
				}
				.content {
				}
			`}
        </style>
        <style jsx global>
          {`
        @font-face {
		    font-family: 'Proxima Nova';
		    src: url('/static/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.eot');
		    src: url('/static/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.eot?#iefix') format('embedded-opentype'),
		         url('/static/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.woff') format('woff'),
		         url('/static/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.ttf') format('truetype'),
		         url('/static/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.svg#proxima_nova_altregular') format('svg');
		    font-weight: normal;
		    font-style: normal;
		}

		* {
		  font-family: 'Proxima Nova'
		}
      `}
        </style>
      </div>
    )}
}

export default AccountPage
