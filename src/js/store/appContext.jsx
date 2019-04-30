import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			// this function is the equivalent to "window.onLoad"
			// it only run once on the entire application lifetime
			// you should do your ajax requests here

			fetch(
<<<<<<< HEAD
				"https://bookfairy-semq.c9users.io/wp-json/sample_api/v1/posts",
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				}
			)
				.then(response => {
					if (response.status !== 200) {
						alert(
							"A rat ate our network cables again! " +
								response.status
						);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.blogcards = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});

			fetch(
				"https://bookfairy-semq.c9users.io/wp-json/sample_api/v1/gallery",
=======
				"https://bookfairy-semq.c9users.io/wp-json/sample_api/v1/posts/posts?per_page=4",
>>>>>>> d44cbdcfff1cb65404b81a44a10e90d1f79ce2d5
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				}
			)
				.then(response => {
					if (response.status !== 200) {
						alert(
							"A rat ate our network cables again! " +
								response.status
						);
						return;
					}

					response.json().then(data => {
						console.log(data);
						let store = this.state.store;
						store.carouselItems = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
