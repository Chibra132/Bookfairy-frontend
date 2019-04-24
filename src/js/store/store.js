// import diMaria from "../../../img/DIMARIA.jpg";
// import GreatWall from "../../../img/greatWall.jpg";
// import Boris from "../../../img/Coding.jpg";
// import Cooks from "../../../img/Cooking.jpg";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			cart: [
				{
					id: 0,
					productName: "Hardcover – Box set, November ",
					productDescription: "Game of Thrones Box set",
					price: 180.0,
					quantity: 1
				},
				{
					id: 1,
					productName: "Paperback – Box set, November ",
					productDescription: "Game of Thrones Box set",
					price: 180.0,
					quantity: 1
				}
			],
			product: [
				{
					productName: "Hardcover – Box set ",
					productDescription: "Game of Thrones Box set",
					price: 180
				},
				{
					productName: "Hardcover – Box set ",
					productDescription: "Game of Thrones Box set"
				}
			],
			product2: [
				{
					productName: "Paperback – Box set ",
					productDescription: "Game of Thrones Box set",
					price: 180
				},
				{
					productName: "Paperback – Box set ",
					productDescription: "Game of Thrones Box set"
				}
			],
			product3: [
				{
					productName: "Paperback – Box set, November ",
					productDescription: "Game of Thrones Box set",
					price: 180
				}
			],

			actions: {
				changeColor: (index, color) => {
					//get the store
					const store = getStore();

					//we have to loop the entire demo array to look for the respective index
					//and change its color
					const demo = store.demo.map((elm, i) => {
						if (i === index) elm.background = color;
						return elm;
					});

					//reset the global store
					setStore({ demo: demo });
				},
				deletecart: index => {
					const store = getStore();
					let id = "";
					let prod = store.cart.filter((item, index) => {
						if (item.id !== id) {
							return item;
						}
						setStore({ cart: prod });
					});
					store.cart.splice(index, 1);
					setStore({ cart: store.cart });
				},
				increaseQty: (e, index) => {
					const store = getStore();
					store.cart[index].quantity = e.target.value;
					setStore({ cart: store.cart });
				}
			}
		}
	};
};

export default getState;
