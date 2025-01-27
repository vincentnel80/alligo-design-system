import React from 'react';
import PropTypes from 'prop-types';
import './storybook/bodies-sb.scss';
// Body.js
import '../Spacing/storybook/spacing-sb.scss';
// just rember its using both now (spacing) as everything gets compiled into one, but in system it wont


/**
 * Body is used for longer passages of text in the UI. 
 * Usually in order to populate paragraphs. The body style is also adjusted to be readable at smaller sizes.
 * 
 * 
 * Body X-Large is used for short intro passages of longer texts and non-recurrent text passages.
 */

export const Body = ({ 
  size = 'body-lg', 
  version = 'Desktop', 
  summary, 
  marginBottom = 'None', 
  modifier = 'None' 
}) => {
  // Conditionally apply the -mob or -dt suffix for mobile or desktop version
  const computedFontName = version === 'Mobile' ? `${size}-mob` : `${size}-dt`;
  
  // Combine font name with the modifier (if it's not 'None')
  const classNames = modifier !== 'None' ? `${computedFontName} ${modifier}` : computedFontName;

  return (
    <>
      <div className={`${marginBottom}-sb`}>
        <p className={classNames}>{summary}</p>
      </div>
    </>
  );
};


Body.propTypes = {
  /**
   * Summary text to be displayed
   */
  summary: PropTypes.string.isRequired, // assuming summary is a required string

  /**
   * Font size for the body text
   */
  size: PropTypes.oneOf(['body-sm', 'body-md', 'body-lg', 'body-xl']),

  /**
   * Determines whether Desktop or Mobile styles are applied
   */
  version: PropTypes.oneOf(['Desktop', 'Mobile']),

  /**
   * Modifier class for additional styling (e.g., bold, italic, etc.)
   */
  modifier: PropTypes.string,

  /**
   * Margin bottom spacing
   */
  marginBottom: PropTypes.string,
};
