import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// components
import Cart from '../Cart';

// utils
import GroupArrayByKey from '../../utils/GroupArrayByKey';
import SmoothScrollTo from '../../utils/SmoothScrollTo';

// styles
import {
	HeaderCartStyled,
	HeaderCartButton,
	CartModal,
} from './HeaderCart.styled';

export default function HeaderCart({ items, total }) {
	const [isOpen, setIsOpen] = useState(false);
	const [formattedArray, setFormattedArray] = useState([]);

	const emptyCart = useMemo(() => {
		if (items.length > 0) {
			return false;
		}

		return true;
	}, [items]);

	const smoothScroll = useCallback(() => {
		SmoothScrollTo('header');
	}, []);

	useEffect(() => {
		const grouped = GroupArrayByKey(items, 'id');
		const groupedArray = Object.values(grouped).map((item) => ({
			item: item[0],
			quantity: item.length,
		}));

		setFormattedArray(groupedArray);
	}, [items]);

	useEffect(() => {
		setIsOpen(true);
		smoothScroll('header');
	}, [formattedArray]);

	return (
		<HeaderCartStyled
			onMouseOver={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<HeaderCartButton className={isOpen ? 'hover' : ''}>
				<FontAwesomeIcon icon={faShoppingCart} />
				<span>{items.length}</span>
			</HeaderCartButton>

			{isOpen && (
				<CartModal className={emptyCart ? 'empty' : ''}>
					{emptyCart && <p>Your shop cart is empty.</p>}

					{!emptyCart && (
						<Cart
							list={formattedArray}
							title="name"
							price="base_experience"
							image="image"
							total={total}
						/>
					)}
				</CartModal>
			)}
		</HeaderCartStyled>
	);
}
