import React from 'react';
import PropTypes from 'prop-types';
import './alt-label.scss';

/**
 * Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, labeling formfields and user info. The style should be considered as a compliment to the Label style.
 */


// if i dont add these, then it always comes back as undefined - why?
  export const AltLabel = ({ fontName = 'alt-label-lg', viewport = 'Desktop', summary, marginBottom = '', modifier = '' }) => {
    return (
     
      <>
        {viewport === 'Desktop' ? (
          <>
            <p className={`${fontName} alt-label--${modifier}-dt ${marginBottom}`}>{summary}</p>
            <div className={`${marginBottom}-temp`}></div>
          </>
        ) : (
          <>
            <p className={`${fontName}-mob body-xl--${modifier}-mob ${marginBottom}`}>{summary}</p>
            <div className={`${marginBottom}-temp`}></div>
          </>
        )}
      </>

    );
  };

  AltLabel.propTypes = {
    /**
     * Summary text to be displayed
     */
    summary: PropTypes.string.isRequired, // assuming summary is a required string

  
    /**
     * Additional property A, type can vary based on usage
     */
  
    /**
     * Padding value for the component
     */
   //padding: PropTypes.string, // assuming padding is an optional string like '10px'
  };

// add shir here, or in title???
/*Title.defaultProps = {
  backgroundColor: 'transparent',
 // textColor: '#000',
  //fontSize: '14px / 16px',
 // separator: '/',
}; */
