import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// hooks
import { SearchContext } from '../../contexts/SearchContext';

// Components
import LoadingContent from '../../components/LoadingContent';

// styles 
import { Details } from './Profile.styled';

export default function Profile({ match: { params }, history }) {
	const [isLoading, setIsLoading] = useState(0);
	const [data, setData] = useState({});
	const [message, setMessage] = useState(undefined);
	const searchContext = useContext(SearchContext);
	const { Title, Poster, Director, Actors, Genre, Year, Plot, Website } = data;

  useEffect(() => {
    // back to list and updates search
    if(Object.keys(data).length > 0 && searchContext.search) {
      history.push('/');
      searchContext.actions.setUpdateList(true);
    }
  }, [searchContext.search])

	return (
		<section className="character-profile">
			<div className="wrapper container-fluid">
				{message && <h3>{message}</h3>}

				<LoadingContent
					isLoading={isLoading}
					loadingText="Loading details"
				>
					{Object.keys(data).length > 0 ? (
						<Details>
							{searchContext.search && (
								<span className="small">
									You've searched for "{searchContext.search}"{' '}
								</span>
							)}

							<h1>{Title}</h1>

							<div className="row">
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
									<figure className="poster">
										{Poster === 'N/A' ? (
											<FontAwesomeIcon icon={faFilm} size="10x" />
										) : (
											<img src={Poster} alt={Title} />
										)}
									</figure>

									<Link className="back" to="/">
										Back to search
									</Link>
								</div>

								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
									<div className="text">
										<p>
											Title: <strong>{Title}</strong>
										</p>
										<p>
											Director: <strong>{Director}</strong>
										</p>
										<p>
											Actors: <strong>{Actors}</strong>
										</p>
										<p>
											Genre: <strong>{Genre}</strong>
										</p>
										<p>
											Year: <strong>{Year}</strong>
										</p>
										{Website !== 'N/A' && (
											<p>
												Website:{' '}
												<strong>
													<a
														href={Website}
														target="_blank"
														rel="noopener noreferrer"
													>
														{Website}
													</a>
												</strong>
											</p>
										)}
										{Plot !== 'N/A' && (
											<p className="plot">
												Description: <br />
												{Plot}
											</p>
										)}
									</div>
								</div>
							</div>
						</Details>
					) : (
						<Details>
							<Link className="back" to="/">
								Back
							</Link>
						</Details>
					)}
				</LoadingContent>
			</div>
		</section>
	);
}
