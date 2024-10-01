import React from 'react';
import PropTypes from 'prop-types';
import './bullet.scss';
import '../../globalStyles/foundation-fonts-weights.scss'; // make global -- but saying that --- when I add it like this, it works, but when I use import, it fails ---

/**
 * 
* The bullet list component supports up to three levels of nested lists, providing both mobile and desktop variants for flexible design. Each variant offers different bullet styles to suit various contexts: checkmarks, dots, and numbers. For desktop displays, the available styles include 'Check: Desktop Large', 'Check: Desktop Medium', 'Dot: Desktop Large', 'Dot: Desktop Medium', 'Number: Desktop Large', and 'Number: Desktop Medium'. On mobile, the corresponding styles are 'Check: Mobile Large', 'Check: Mobile Medium', 'Dot: Mobile Large', 'Dot: Mobile Medium', 'Number: Mobile Large', and 'Number: Mobile Medium'. This structure ensures consistent, responsive behavior across devices while maintaining a variety of visual presentation options for users.
 */


// if i dont add these, then it always comes back as undefined - why?
export const Bullet = ({ viewport, variant, levels, listLevel1, listLevel2, listLevel3 }) => {
  return (
    <div className={`outercontainer bullet-list bullet-list--${variant}`}>
      <ul className="list-level-1">
        <li className="list-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959" />
          </svg>
          <span className="body-lg">{listLevel1}</span>
        </li>

        {/* Conditionally render level 2 */}
        {levels > 1 && (
          <ul className="list-level-2">
            <li className="list-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959" />
              </svg>
              <span className="body-lg">{listLevel2}</span>
            </li>

            {/* Conditionally render level 3 */}
            {levels > 2 && (
              <ul className="list-level-3">
                <li className="list-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.5501 17.65L4.2251 12.325L5.2751 11.25L9.5501 15.525L18.7251 6.34998L19.7751 7.42498L9.5501 17.65Z" fill="#595959" />
                  </svg>
                  <span className="body-lg">{listLevel3}</span>
                </li>
              </ul>
            )}
          </ul>
        )}
      </ul>
    </div>
  );
};

// Set default values for the props in Bullet component
Bullet.defaultProps = {
  listLevel1: 'List Item Level 1',
  listLevel2: 'List Item Level 2',
  listLevel3: 'List Item Level 3',
};