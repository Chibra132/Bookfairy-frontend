import React from "react";
import { Link } from "react-router-dom";

var NewComponent = React.createClass({
	render: function() {
		return (
			<div>
				<link
					href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
					rel="stylesheet"
					id="bootstrap-css"
				/>
				{/*---- Include the above in your HEAD tag --------*/}
				<link
					href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
					rel="stylesheet"
					id="bootstrap-css"
				/>
				<div className="cotn_principal">
					<div className="cont_centrar">
						<div className="cont_login">
							<div className="cont_info_log_sign_up">
								<div className="col_md_login">
									<div className="cont_ba_opcitiy">
										<h2>LOGIN</h2>
										<p />
										<button
											className="btn_login"
											onclick="cambiar_login()">
											LOGIN
										</button>
									</div>
								</div>
								<div className="col_md_sign_up">
									<div className="cont_ba_opcitiy">
										<h2>SIGN UP</h2>
										<p />
										<button
											className="btn_sign_up"
											onclick="cambiar_sign_up()">
											SIGN UP
										</button>
									</div>
								</div>
							</div>
							<div className="cont_back_info">
								<div className="cont_img_back_grey">
									<img
										src="https://www.gtagangwars.de/suite/images/styleLogo-6bd77433ddf78bd8477ea7306e804f677bc925d0.png"
										alt
									/>
								</div>
							</div>
							<div className="cont_forms">
								<div className="cont_img_back_">
									<img
										src="https://www.gtagangwars.de/suite/images/styleLogo-6bd77433ddf78bd8477ea7306e804f677bc925d0.png"
										alt
									/>
								</div>
								<div className="cont_form_login">
									<a
										href="#"
										onclick="ocultar_login_sign_up()">
										<i className="material-icons"></i>
									</a>
									<h2>LOGIN</h2>
									<input type="text" placeholder="Username" />
									<input
										type="password"
										placeholder="Password"
									/>
									<button
										className="btn_login"
										onclick="cambiar_login()">
										LOGIN
									</button>
								</div>
								<div className="cont_form_sign_up">
									<a
										href="#"
										onclick="ocultar_login_sign_up()">
										<i className="material-icons"></i>
									</a>
									<h2>SIGN UP</h2>
									<input type="text" placeholder="Username" />
									<input
										type="password"
										placeholder="Password"
									/>
									<input
										type="password"
										placeholder="Confirm Password"
									/>
									<button
										className="btn_sign_up"
										onclick="cambiar_sign_up()">
										SIGN UP
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
