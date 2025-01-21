import React from 'react';
import PropTypes from 'prop-types';
import './bullet.scss';
import '../../globalStyles/foundation-fonts-weights.scss'; // make global -- but saying that --- when I add it like this, it works, but when I use import, it fails ---

/**
 * 
* The bullet list component supports up to three levels of nested lists, providing both mobile and desktop variants for flexible design.
* Each variant offers different bullet styles to suit various contexts: checkmarks, dots, and numbers. 
* For desktop displays, the available styles include 'Check: Desktop Large', 'Check: Desktop Medium', 'Dot: Desktop Large', 'Dot: Desktop Medium', 'Number: Desktop Large', and 'Number: Desktop Medium'. 
* 
* On mobile, the corresponding styles are 'Check: Mobile Large', 'Check: Mobile Medium', 'Dot: Mobile Large', 'Dot: Mobile Medium', 'Number: Mobile Large', and 'Number: Mobile Medium'. This structure ensures consistent, responsive behavior across devices while maintaining a variety of visual presentation options for users.
*
* In order to use, copy the entire code block and delte that which is not required. make sure to account for the levels
 */


// if i dont add these, then it always comes back as undefined - why?
export const Bullet = ({ version,  marginBottom = 'None', variant= 'dot-desktop-',size= 'large', levels, listLevel1, listLevel2, listLevel3 }) => {
  const isNumberVariant = variant.includes('number'); // Check if the variant is for a numbered list
  console.log(marginBottom,"marginBottom");
  return (
  <>
    <div className={`outercontainer bullet-list ${variant}-${size}`}>
        {/* Conditionally render ordered list (ol) for numbered variants */}
        {isNumberVariant ? (
          <>
            <div class="outercontainer bullet-list number">
              <ol class="list-level-1">
                <li>
                  <div class="list-wrapper">
                    <span class="body-lg">{listLevel1}</span>
                  </div>
                  <ol class="list-level-2">
                    <li>
                      <div class="list-wrapper">
                        <span class="body-lg">{listLevel2}</span>
                      </div>
                      <ol class="list-level-3">
                        <li>
                          <div class="list-wrapper">

                          <span class="body-lg">{listLevel3}</span>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </>
        ) : (
          // Render ul for other variants (check, dot)
          <ul className="list-level-1">
            <li className="list-wrapper">
              {variant.includes('check') && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959" />
                </svg>
              )}
              {variant.includes('dot') && (
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="black" />
                </svg>
              )}
              <span className="body-lg">{listLevel1}</span>
            </li>

            {/* Conditionally render level 2 */}
            {levels > 1 && (
              <ul className="list-level-2">
                <li className="list-wrapper">
                  {variant.includes('check') && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959" />
                    </svg>
                  )}
                  {variant.includes('dot') && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <circle cx="4" cy="4" r="4" fill="black" />
                    </svg>
                  )}
                  <span className="body-lg">{listLevel2}</span>
                </li>

                {/* Conditionally render level 3 */}
                {levels > 2 && (
                  <ul className="list-level-3">
                    <li className="list-wrapper">
                      {variant.includes('check') && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959" />
                        </svg>
                      )}
                      {variant.includes('dot') && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <circle cx="4" cy="4" r="4" fill="black" />
                        </svg>
                      )}
                      <span className="body-lg">{listLevel3}</span>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </ul>
        )}
    </div>
    <div className={`${marginBottom}-temp`}></div>
</>
  );
};

Bullet.propTypes = {
  version: PropTypes.oneOf(['Desktop', 'Mobile']),
  size: PropTypes.oneOf(['large', 'medium']),
  variant: PropTypes.string.isRequired,  // Example: define the expected type
  marginBottom: PropTypes.string,
  levels: PropTypes.oneOf([1, 2, 3]),
  listLevel1: PropTypes.string,
  listLevel2: PropTypes.string,
  listLevel3: PropTypes.string,
};
// Set default values for the props in Bullet component
Bullet.defaultProps = {
  version: 'Desktop',
  size: 'large',
  variant: 'dot-desktop-large',
  marginBottom: 'None',
  levels: '3',
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};