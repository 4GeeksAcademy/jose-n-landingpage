import React from "react";
import {Navbar} from "./Navbar.jsx"
import Jumbotron from "./Jumbotron.jsx"
import Card from "./Card.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	let datosCard1 = {
		title:"Buzz Lightyear",
		img_url:"https://www.thefactsite.com/wp-content/uploads/2020/11/facts-about-buzz-lightyear-share-728x364.jpg.avif",
		text:"Buzz Lightyear is a fictional character and space ranger from the Disney–Pixar Toy Story franchise. He is a skilled martial artist and hand-to-hand combatan"
	}

	let datosCard2 = {
		title:"Lightning Mcqueen",
		img_url:"https://i.pinimg.com/736x/3c/aa/11/3caa115554f44216154adaed787e1610.jpg",
		text:"Lightning McQueen is a fictional, red race car and the main character in the Disney/Pixar Cars franchise. He is known for his yellow and orange lightning bolt stickers and his racing number 95."
	}

	let datosCard3 = {
		title:"Woody",
		img_url:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Woody.Toy-Story.webp",
		text:"Woody is a cowboy doll from the Toy Story franchise. He is a vintage pull-string toy with a hand-painted face and a natural-dyed vest. Woody is the leader of Andy's toys and is always ready to go on adventures. "
	}

	let datosCard4 = {
		title:"Baymax",
		img_url:"https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2021/11/12/big-hero.jpeg",
		text:"Baymax is a healthcare robot from the Disney film Big Hero 6. He is a big, inflatable robot who can scan vital stats and treat many ailments. Baymax is designed to help people and never injure a human"
	}



	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row mb-1">
					<Jumbotron />
				</div>
				
				 <div className="row my-2">
					<div className="col-3">
						<Card title={datosCard1.title} img_url={datosCard1.img_url} text={datosCard1.text}  />
					</div>
					<div className="col-3">
						<Card title={datosCard2.title} img_url={datosCard2.img_url} text={datosCard2.text}  />	
					</div>
					<div className="col-3">
						<Card title={datosCard3.title} img_url={datosCard3.img_url} text={datosCard3.text}  />
					</div>
					<div className="col-3">
						<Card title={datosCard4.title} img_url={datosCard4.img_url} text={datosCard4.text}  />
					</div>
				</div> 

			</div>
		</div>
		
	);
};

export default Home;