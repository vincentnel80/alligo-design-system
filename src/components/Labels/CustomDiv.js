import React, { useState } from 'react';

const CustomDiv = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>
      <h3>Component overview</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setActiveTab('Usage')} style={{ marginRight: '10px' }}>
          Usage
        </button>
        <button onClick={() => setActiveTab('Resources')}>
          Resources
        </button>
      </div>
      <div>
        {activeTab === 'Usage' && (
          <table>
            <thead>
            </thead>
            <tbody>
              <tr>
                <td>Labels are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling form fields and user info. Label styles are a bolder version of Alt-Label and therefore higher empasis than the Alt version.
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === 'Resources' && (
          <table>
            <thead>
              <tr>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="figma-icon">
                  <a href="https://www.figma.com/design/42MgqJjV9vfplwQnrUB62r/ECO-Design-System?node-id=3848-192965&node-type=instance&m=dev" target="_blank" class="figma-link-container">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Icon" class="figma-icon-new"/>
                  <span class="alt-label-lg figma-link-text">View on Figma</span>
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

export default CustomDiv;
