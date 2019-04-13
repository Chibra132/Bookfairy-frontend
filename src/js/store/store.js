// import diMaria from "../../../img/DIMARIA.jpg";
// import GreatWall from "../../../img/greatWall.jpg";
// import Boris from "../../../img/Coding.jpg";
// import Cooks from "../../../img/Cooking.jpg";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			cart: [
				{
					productName: "Hardcover – Box set ",
					productDescription: "Game of Thrones Box set",
					price: 180.0,
					quanity: 1
				},
				{
					productName: "Paperback – Box set ",
					productDescription: "Game of Thrones Box set",
					price: 180.0,
					quanity: 1
<<<<<<< HEAD
=======
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
			blogs: [
				{
					title: "Featured Blog",
					description: "More stuff",
					date: "01/01/0001"
				}
			],
			blogs2: [
				{
					title: "Extra Time",
					description:
						"A blog proving hindsight really is 20/20, nitpickingevery big game",
					// image: diMaria,
					date: "1/24/19"
				},
				{
					title: "Card number 2",
					description:
						"Seeing the world, and still finding the time to code",
					// image: GreatWall,
					date: "01/10/10",
					style: " mt-3"
				}
			],
			blogs3: [
				{
					title: "Cooking Blog",
					description: "Cooking while coding: a comprehensive guide.",
					// image: Cooks,
					date: "01/10/10"
				},
				{
					title: "Boris' Bootcamp",
					description:
						"A look through former bond villain and elite hacker, Boris' eyes into the world of tech from the 90s",
					// image: Boris,
					date: "01/10/10",
					style: " mt-3"
>>>>>>> d56376d2d07fad1960fc31448dab782984034429
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
			blogs: [
				{
					title: "Featured Blog",
					description: "More stuff",
					date: "01/01/0001"
				}
			],
			blogs2: [
				{
					title: "Extra Time",
					description:
						"A blog proving hindsight really is 20/20, nitpickingevery big game",
					// image: diMaria,
					date: "1/24/19"
				},
				{
					title: "Card number 2",
					description:
						"Seeing the world, and still finding the time to code",
					// image: GreatWall,
					date: "01/10/10",
					style: " mt-3"
				}
			],
			blogs3: [
				{
					title: "Cooking Blog",
					description: "Cooking while coding: a comprehensive guide.",
					// image: Cooks,
					date: "01/10/10"
				},
				{
					title: "Boris' Bootcamp",
					description:
						"A look through former bond villain and elite hacker, Boris' eyes into the world of tech from the 90s",
					// image: Boris,
					date: "01/10/10",
					style: " mt-3"
				}
			],
			
		blogcards: [],	
		mainjumbo: []
		
		},
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
			}
		}
	};
};

export default getState;
