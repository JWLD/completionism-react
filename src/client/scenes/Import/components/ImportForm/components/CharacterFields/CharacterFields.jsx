import React from 'react';

import './CharacterFields.scss';

const CharacterFields = () => (
	<section className="sctn char-sctn">
		<h2 className="sctn__header">Select Character</h2>

		<div className="sctn__input-wrap">
			<div className="char-inputs">
				<select>
					<option value="eu">EU</option>
					<option value="us">US</option>
				</select>

				<select>
					{/* {realms} */}
				</select>

				<input placeholder="Name" />
			</div>

			<button>
				{/* {symbol} */}
			</button>
		</div>

		{/* {errBox} */}
	</section>
);

export default CharacterFields;
