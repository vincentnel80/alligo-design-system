import React, { useState } from 'react';

import '../../globalStyles/main.scss';

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
                <td>Body is used for longer passages of text in the UI . Usually in order to populate paragraphs. The body style is also adjusted to be readable at smaller sizes. Body X-Large is used for short intro passages of longer texts and non recurrent text passages.</td>
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
