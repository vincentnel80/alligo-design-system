import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

/**
 * Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components.
Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.
 */
// if i dont add these, then it always comes back as undefined - why?


  export const Title = ({ items, backgroundColor, textColor, fontSize, separator, size = 'title-lg', version = 'Desktop', summary, marginBottom = '' }) => {
    console.log(version,"version");
    return (
     
      <>
      {version === 'Desktop' ? (
        <>
         <div className={`${size}-dt ${marginBottom}`}>{summary}</div>
         <div className={`${marginBottom}-temp`}></div>
         </>
      ) : (
        <>
        <div className={`${size}-mob ${marginBottom}`}>{summary}</div>
        <div className={`${marginBottom}-temp`}></div>
        </>
      )}
    </>

    );
  };

  Title.propTypes = {
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
