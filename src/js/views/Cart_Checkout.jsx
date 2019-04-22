import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Cart_Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0
		};
	}

	updateCart = store => {
		let state = this.state;
		state.total = 0;
		for (let i = 0; i < store.cart.length; i++) {
			state.total += store.cart[i].price * store.cart[i].quanity;
		}
		this.setState({
			total: state.total
		});
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<link
								href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"
								rel="stylesheet"
								id="bootstrap-css"
							/>
							{/*---- Include the above in your HEAD tag --------*/}
							<div className="container">
								<div className="row">
									<div className="col-xs-8">
										<div className="panel panel-info">
											<div className="panel-heading">
												<div className="panel-title">
													<div className="row">
														<div className="col-xs-6">
															<h5>
																<span className="glyphicon glyphicon-shopping-cart" />{" "}
																Shopping Cart
															</h5>
														</div>
														<div className="col-xs-6">
															<Link to="/Product">
																<button
																	type="button"
																	className="btn btn-primary btn-sm btn-block">
																	<span className="glyphicon glyphicon-share-alt" />{" "}
																	Continue
																	shopping
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div className="panel-body">
												<hr />
												{store.cart.map(
													(product, index) => {
														return (
															<div
																className="row"
																key={index}>
																<div className="col-xs-2">
																	<img
																		className="img-responsive"
																		src="https://images-na.ssl-images-amazon.com/images/I/51ypCAPqFuL._SX352_BO1,204,203,200_.jpg"
																	/>
																</div>
																<div className="col-xs-4">
																	<h4 className="product-name">
																		<strong>
																			{
																				product.productName
																			}
																		</strong>
																	</h4>
																	<h4>
																		<small>
																			{
																				product.productDescription
																			}
																		</small>
																	</h4>
																</div>
																<div className="col-xs-6">
																	<div className="col-xs-6 text-right">
																		<h6>
																			<strong>
																				{
																					product.price
																				}
																				<span className="text-muted">
																					x
																				</span>
																			</strong>
																		</h6>
																	</div>
																	<div className="col-xs-4">
																		<input
																			type="number"
																			className="form-control input-sm"
																			value={String(
																				product.quantity
																			)}
																		/>
																	</div>
																	<div className="col-xs-2">
																		<button
																			onClick={() => {
																				actions.deletecart(
																					index
																				);
																			}}
																			type="button"
																			className="btn btn-link btn-xs">
																			<span className="glyphicon glyphicon-trash">
																				{" "}
																			</span>
																		</button>
																	</div>
																</div>
															</div>
														);
													}
												)}
												<div className="row">
													<div className="text-center">
														<div className="col-xs-9">
															<h6 className="text-right">
																Added items?
															</h6>
														</div>
														<div className="col">
															<button
																onClick={() => {
																	this.updateCart(
																		store
																	);
																}}
																type="button"
																className="btn btn-default">
																Update cart
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className="panel-footer">
												<div className="row text-center">
													<div className="col-xs-9">
														<h4 className="text-right">
															Total
															{""}
															<strong>
																{
																	this.state
																		.total
																}
															</strong>
														</h4>
													</div>
													<div className="col-xs-3">
														<Link to="/Thanks">
															<button
																type="button"
																className="btn btn-success btn-block">
																Checkout
																<a href="https://www.paypal.com/us/signin" />
																<p />
															</button>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
