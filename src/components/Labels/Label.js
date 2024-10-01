import React from 'react';
import PropTypes from 'prop-types';
import './labels.scss';

/**
* Labels are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling form fields and user info.
* Label styles are a bolder version of Alt-Label and therefore higher empasis than the Alt version.
*/


// if i dont add these, then it always comes back as undefined - why?
  export const Label = ({ fontName = 'label-lg', viewport = 'Desktop', summary, marginBottom = '', modifier = '' }) => {
    return (
     
      <>
        {viewport === 'Desktop' ? (
          <>
            <p className={`${fontName} label--${modifier}-dt ${marginBottom}`}>{summary}</p>
            <div className={`${marginBottom}-temp`}></div>
          </>
        ) : (
          <>
            <p className={`${fontName}-mob label-xl--${modifier}-mob ${marginBottom}`}>{summary}</p>
            <div className={`${marginBottom}-temp`}></div>
          </>
        )}
      </>

    );
  };

  Label.propTypes = {
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
