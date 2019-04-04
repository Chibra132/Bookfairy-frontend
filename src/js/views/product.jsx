import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Product extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="container-fliud">
						<div className="wrapper row">
							<div className="preview col-6">
								<div className="preview-pic tab-content">
									<div className="tab-pane active" id="pic-1">
										<img src="https://images-na.ssl-images-amazon.com/images/I/51ypCAPqFuL._SX352_BO1,204,203,200_.jpg" />
									</div>
								</div>
								<ul className="preview-thumbnail nav nav-tabs">
									<li className="active">
										<a
											data-target="#pic-1"
											data-toggle="tab">
											<img src="https://images-na.ssl-images-amazon.com/images/I/51ypCAPqFuL._AC_SX60_CR,0,0,60,60_.jpg" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-2"
											data-toggle="tab">
											<img src="https://images-na.ssl-images-amazon.com/images/I/51zS8Rj-0rL._AC_SX60_CR,0,0,60,60_.jpg" />
										</a>
									</li>
									<li>
										<a
											data-target="#pic-3"
											data-toggle="tab">
											<img src="https://images-na.ssl-images-amazon.com/images/I/41oDNfcwAvL._AC_SX60_CR,0,0,60,60_.jpg" />
										</a>
									</li>
								</ul>
							</div>
							<Context.Consumer>
								{({ store }) => {
									let product =
										store.product[
											this.props.match.params.theid
										];
									return (
										<div className="details col-6">
											<h3 className="product-title">
												women&apos;s{" "}
												{product.productName}
											</h3>
											<div className="rating">
												<div className="stars">
													<span className="fa fa-star checked" />
													<span className="fa fa-star checked" />
													<span className="fa fa-star checked" />
													<span className="fa fa-star" />
													<span className="fa fa-star" />
												</div>
												<span className="review-no">
													41 reviews
												</span>
											</div>
											<p className="product-description">
												High Quality soft leather split
												sole slip on jazz shoes. The
												shoes wrap the foot closely for
												professional use. Elasticity
												makes shoes easily slip on.
												Light and durable soft leather.
											</p>
											<h4 className="price">
												current price: <span>$180</span>
											</h4>
											<p className="vote">
												<strong>91%</strong> of buyers
												enjoyed this product!{" "}
												<strong>(87 votes)</strong>
											</p>
											<h5 className="sizes">
												sizes:
												<span
													className="size"
													data-toggle="tooltip"
													title="small">
													s
												</span>
												<span
													className="size"
													data-toggle="tooltip"
													title="medium">
													m
												</span>
												<span
													className="size"
													data-toggle="tooltip"
													title="large">
													l
												</span>
												<span
													className="size"
													data-toggle="tooltip"
													title="xtra large">
													xl
												</span>
											</h5>
											<h5 className="colors">
												colors:
												<span
													className="color orange not-available"
													data-toggle="tooltip"
													title="Not In store"
												/>
												<span className="color green" />
												<span className="color red" />
											</h5>
											<div className="action">
												<Link to="/Cart_Checkout">
													<button
														className="add-to-cart btn btn-default"
														type="button">
														add to cart
													</button>
												</Link>
												<button
													className="like btn btn-default"
													type="button">
													<span className="far fa-heart" />
												</button>
											</div>
										</div>
									);
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Product.propTypes = {
// 	match: PropTypes.object

Product.propTypes = {
	match: PropTypes.object
};
