import App from "../resources/hoc/app";
import { connect } from "refnux";


import Layout from "../resources/layouts/main";
import Landing from "../resources/components/landing";
import About from "../resources/components/about";
import Reservation from "../resources/components/reservation";
import Contact from "../resources/components/contact";

import setTitle from "../resources/store/setTitle";

const toggleHR = () =>
    ({ index }) => {
        return {
        	index: {
        		...index,
        		toggleHR: !index.toggleHR
        	}
         };
    };

const Page = connect((state, dispatch) => (
    <Layout title={state.title}>
        <Landing toggleReservation={() => dispatch(toggleHR())} />
        <About />
        <Reservation toggleReservation={state.index.toggleHR} />
        <Contact />
    </Layout>
));

Page.getInitialProps = async function(context) {
    const { store } = context;
    store.dispatch(setTitle("SkysLimo - San Jose Limo Service"));
};

export default App(Page);
