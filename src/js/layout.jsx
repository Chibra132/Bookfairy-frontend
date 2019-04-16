import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";



import { Demo } from "./views/demo.jsx";

import { Blog } from "./views/blog.jsx";
import { Home } from "./views/home.jsx";
import { Cart_Checkout } from "./views/Cart_Checkout.jsx";

import { Single } from "./views/single.jsx";
import { Product } from "./views/product.jsx";
import { Archive } from "./views/archive.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/blog" component={Blog} />
							<Route path="/product/:theid" component={Product} />
							<Route path="/archive" component={Archive} />

							<Route
								path="/cart_checkout"
								component={Cart_Checkout}
							/>

							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
