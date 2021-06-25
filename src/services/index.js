import Api from './Api';
import axios from 'axios';


export function getPokemonByName(query) {
	return Api(`pokemon/${query}`);
}

export function getPokemonByType(query) {
	return Api(`type/${query}`);
}

export function getPokemonById(id) {
	return Api(`pokemon/${id}`);
}

export function getPokemonByUrl(url) {
	return axios.get(url);
}