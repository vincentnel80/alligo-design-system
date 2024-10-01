import React from 'react';
import PropTypes from 'prop-types';
import './headline.scss';

/**
 * Headline XL, L, M or S are best-suited for short high-emphasis text. These styles can be good for marking primary passages of text or important regions of content, like headlines.
Headline X-Large is well suited for H1 content. Headline X-Large is never to be used in conjunction with Display Large or vice versa. Display Large always trumps Headline X-Large in a plain text context.
 */


// if i dont add these, then it always comes back as undefined - why?
  export const Headline = ({ fontName = 'headline-lg', viewport = 'Desktop', summary, marginBottom = '', modifier = 'blockquote' }) => {
    return (
     
      <>
      {viewport === 'Desktop' ? (
        <>
         <div className={`${fontName}-dt ${modifier === 'blockquote' ? 'headline-md--blockquote-dt' : ''} ${marginBottom}`}>{summary}</div>
         <div className={`${marginBottom}-temp`}></div>
         </>
      ) : (
        <>
        <div className={`${fontName}-mob ${modifier === 'blockquote' ? 'headline-md--blockquote-dt' : ''} ${marginBottom}`}>{summary}</div>
        <div className={`${marginBottom}-temp`}></div>
        </>
      )}
    </>

    );
  };

  Headline.propTypes = {
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
