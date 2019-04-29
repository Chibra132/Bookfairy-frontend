import React from "react";
import PropTypes from "prop-types";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
// import { Popover } from "react-native-modal-popover";

export class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mainPic:
				"https://images-na.ssl-images-amazon.com/images/I/51ypCAPqFuL._SX352_BO1,204,203,200_.jpg"
		};
	}

	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="container-fliud">
						<div className="row">
							<div className="details-col-6">
								<div className="preview">
									<div className="preview-pic tab-content">
										<div
											className="tab-pane active"
											id="pic-1">
											<img src={this.state.mainPic} />
										</div>
									</div>
									<div className="d-flex">
										<ul className="list-inline">
											<li className="list-inline-item">
												<button
													onMouseOver={() =>
														this.setState({
															mainPic:
																"https://images-na.ssl-images-amazon.com/images/I/51ypCAPqFuL._SX352_BO1,204,203,200_.jpg"
														})
													}>
													<img src="https://images-na.ssl-images-amazon.com/images/I/91TJxJcXJ6L._AC_SX75_CR,0,0,75,75_.jpg" />
												</button>
											</li>
										</ul>
										<ul className="list-inline">
											<li className="list-inline-item">
												<button
													onMouseOver={() =>
														this.setState({
															mainPic:
																"https://images-na.ssl-images-amazon.com/images/I/51zS8Rj-0rL._SX352_BO1,204,203,200_.jpg"
														})
													}>
													<div className="imgContainer" />
													<img src="https://images-na.ssl-images-amazon.com/images/I/91hA29YrnKL._AC_SX75_CR,0,0,75,75_.jpg" />
												</button>
											</li>
										</ul>
										<ul className="list-inline">
											<li className="list-inline-item">
												<button
													onMouseOver={() =>
														this.setState({
															mainPic:
																"https://images-na.ssl-images-amazon.com/images/I/91sgJoJ43iL._SX352_BO1,204,203,200_.jpg"
														})
													}>
													<div className="imgContainer" />
													<img src="https://images-na.ssl-images-amazon.com/images/I/91sgJoJ43iL._AC_SX75_CR,0,0,75,75_.jpg" />
												</button>
											</li>
										</ul>
										<ul className="list-inline">
											<li className="list-inline-item">
												<button
													onMouseOver={() =>
														this.setState({
															mainPic:
																"https://images-na.ssl-images-amazon.com/images/I/91ANAInsaSL._SX352_BO1,204,203,200_.jpg"
														})
													}>
													<div className="imgContainer" />
													<img src="https://images-na.ssl-images-amazon.com/images/I/91ANAInsaSL._AC_SX75_CR,0,0,75,75_.jpg" />
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<Context.Consumer>
								{({ store, actions }) => {
									let product =
										store.product[
											this.props.match.params.theid
										];

									console.log(product);

									if (product == undefined) {
										return <h1>Product Coming soon</h1>;
									} else {
										return (
											<div className="details col-6">
												<h3 className="product-title">
													{" "}
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
													<div>
														<Button
															color="primary"
															id="toggler"
															style={{
																marginBottom:
																	"1rem"
															}}>
															Paperback from
															$37.76
														</Button>
														<UncontrolledCollapse toggler="#toggler">
															<Card>
																<img src="https://images-na.ssl-images-amazon.com/images/I/61CWamjtpTL._SY493_BO1,204,203,200_.jpg" />

																<p>
																	Buy
																	paperback{" "}
																	<i className="fas fa-shopping-cart" />{" "}
																	by{" "}
																	<a href="http://bookfairyfrontend-marc1210.c9users.io:8080/Product/1">
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
													The George R.R. Martin Song
													Of Ice and Fire Hardcover
													Box Set featuring A Game of
													Thrones, A Clash of Kings, A
													Storm of Swords, and A Feast
													for Crows (Amazon Exclusive)
													(Song of Fire and Ice)
													Hardcover – Box set,
													November 29, 2011
												</p>
												<h4 className="price">
													current price:{" "}
													<span>$180</span>
												</h4>
												<p className="vote">
													<strong>91%</strong> of
													buyers enjoyed this product!{" "}
													<strong>(87 votes)</strong>
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

														<button
															className="like btn btn-default"
															type="button">
															<span className="far fa-heart" />
														</button>
													</Link>
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
