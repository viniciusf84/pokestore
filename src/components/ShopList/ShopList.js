import React, { useEffect, useMemo, useContext, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useHistory } from "react-router-dom";

// styles
import { ShopListStyled } from "./ShopList.styled";

// hooks
import { ShopContext } from "../../contexts/ShopContext";

// themes
import { fire, water, ice, electric } from "../../themes";

export default function ShopList({ setTheme, theme }) {
  const shopContext = useContext(ShopContext);
  const { selected } = shopContext;
  const { setSelectedPokemon } = shopContext.actions;

  let history = useHistory();

  const list = useMemo(
    () => [electric, fire, water, ice],
    [electric, fire, water, ice]
  );

  const selectTheme = useCallback((item) => {
    setTheme(item);
    setSelectedPokemon(null);
  }, []);

  useEffect(() => {
    if (!selected) {
      history.push("/");
    }
  }, [selected]);

  return (
    <ShopListStyled>
      <div className="wrapper">
        <ul className="flex">
          {list.map((shopItem) => (
            <li className="shop-item" key={shopItem.name}>
              <button
                onClick={() => selectTheme(shopItem)}
                className={theme.name === shopItem.name ? "active" : ""}
              >
                <FontAwesomeIcon icon={shopItem.icon} />
                {shopItem.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </ShopListStyled>
  );
}
