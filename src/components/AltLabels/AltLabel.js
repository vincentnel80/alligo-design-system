import React from 'react';
import PropTypes from 'prop-types';
import './altlabels.scss';

/**
 * Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, labeling formfields and user info. 
 * The style should be considered as a compliment to the Label style.
 */


// if i dont add these, then it always comes back as undefined - why?
// To Do - vin - key notes - there are no modifiers here, so delete everything concerning that
// delete the extra docs that are not being used
export const AltLabel = ({ 
  version = 'Desktop', 
  size = 'alt-label-lg', 
  summary, 
  marginBottom = 'None'
}) => {
  // Conditionally apply the -mob or -dt suffix for mobile or desktop version
  const computedSize = version === 'Mobile' ? `${size}-mob` : `${size}-dt`;
  
  // Combine font name with the modifier (if any)
  const classNames = `${computedSize} ${marginBottom}`;

  return (
    <>
      <p className={classNames}>{summary}</p>
      <div className={`${marginBottom}-temp`}></div>
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
