import React from 'react';
import PropTypes from 'prop-types';
import './body.scss';

/**
 * Body is used for longer passages of text in the UI . Usually in order to populate paragraphs. The body style is also adjusted to be readable at smaller sizes.
 * Body X-Large is used for short intro passages of longer texts and non recurrent text passages.
 */


// if i dont add these, then it always comes back as undefined - why?
  export const Body = ({ fontName = 'body-xl', viewport = 'Desktop', summary, marginBottom = '', modifier = '' }) => {
    return (
     
      <>
        {viewport === 'Desktop' ? (
          <>
            <p className={`${fontName}-dt body-xl--${modifier}-dt ${marginBottom}`}>{summary}</p>
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

  Body.propTypes = {
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
