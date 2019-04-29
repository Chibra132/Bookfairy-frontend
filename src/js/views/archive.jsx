import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
export class Archive extends React.Component {
	render() {
		return (
			<div>
				<link
					href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
					rel="stylesheet"
					id="bootstrap-css"
				/>
				{/*---- Include the above in your HEAD tag --------*/}
				<link
					rel="stylesheet"
					href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"
				/>
				<div className="container">
					<div className="well">
						<div className="media">
							<a className="pull-left" href="#">
								<img
									className="media-object"
									src="https://frolic.media/wp-content/uploads/2019/04/victoria-in-my-head-goodreads.jpg"
								/>
							</a>
							<div className="media-body">
								<h4 className="media-heading">
									Book of last month
								</h4>
								<p className="text-right">By Alexandra</p>

								<p>
									The Victoria in my Head by Janelle Milanes
								</p>
								<p>
									Victoria Cruz is a girl that is tired of the
									predictable monotony of her life. She goes
									to a prestigious prep school in New York and
									she lives with overprotective Cuban parents.
									Her parents have many expectations for her
									to go to an Ivy League college and
									essentially live the American dream that
									they themselves have worked hard to provide
									for her. Only Victoria has different plans
									in mind where she dreams of singing on
									stage. When she encounters a sexy guy named
									Strand who gives her a flyer to audition for
									his band, she makes a decision that will
									change her life forever. Victoria in my Head
									hits me on a deeply emotional level because
									the main character is Cuban-American like
									myself and struggles through all the
									feelings I had about myself in high school.
									She is still trying figuring out what she
									wants in her life and doesn’t feel like she
									fits into her Cuban-American identity.
									Victoria is constantly living in her own
									head and she is constantly daydreaming about
									the kind of life or the kind of girl she
									wants to be. When get gets the opportunity
									to be in a rock band, she gets caught up in
									a love triangle with two bandmates Levi and
									Strand! This is a love triangle that is done
									so perfectly because it mounts the tension,
									the conflict, and the palpable chemistry
									between the characters. This own voices
									underrated book is a story chockful of indie
									rock with all the teen angst, growing pains
									you can ever ask for, and it deserves some
									love!
								</p>
								<ul className="list-inline list-unstyled">
									<li>
										<span>
											<i className="glyphicon glyphicon-calendar" />{" "}
											30 days, 8 hours{" "}
										</span>
									</li>
									<li>|</li>
									<span>
										<i className="glyphicon glyphicon-comment" />{" "}
									</span>
									<li>|</li>
									{/*<li>
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star-empty" />
									</li>*/}
									<li>|</li>
									<li>
										{/* Use Font Awesome http://fortawesome.github.io/Font-Awesome/ */}
										{/*	<span>
											<i className="fa fa-facebook-square" />
										</span>
										<span>
											<i className="fa fa-twitter-square" />
										</span>
										<span>
											<i className="fa fa-google-plus-square" />
										</span>*/}
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="well">
						<div className="media">
							<a className="pull-left" href="#">
								<img
									className="media-object"
									src="https://frolic.media/wp-content/uploads/2019/04/amy-and-roger-goodreads.jpg"
								/>
							</a>
							<div className="media-body">
								<h4 className="media-heading">
									Book of last year
								</h4>
								<p className="text-right">By Alexandra</p>
								<p>
									Amy and Roger’s Epic Detour by Morgan Matson
								</p>
								<p>
									Amy and Roger travel cross-country from
									California to Stanwich, Connecticut and they
									go through an emotional journey that brings
									them closer together and makes them realize
									that love and life is a detour. This is the
									kind of book where you feel like your on a
									road trip with Amy and Roger and it’s the
									kind of road trip that you never want to
									end. Amy and Roger’s Epic Detour is one of
									the most EPIC musically-inspired romances I
									have ever read! Matson has a gift when it
									comes to crafting the most incredible
									playlists and I consider her my mixtape soul
									sister. The romance behind Amy and Roger’s
									romance blooms through their intricately
									crafted road trip playlists. There are songs
									in the book that introduced me to new
									artists such as Wilco’s “California Stars”
									and it’s the one song that repeatedly plays
									in my head.
								</p>
								<ul className="list-inline list-unstyled">
									<li>
										<span>
											<i className="glyphicon glyphicon-calendar" />{" "}
											1 year, 2 days, 8 hours{" "}
										</span>
									</li>
									<li>|</li>
									<span>
										<i className="glyphicon glyphicon-comment" />{" "}
										2 comments
									</span>
									<li>|</li>
									{/*	<li>
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star-empty" />
									</li>*/}
									<li>|</li>
									<li>
										{/* Use Font Awesome http://fortawesome.github.io/Font-Awesome/ */}
										{/*		<span>
											<i className="fa fa-facebook-square" />
										</span>
										<span>
											<i className="fa fa-twitter-square" />
										</span>
										<span>
											<i className="fa fa-google-plus-square" />
										</span>*/}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
