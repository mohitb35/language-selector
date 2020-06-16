import React from 'react';

import LanguageContext from '../contexts/languageContext';


class Button extends React.Component {
	// static contextType = LanguageContext;

	render() {
		console.log(LanguageContext);

		// const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
		return (
			<button className="ui button primary">
				{/* {text} */}
				<LanguageContext.Consumer>
					{(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
				</LanguageContext.Consumer>
			</button>
		)
	}
}

export default Button;