import React from "react";
import PropTypes from "prop-types";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			mainImage:
				"https://images-na.ssl-images-amazon.com/images/I/51ypCAPqFuL._SX352_BO1,204,203,200_.jpg"
		};
	}

	handleOnMouseOver(e) {}

	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="container-fliud">
						<div className="wrapper row">
							<div className="preview col-6">
								<div className="preview-pic tab-content">
									<div className="tab-pane active" id="pic-1">
										<img
											onMouseOver={this.handleOnMouseOver}
											src={this.state.mainImage}
										/>
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
															marginBottom: "1rem"
														}}>
														Paperback from $37.76
													</Button>
													<UncontrolledCollapse toggler="#toggler">
														<Card>
															<img src="https://images-na.ssl-images-amazon.com/images/I/61CWamjtpTL._SY493_BO1,204,203,200_.jpg" />

															<p>
																Buy from me{" "}
																<i className="fas fa-shopping-cart" />{" "}
																by{" "}
																<a href="https://video.search.yahoo.com/search/video;_ylt=AwrC5rI66KdchUMAV937w8QF;_ylu=X3oDMTBncGdyMzQ0BHNlYwNzZWFyY2gEdnRpZAM-;_ylc=X1MDOTY3ODEzMDcEX3IDMgRhY3RuA2NsawRiY2sDOTJidjljcGU5bzJwaSUyNmIlM0QzJTI2cyUzRDNjBGNzcmNwdmlkAy45N0REREV3TGpHUkwubG1YSndMTWdlbU1UUTNMZ0FBQUFBUFFFVDMEZnIDbWNhZmVlBGZyMgNzYS1ncARncHJpZANmRjU1MnJQeFJINkhoM19ubnNhcjhBBG10ZXN0aWQDbnVsbARuX3JzbHQDNjAEbl9zdWdnAzEEb3JpZ2luA3ZpZGVvLnNlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMEcXN0cmwDMjkEcXVlcnkDeW91dHViZSBnYW1lIG9mIHRocm9uZXMgYm9va3MEdF9zdG1wAzE1NTQ1MDk2NjEEdnRlc3RpZANudWxs?gprid=fF552rPxRH6Hh3_nnsar8A&pvid=.97DDDEwLjGRL.lmXJwLMgemMTQ3LgAAAAAPQET3&p=youtube+game+of+thrones+books&ei=UTF-8&fr2=p%3As%2Cv%3Av%2Cm%3Asa&fr=mcafee#id=1&vid=60b89f1c5cda49e943698942460af4fe&action=view">
																	Check out
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
												The George R.R. Martin Song Of
												Ice and Fire Hardcover Box Set
												featuring A Game of Thrones, A
												Clash of Kings, A Storm of
												Swords, and A Feast for Crows
												(Amazon Exclusive) (Song of Fire
												and Ice) Hardcover – Box set,
												November 29, 2011
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
