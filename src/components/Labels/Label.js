import React from 'react';
import PropTypes from 'prop-types';
import './labels.scss';

/**
* Labels are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling form fields and user info.
* Label styles are a bolder version of Alt-Label and therefore higher empasis than the Alt version.
*/


// if i dont add these, then it always comes back as undefined - why?
export const Label = ({ size = 'label-lg', version = 'Desktop', summary, marginBottom = 'None', modifier = 'None' }) => {
  // Conditionally set modifier based on size
  const allowedModifier = 
    size === 'label-lg' && modifier === 'label-lg--underline'
      ? modifier
      : size === 'label-sm' && modifier === 'label-sm--badge'
      ? modifier
      : 'None';

  return (
    <>
      {version === 'Desktop' ? (
        <>
          <p className={`${size} ${size}-dt ${allowedModifier !== 'None' ? `${allowedModifier}-dt` : ''} ${marginBottom}`}>
            {summary}
          </p>
          <div className={`${marginBottom}-temp`}></div>
        </>
      ) : (
        <>
          <p className={`${size} ${size}-mob ${allowedModifier !== 'None' ? `${allowedModifier}-mob` : ''} ${marginBottom}`}>
            {summary}
          </p>
          <div className={`${marginBottom}-temp`}></div>
        </>
      )}
    </>
  );
};


  /*
  if version : desktop or mobile + label-sm only show modifier none or label-sm-badge

  if verssion : desktop or mobile + label-lg only show modifier none or label-lg--underline

if   if verssion : desktop or mobile + label-md then 

/////
  if label-sm is selected only allow modifier none or label-sm--badge to be in the styles

 label-lg only allow modifier none or label-lg--underline



  */

  Label.propTypes = {

      /**
   * Viewport, determines whether Desktop or Mobile styles are applied
   */
  version: PropTypes.oneOf(['Desktop', 'Mobile']),

      /**
   * Font size for the body text
   */
  size: PropTypes.oneOf(['label-sm', 'label-md', 'label-lg']),
  
/**
 * Summary text to be displayed
 */
summary: PropTypes.string.isRequired, // assuming summary is a required string

  /**
   * Modifier class for additional styling (e.g., bold, italic, etc.)
   */
  modifier: PropTypes.string,

    /**
   * Margin bottom spacing
   */
    marginBottom: PropTypes.string,

  
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
