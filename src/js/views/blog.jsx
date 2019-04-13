import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";
export class Blog extends React.Component {
	render() {
		return (
			<div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
				<div className="col-md-6 px-0">
					<h1 className="display-4 font-italic">
						The return of Game of Thrones... And what we can expect
					</h1>
					<p className="lead my-3">
						{
							"As soon as 2019 began, HBO tweeted what we were all thinking: It's now officially the year that Game of Thrones comes back. The hit drama, based on George R. R. Martin's fantasy series, returns for its eighth and final season this spring—about a year and eight months after the Season 7 finale—and it'll be full of drama, action, and surprises"
						}
					</p>
					<p className="lead mb-0">
						<a href="#" className="text-white font-weight-bold">
							{"Continue reading..."}
						</a>
					</p>
				</div>
				<img
					className="card-img-right flex-auto d-none d-md-block d-flex pb-3 rounded-top rounded-bottom"
					data-src="holder.js/200x250?theme=thumb"
					alt="Thumbnail [250x250]"
					style={{
						width: "1250px",
						height: "450px"
					}}
					src="https://wallpapercave.com/wp/wp2090856.jpg"
					data-holder-rendered="true"
				/>
				<div className="row mb-2">
					<div className="col-md-6">
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									{"New!"}
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										{
											"Kids and how to deal with them. A safe guide."
										}
									</a>
								</h3>
								<div className="mb-1 text-muted">
									{"March 11"}
								</div>
								<p className="card-text text-dark mb-auto">
									{
										"You may feel stuck in between making your kids happy or making yourself happy..."
									}
								</p>
								<a href="#">{"Continue reading"}</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block d-flex"
								data-src="holder.js/200x250?theme=thumb"
								alt="Thumbnail [250x250]"
								style={{
									width: "250px",
									height: "250px"
								}}
								src="https://a61a085359000702575d-1091780f292ed74c8a63cc6ff151398e.ssl.cf3.rackcdn.com/00081894-623x400.jpeg"
								data-holder-rendered="true"
							/>
						</div>
					</div>

					<div className="col-md-6">
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									{"Featured"}
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										{
											"Analogy of Tyrion and Tywin Lannister's Grand Debate"
										}
									</a>
								</h3>
								<div className="mb-1 text-muted">
									{"March 10"}
								</div>
								<p className="card-text text-dark mb-auto">
									{"The Best father and son "}
								</p>
								<a href="#">{"Continue reading"}</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block d-flex"
								data-src="holder.js/200x250?theme=thumb"
								alt="Thumbnail [250x250]"
								style={{
									width: "250px",
									height: "250px"
								}}
								src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/05/12/14/got-2.jpg?w968h681"
								data-holder-rendered="true"
							/>
						</div>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col-md-6">
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									{}
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										{"Behind the scenes of GoT"}
									</a>
								</h3>
								<div className="mb-1 text-muted">
									{"March 9"}
								</div>
								<p className="card-text text-dark mb-auto">
									{"The people behind the screen of GoT"}
								</p>
								<a href="#">{"Continue reading"}</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block d-flex"
								data-src="holder.js/200x250?theme=thumb"
								alt="Thumbnail [250x250]"
								style={{
									width: "250px",
									height: "250px"
								}}
								src="https://res.cloudinary.com/format-magazine-production/image/upload/c_crop,h_762,w_915,x_100,y_0,f_jpg,f_auto/dpr_3.0/c_scale,w_767,h_638/game-of-thrones-cinematography-3"
								data-holder-rendered="true"
							/>
						</div>
					</div>

					<div className="col-md-6">
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									{}
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										{"Awaiting the end..."}
									</a>
								</h3>
								<div className="mb-1 text-muted">
									{"March 8"}
								</div>
								<p className="card-text text-dark mb-auto">
									{
										"The final season of Game of Thrones premieres in a literal matter of days, and the cast has been pretty scarce..."
									}
								</p>
								<a href="#">{"Continue reading"}</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block d-flex"
								data-src="holder.js/200x250?theme=thumb"
								alt="Thumbnail [250x250]"
								style={{
									width: "250px",
									height: "250px"
								}}
								src="data:image/jpeg;base64,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"
								data-holder-rendered="true"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
