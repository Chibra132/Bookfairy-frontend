import React from "react";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import TakeMoney from "../component/Check_views.jsx";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Cart_Checkout extends React.Component {
	//	export default class TakeMoney extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			mult: 1
		};
	}

	updateCart = store => {
		let state = this.state;
		state.total = 0;
		for (let i = 0; i < store.cart.length; i++) {
			state.total += store.cart[i].price * store.cart[i].quantity;
		}
		this.setState({
			total: state.total
		});
	};

	handleChange(e, index) {
		console.log(e.target.value);
		console.log(typeof parseInt(e.target.value));
		let toNum = parseInt(e.target.value);
		this.setState({ mult: toNum });
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						console.log(store.cart[0].price * this.mult);
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
																{/*	<h5>
																	<span className="glyphicon glyphicon-shopping-cart" />{" "}
																	Shopping
																	Cart
																</h5>*/}
															</div>
															<div className="col-xs-6">
																<Link to="/Product/1">
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
																					product
																						.item
																						.post_title
																				}
																			</strong>
																		</h4>
																		<h4>
																			<small>
																				{
																					product
																						.item
																						.acf
																						.text
																				}
																			</small>
																		</h4>
																	</div>
																	<div className="col-xs-6">
																		<div className="col-xs-6 text-right">
																			<h6>
																				<strong>
																					&#36;
																					{product
																						.item
																						.acf
																						.price *
																						this
																							.state
																							.mult}
																					<span className="text-muted">
																						x
																					</span>
																				</strong>
																			</h6>
																		</div>
																		<div className="col-xs-4">
																			<input
																				onChange={e => {
																					this.handleChange(
																						e,
																						index
																					);
																					actions.increaseQty(
																						e,
																						index
																					);
																				}}
																				type="number"
																				min="1"
																				max="99"
																				step="1"
																				// className="form-control input-sm"
																				value={
																					product.quantity
																				}
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
																		this
																			.state
																			.total
																	}
																</strong>
															</h4>
														</div>
														<div className="col-xs-3">
															<Link to="/">
																<TakeMoney />
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
			</div>
		);
	}
}
