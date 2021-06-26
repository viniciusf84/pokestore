import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// Components
import Image from '../../components/Image';
import CartButton from '../../components/CartButton';

// styles
import { Details } from './Profile.styled';

export default function Profile({ match: { params }, history }) {
	const shopContext = useContext(ShopContext);
	const { setAddToCart } = shopContext.actions;
	const { cart, selected } = shopContext;

	return (
		<section className="character-profile">
			<div className="wrapper container-fluid">
				{selected ? (
					<Details>
						<div className="row">
							<div className="col col__info">
								<div className="image-wrapper">
									<Image src={selected.image} alt={selected.name} />
								</div>

								<div className="text">
									<span>Types: </span>
									<ul className="list">
										{selected.types.map((type, index) => {
											return <li key={type.type.name}>{type.type.name}</li>;
										})}
									</ul>
								</div>

								<div className="text">
									<span>Abilities: </span>
									<ul className="list">
										{selected.abilities.map((ability) => (
											<li key={ability.ability.name}>{ability.ability.name}</li>
										))}
									</ul>
								</div>

								<div className="text">
									<span>Moves: </span>
									<ul className="list">
										{selected.moves.map((move) => (
											<li key={move.move.name}>{move.move.name}</li>
										))}
									</ul>
								</div>
							</div>

							<div className="col col__add">
								<h1>{selected.name.toUpperCase()}</h1>

								<br />

								<div className="text">
									{/* Base experience replaces price   */}
									<p className="price">${selected.base_experience}</p>
									<span>Em até 10x no cartão</span>
								</div>

								<br />

								<hr />

								<CartButton
									text="Buy"
									icon={faShoppingCart}
									action={() => setAddToCart([...cart, selected])}
								/>
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
