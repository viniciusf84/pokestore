import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { HeaderCartStyled, HeaderCartButton, CartModal } from './HeaderCart.styled'

export default function HeaderCart({items = [], link}) {
  const [isOpen, setIsOpen] = useState(false);

  const emptyCart = useMemo(() => {
    if(items.length > 0) {
      return false;
    }

    return true;
  }, [])

  return (
    <HeaderCartStyled 
      onMouseOver={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <HeaderCartButton className={isOpen && 'hover'}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{items.length}</span>
      </HeaderCartButton>

      {isOpen && (
        <CartModal className={emptyCart && "empty"}>
          {emptyCart && (
            <p>Seu carrinho está vazio.</p>
          )}
        </CartModal>
      )}
    </HeaderCartStyled>
  )
}