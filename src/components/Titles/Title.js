import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

/**
 * Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, like the text inside components.
 * 
 * Consider using title styles to divide secondary passages of text or secondary regions of content. Used for smaller H tag sizes.
 */


  export const Title = ({ size = 'title-lg', version = 'Desktop', summary, marginBottom = 'None' }) => {
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
   * Determines whether Desktop or Mobile styles are applied
   */
  version: PropTypes.oneOf(['Desktop', 'Mobile']),

  /**
   * Current breakpoint viewed, based on version
   */
  breakpoint: PropTypes.string,

  /**
   * Font size for the text
   */
  size: PropTypes.oneOf(['title-sm', 'title-md', 'title-lg']),
    /**
     * Summary text to be displayed
     */
    summary: PropTypes.string.isRequired, // assuming summary is a required string

  /**
   * Margin bottom spacing
   */
  marginBottom: PropTypes.string,

  };