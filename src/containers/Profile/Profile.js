import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// Components
import Image from '../../components/Image';

// styles
import { Details, AddToCartButton } from './Profile.styled';

export default function Profile({ match: { params }, history }) {
	const shopContext = useContext(ShopContext);
	const selectedProfile = shopContext.selected;
	const { setAddToCart } = shopContext.actions;
	const { cart, search } = shopContext;
	const { name, image, moves, types, abilities, base_experience } =
		selectedProfile;

	return (
		<section className="character-profile">
			<div className="wrapper container-fluid">
				{Object.keys(selectedProfile).length > 0 ? (
					<Details>
						<div className="row">
							<div className="col col__info">
								<div className="image-wrapper">
									<Image src={image} alt={name} />
								</div>

								<div className="text">
									<span>Types: </span>
									<ul className="list">
										{types.map((type, index) => {
											return <li key={type.type.name}>{type.type.name}</li>;
										})}
									</ul>
								</div>

								<div className="text">
									<span>Abilities: </span>
									<ul className="list">
										{abilities.map((ability) => (
											<li key={ability.ability.name}>{ability.ability.name}</li>
										))}
									</ul>
								</div>

								<div className="text">
									<span>Moves: </span>
									<ul className="list">
										{moves.map((move) => (
											<li key={move.move.name}>{move.move.name}</li>
										))}
									</ul>
								</div>
							</div>

							<div className="col col__add">
								<h1>{name.toUpperCase()}</h1>

								<br />

								<div className="text">
									{/* Base experience replaces price   */}
									<p className="price">${base_experience}</p>
									<span>Em até 10x no cartão</span>
								</div>

								<br />

								<hr />

								<AddToCartButton
									onClick={() => setAddToCart([...cart, selectedProfile])}
								>
									<FontAwesomeIcon icon={faShoppingCart} />
									Comprar
								</AddToCartButton>
							</div>
						</div>

						<Link className="back" to="/">
							<FontAwesomeIcon icon={faArrowLeft} />
							Back to shop
						</Link>
					</Details>
				) : (
					<Details>
						<p>No results.</p>
						<Link className="back" to="/">
							<FontAwesomeIcon icon={faArrowLeft} /> Back
						</Link>
					</Details>
				)}
			</div>
		</section>
	);
}
