import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { useHistory } from "react-router";

// hook
import { ShopContext } from "../../contexts/ShopContext";

// components
import LoadingContent from "../../components/LoadingContent";
import Image from "../../components/Image";

// utils
import GetImageUrl from "../../utils/GetImageUrl";

// service
import { getPokemonByUrl } from "../../services";

function Item({ name, pokemonUrl }) {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [pokemonData, setPokemonData] = useState({});

  let history = useHistory();

  const shopContext = useContext(ShopContext);
  const { setSelectedPokemon, setMessage } = shopContext.actions;

  useEffect(() => {
    async function getPokemonDataByUrl(url) {
      setIsLoadingContent(true);

      try {
        const response = await getPokemonByUrl(url);

        setPokemonData(response.data);
      } catch (error) {
        setMessage("Error on get Pokemón details.");
        console.error(error);
      }

      setIsLoadingContent(false);
    }

    getPokemonDataByUrl(pokemonUrl);
  }, [pokemonUrl]);

  const getImage = useMemo(() => {
    return GetImageUrl(pokemonData);
  }, [pokemonData]);

  const selectItem = useCallback((data) => {
    setSelectedPokemon(data);
    history.push(`/profile/${data.name}`);
  }, []);

  return (
    <div
      className="item"
      onClick={() => selectItem({ ...pokemonData, image: getImage })}
    >
      <LoadingContent
        isLoading={isLoadingContent}
        loadingText={`Loading ${name.toUpperCase()}`}
      >
        <div className="wrap  img__wrapper">
          <Image src={getImage} alt={name} />
        </div>

        <div className="text">
          <span className="title">{name}</span>

          {/* Base experience replaces price   */}
          <span className="price">${pokemonData.base_experience}</span>
        </div>
      </LoadingContent>
    </div>
  );
}

export default Item;
