import React from 'react';
import PropTypes from 'prop-types';
import './storybook/altlabels-sb.scss';

/**
 * Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, labeling formfields and user info. 
 * The style should be considered as a compliment to the Label style.
 */

export const AltLabel = ({ 
  size = 'alt-label-lg', 
  version = 'Desktop', 
  summary, 
  marginBottom = 'None', 
  modifier = 'None' 
}) => {

  const computedFontName = version === 'Mobile' ? `${size}-mob` : `${size}-dt`;
  const classNames = modifier !== 'None' ? `${computedFontName} ${modifier}` : computedFontName;

  return (
    <>
      <div className={`${marginBottom}-sb`}>
        <p className={classNames}>{summary}</p>
      </div>
    </>
  );
};



AltLabel.propTypes = {
  /**
   * Determines whether Desktop or Mobile styles are applied
   */
  version: PropTypes.oneOf(['Desktop', 'Mobile']),

  /**
   * Font size for the text
   */
  size: PropTypes.oneOf(['alt-label-sm', 'alt-label-md', 'alt-label-lg']),

  /**
   * Summary text to be displayed
   */
  summary: PropTypes.string.isRequired, // assuming summary is a required string

  /**
   * Margin bottom spacing
   */
  marginBottom: PropTypes.string,
};
