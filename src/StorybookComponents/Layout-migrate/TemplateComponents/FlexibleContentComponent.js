import PropTypes from 'prop-types';
import React from 'react';

import CopyToClipboard from '../../Helpers/CopyToClipboard/CopyToClipboard';

const FlexibleContentComponent = ({
    textSnippet, itemName, fontClassName, itemDescription, itemExtraInformation, tokenName, spacingSizeExample,
}) => (
    <>
        <div className={'sb-grid-row'}>
            <div className={'sb-grid-item-example'}>
                <div className={spacingSizeExample} style={{
                    marginBottom: '8px',
                }}></div>
                {textSnippet.split('\\n').map((textSnippetLine, index) => (
                    <React.Fragment key={index}>
                        <div className={fontClassName} style={{
                            opacity: '0.7',
                        }}>{textSnippetLine}</div>
                    </React.Fragment>
                ))}
            </div>
            <div className={'sb-grid-item-desc'}>
                <span className={'title-md'}>{itemName}</span>
                <span className={'body-md'} style={{
                    display: 'block',
                    paddingBottom: '14px',
                }}>
                    {itemDescription.split('\\n').map((itemDescriptionLine, index) => (
                        <React.Fragment key={index}>
                            <span className={'body-md'} style={{
                                display: 'block',
                                paddingBottom: '4px',
                            }}>{itemDescriptionLine}</span>
                        </React.Fragment>
                    ))}
                </span>
                {itemExtraInformation.split('\\n').map((itemInformationLine, index) => (
                    <React.Fragment key={index}>
                        <span className={'body-md'} style={{
                            display: 'block',
                            paddingBottom: '4px',
                        }}>{itemInformationLine}</span>
                    </React.Fragment>
                ))}

            </div>
            <div className={'sb-grid-item-token'}>
                <div className={'body-md'}>
                    <CopyToClipboard
                        tokenName={tokenName}
                    />
                </div>
            </div>
        </div>
    </>
);

FlexibleContentComponent.propTypes = {
    fontClassName: PropTypes.string,
    itemDescription: PropTypes.string,
    itemExtraInformation: PropTypes.string,
    itemName: PropTypes.string,
    spacingSizeExample: PropTypes.string,
    textSnippet: PropTypes.string,
    tokenName: PropTypes.string,
};

export default FlexibleContentComponent;
