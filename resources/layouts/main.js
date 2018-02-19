import Header from '../components/global/header'
import Sidebar from '../components/global/sidebar'

export default ({title, children}) => (
	<div className="layout">
    <Header title={title}/>
		<Sidebar />
		<div className="content">{children}</div>
		   <style jsx>
      {`
        .layout {
          height: 100%;
        }
        .content {
          height: 100%;
          margin-left: 262px;
        }

        @media (max-width: 969px) {
          .content {
            margin-left: 0;
          }
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
)
