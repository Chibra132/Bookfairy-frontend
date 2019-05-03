import React from "react";
import PropTypes from "prop-types";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/product.css";

// import { Popover } from "react-native-modal-popover";

export class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mainPic: ""
		};
	}

	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="container-fluid">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									// let product =
									// 	store.product[
									// 		this.props.match.params.theid
									// 	];

									let product = store.product.find(
										product =>
											product.ID ==
											this.props.match.params.theid
									);
									if (typeof product === "undefined") {
										return <h1>Product Coming soon</h1>;
									} else {
										return (
											<div
												className="details-col-6"
												id="image">
												<div className="preview">
													<div className="preview-pic tab-content">
														<div
															className="tab-pane active"
															id="pic-1">
															<img
																style={{
																	objectFit:
																		"contain"
																}}
																src={
																	this.state
																		.mainPic ===
																	""
																		? product
																				.acf
																				.main_pic
																		: this
																				.state
																				.mainPic
																}
															/>
														</div>
													</div>
													<div className="d-flex">
														<ul className="list-inline">
															<li className="list-inline-item">
																<button
																	onMouseOver={() =>
																		this.setState(
																			{
																				mainPic:
																					product
																						.acf
																						.smallpic
																			}
																		)
																	}>
																	<img
																		src={
																			product
																				.acf
																				.smallpic
																		}
																	/>
																</button>
															</li>
														</ul>
														<ul className="list-inline">
															<li className="list-inline-item">
																<button
																	onMouseOver={() =>
																		this.setState(
																			{
																				mainPic:
																					"https://images-na.ssl-images-amazon.com/images/I/51zS8Rj-0rL._SX352_BO1,204,203,200_.jpg"
																			}
																		)
																	}>
																	<div className="imgContainer" />
																	<img
																		src={
																			product
																				.acf
																				.smallpictwo
																		}
																	/>
																</button>
															</li>
														</ul>
														<ul className="list-inline">
															<li className="list-inline-item">
																<button
																	onMouseOver={() =>
																		this.setState(
																			{
																				mainPic:
																					"https://images-na.ssl-images-amazon.com/images/I/91sgJoJ43iL._SX352_BO1,204,203,200_.jpg"
																			}
																		)
																	}>
																	<div className="imgContainer" />
																	<img
																		src={
																			product
																				.acf
																				.smallpicthree
																		}
																	/>
																</button>
															</li>
														</ul>
														<ul className="list-inline">
															<li className="list-inline-item">
																<button
																	onMouseOver={() =>
																		this.setState(
																			{
																				mainPic:
																					"https://images-na.ssl-images-amazon.com/images/I/91ANAInsaSL._SX352_BO1,204,203,200_.jpg"
																			}
																		)
																	}>
																	<div className="imgContainer" />
																	<img
																		src={
																			product
																				.acf
																				.smallpicfour
																		}
																	/>
																</button>
															</li>
														</ul>
													</div>
												</div>

												<div className="details col-6">
													<div className="product-title">
														{" "}
														{product.post_title}
													</div>
													<div className="rating">
														<div className="stars">
															<span className="fa fa-star checked" />
															<span className="fa fa-star checked" />
															<span className="fa fa-star checked" />
															<span className="fa fa-star" />
															<span className="fa fa-star" />
														</div>
														<div>
															<Button
																color="primary"
																id="toggler"
																style={{
																	marginBottom:
																		"1rem"
																}}>
																{"Paperback from " +
																	"$" +
																	product.acf
																		.current_price}
															</Button>
															<UncontrolledCollapse toggler="#toggler">
																<Card>
																	<img
																		src={
																			product
																				.acf
																				.image
																		}
																	/>

																	<p>
																		Buy
																		paperback{" "}
																		<i className="fas fa-shopping-cart" />{" "}
																		by{" "}
																		<a href="http://bookfairyfrontend-marc1210.c9users.io:/Product/1">
																			Paperback
																		</a>
																	</p>

																	<CardBody />
																</Card>
															</UncontrolledCollapse>
														</div>
														<span className="review-no">
															41 reviews
														</span>
													</div>
													<p className="product-description">
														{product.acf.text}
													</p>
													<h4 className="price">
														current price:{" "}
														<span>
															{"$" +
																product.acf
																	.price}
														</span>
													</h4>
													<p className="vote">
														<strong>91%</strong> of
														buyers enjoyed this
														product!{" "}
														<strong>
															(87 votes)
														</strong>
													</p>
													<h5 className="sizes">
														<span
															className="size"
															data-toggle="tooltip"
															title=""
														/>
														<span
															className="size"
															data-toggle="tooltip"
															title=""
														/>
														<span
															className="size"
															data-toggle="tooltip"
															title=""
														/>
														<span
															className="size"
															data-toggle="tooltip"
															title=""
														/>
													</h5>
													<h5 className="colors">
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
																onClick={() => {
																	actions.addtocart(
																		store
																			.product[
																			this
																				.props
																				.match
																				.params
																				.theid
																		]
																	);
																}}
																className="add-to-cart btn btn-default"
																type="button">
																add to cart
															</button>
														</Link>
													</div>
												</div>
											</div>
										);
									}
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
