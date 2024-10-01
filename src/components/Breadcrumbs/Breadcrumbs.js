import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumbs.scss';

/**
 * The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels and navigate back through them.  It typically appears at the top of a webpage and shows a trail of links from the homepage to the current page, structured in a hierarchical order.
 */
//export const Breadcrumb = ({ items, backgroundColor, textColor, fontSize, separator }) => {
  export const Breadcrumbs = ({ items, backgroundColor, textColor, fontSize, separator }) => {
    return (
      <nav aria-label="Breadcrumb" style={{ backgroundColor, color: textColor, fontSize }}>
        <div className="breadcrumbs">
          <ul className="items">
            {items.map((item, index) => (
              <li
                key={index}
                className={`item ${item.className || ''} ${index === items.length - 1 ? 'active' : ''}`}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {index !== 0 && <span className="separator">{separator}</span>}
                {index === items.length - 1 ? (
                  item.label
                ) : (
                  <a href={item.link} title={item.label}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };

Breadcrumbs.propTypes = {
  /**
   * Array of breadcrumb items
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  /**
   * Background color of the breadcrumb container
   */
  backgroundColor: PropTypes.string,
  /*
   * Text color of the breadcrumb items
   */
 // textColor: PropTypes.string,
  /**
   * Font size of the breadcrumb items
   */
  //fontSize: PropTypes.string,
  /*
   * Character or element used to separate breadcrumb items
   */
 // separator: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  backgroundColor: 'transparent',
 // textColor: '#000',
  //fontSize: '14px / 16px',
 // separator: '/',
};
