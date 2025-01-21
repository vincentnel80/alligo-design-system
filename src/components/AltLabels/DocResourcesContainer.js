import React, { useState } from 'react';
import './DocResourcesContainer.scss';

const DocResourcesContainer = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div className="doc-container">
      <h3>Component Overview</h3>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('Usage')} className="tab-button">
          Usage
        </button>
        <button onClick={() => setActiveTab('Resources')} className="tab-button">
          Resources
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'Usage' && (
          <table className="usage-table">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  Alt-Label styles (Alternative) are smaller, utilitarian styles, used for things like the text inside components, labeling formfields and user info. The style should be considered as a compliment to the Label style.
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === 'Resources' && (
          <table className="resources-table">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="figma-icon">
                    <a
                      href="https://www.figma.com/design/42MgqJjV9vfplwQnrUB62r/ECO-Design-System?node-id=3848-192965&node-type=instance&m=dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="figma-link-container"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                        alt="Figma Icon"
                        className="figma-icon-new"
                      />
                      <span className="alt-label-lg figma-link-text">View on Figma</span>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DocResourcesContainer;
