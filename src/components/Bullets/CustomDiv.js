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
        <button onClick={() => setActiveTab('Style')} style={{ marginRight: '10px' }}>
          Style
        </button>
        <button onClick={() => setActiveTab('Accessibility')} style={{ marginRight: '10px' }}>
          Accessibility
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
                <td>Bullets are comprised of 3 variant: Check, dot (bullet) and number, as well as sizes for mobile and desktop.
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === 'Style' && (
          <table>
            <thead>
              <tr>
                <th>Element</th>
                <th>Token</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Link</td>
                <td>--text-text-medium-emphasis</td>
              </tr>
              <tr>
                <td>Link:hover</td>
                <td>--greyscale-black</td>
              </tr>
              <tr>
                <td>Link:active</td>
                <td>--greyscale-black</td>
              </tr>
              <tr>
                <td>Slash</td>
                <td>--text-text-medium-emphasis</td>
              </tr>
              <tr>
                <td>Current page</td>
                <td>--greyscale-black, font-weight:700</td>
              </tr>
              <tr>
                <td>Spacing</td>
                <td>--space-8--small, --space-9--small</td>
              </tr>
            </tbody>
          </table>
        )}
                {activeTab === 'Accessibility' && (
          <table>
            <thead>
            </thead>
            <tbody>
              <tr>
                <td>

                  Semantic Navigation Landmark: The 'nav' element is used to define a section of the page intended for navigation. This helps assistive technologies identify it as a navigation area.
                  ARIA Label: The aria-label="Breadcrumb" attribute provides an accessible name for the navigation landmark, indicating to screen readers that this section is a breadcrumb navigation. This helps users understand the purpose of this navigation.

                  Current Page Indication: The aria-current="page" attribute is used to indicate that the "End crumb" item is the current page. This is an important accessibility feature because it provides context to users about their current location within the breadcrumb navigation.
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
                  <a href="https://www.figma.com/design/42MgqJjV9vfplwQnrUB62r/ALLIGO-Design-System?node-id=247-806&node-type=CANVAS&m=dev" target="_blank" class="figma-link-container">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Icon" class="figma-icon"/>
                  <span class="figma-link-text">View on Figma</span>
                  </a>
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
