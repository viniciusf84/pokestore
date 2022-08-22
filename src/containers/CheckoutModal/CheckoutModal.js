import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";

// component
import Modal from "../../components/Modal";

// styles
import { CheckoutStyled } from "./CheckoutModal.styled";

export default function CheckoutModal() {
  const shopContext = useContext(ShopContext);
  const { checkout } = shopContext;
  const { setCheckout } = shopContext.actions;

  return (
    <Modal displayModal={checkout} setDisplayModal={setCheckout}>
      <CheckoutStyled>
        <p className="title">Hello there!</p>

        <p>
          Thank you for purchasing our product. Your support and trust in us are
          much appreciated. For your next purchase, use coupon code:{" "}
        </p>
        <p>
          <strong>POKE30%</strong>
        </p>
        <p>and get 30% discount on any Pokemón.</p>
        <p>Much love,</p>
        <p>
          <strong>PokeStore</strong>
        </p>
      </CheckoutStyled>
    </Modal>
  );
}
