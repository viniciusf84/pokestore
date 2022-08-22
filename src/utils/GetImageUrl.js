export default function GetImageUrl(pokemon) {
  const imageUrl =
    pokemon &&
    pokemon.sprites &&
    (pokemon.sprites.other["official-artwork"].front_default ||
      pokemon.sprites.front_default);

  return imageUrl;
}
