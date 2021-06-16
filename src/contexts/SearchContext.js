import React, { createContext, useReducer } from 'react';

const SearchContext = createContext();

const initialState = {
  isLoading: false,
	search: '',
	data: [],
	page: null,
  message: '',
};

const types = {
  SET_LOADING: 'SET_LOADING',
	SEARCH_STRING: 'SEARCH_STRING',
	DATA: 'DATA',
	PAGE: 'PAGE',
  SET_MESSAGE: 'SET_MESSAGE',
};

const reducer = (state, action) => {
	switch (action.type) {
    case types.SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};

		case types.SEARCH_STRING:
			return {
				...state,
				search: action.payload.trim(),
			};

		case types.DATA:
			return {
				...state,
				data: action.payload,
			};

		case types.PAGE:
			return {
				...state,
				page: action.payload,
			};

    case types.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

		default:
			return {
				...state,
			};
	}
};

const actions = (dispatch) => ({
  setIsLoading: (item) =>
		dispatch({
			type: types.SET_LOADING,
			payload: item,
		}),

	setSearchString: (item) =>
		dispatch({
			type: types.SEARCH_STRING,
			payload: item,
		}),

	setSearchData: (item) => {
		dispatch({
			type: types.DATA,
			payload: item,
		});
	},

	setSearchPage: (item) =>
		dispatch({
			type: types.PAGE,
			payload: item,
		}),

  setMessage: (item) =>
		dispatch({
			type: types.SET_MESSAGE,
			payload: item,
		}),
});

const SearchContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<SearchContext.Provider
			value={{ ...state, dispatch, actions: actions(dispatch) }}
		>
			{props.children}
		</SearchContext.Provider>
	);
};

export { SearchContext, SearchContextProvider };
