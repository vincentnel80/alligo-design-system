import PropTypes from 'prop-types';
import React from 'react';

import CopyToClipboard from '../../Helpers/CopyToClipboard/CopyToClipboard';

const GridContainerComponent = ({
    textSnippet, fontName, fontClassName, fontDescription, fontInformation, tokenName,
}) => (
    <>
        <div className={'sb-grid-row'}>
            <div className={'sb-grid-item-example'}>
                {textSnippet.split('\\n').map((textSnippetLine, index) => (
                    <React.Fragment key={index}>
                        <p className={fontClassName}>{textSnippetLine} </p>
                    </React.Fragment>
                ))}
            </div>
            <div className={'sb-grid-item-desc'}>
                <span className={'title-md'}>{fontName}</span>
                <span className={'body-md'} style={{
                    display: 'block',
                    paddingBottom: '14px',
                }}>
                    {fontDescription.split('\\n').map((fontDescriptionLine, index) => (
                        <React.Fragment key={index}>
                            <span className={'body-md'} style={{
                                display: 'block',
                                paddingBottom: '4px',
                            }}>{fontDescriptionLine}</span>
                        </React.Fragment>
                    ))}
                </span>
                {fontInformation.split('\\n').map((fontInformationLine, index) => (
                    <React.Fragment key={index}>
                        <span className={'body-md'} style={{
                            display: 'block',
                            paddingBottom: '4px',
                        }}>{fontInformationLine}</span>
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

GridContainerComponent.propTypes = {
    fontClassName: PropTypes.string.isRequired,
    fontDescription: PropTypes.string.isRequired,
    fontInformation: PropTypes.string.isRequired,
    fontName: PropTypes.string.isRequired,
    textSnippet: PropTypes.string.isRequired,
    tokenName: PropTypes.string.isRequired,
};

export default GridContainerComponent;
