import React, { useMemo } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// components
import CartButton from '../../components/CartButton';
import Image from '../../components/Image';

// styles
import { CartItem, TotalSection } from './Cart.styled';

export default function Cart({ size, list, title, price, image, total }) {
	const displayCart = useMemo(() => {
		return list.map((item) => (
			<CartItem>
				<Image src={item[image]} alt={item[title]} />

				<div className="text">
					<h3 className="title">{item[title].toUpperCase()}</h3>

					<div className="space-between">
						<span className="quantity">Quantidade: 1</span>

						<strong className="price">${item[price]}</strong>
					</div>
				</div>
			</CartItem>
		));
	}, [list]);

	return (
		list &&
		list.length > 0 && (
			<>
				<Scrollbars style={{ height: 'calc(100% - 120px)' }}>
					{displayCart}
				</Scrollbars>

				<TotalSection>
					<div>
						<span>Total:</span> <strong>${total}</strong>
					</div>
					<CartButton text="Finalizar compra" icon={faCheck} />
				</TotalSection>
			</>
		)
	);
}
