import React from 'react';

import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext';

class Button extends React.Component {
	// static contextType = LanguageContext;

	render() {
		console.log(LanguageContext);

		// const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
		return (
			<ColorContext.Consumer>
				{(color) => 
					<button className={`ui button ${color}`}>
						{/* {text} */}
						<LanguageContext.Consumer>
							{(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
						</LanguageContext.Consumer>
					</button>
				}
			</ColorContext.Consumer>
		)
	}
}

export default Button;