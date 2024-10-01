import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './copy-to-clipboard-icon.scss';

const CopyToClipboardIcon = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const iconClipboardCopy = () => {
        navigator.clipboard.writeText(code).then(
            () => {
                setCopied(true);
                // changing back to default state after 2 seconds.
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            },
            (err) => {
                console.log('failed to copy', err.mesage);
            },
        );
    };

    return (
        <>
            <span className={'clipboard-container-library'}
                onClick={iconClipboardCopy}
            >
                {copied ? <div className={'body-sm'} style={{
                    float: 'right',
                    paddingLeft: '18px',
                }}>Copied</div> : <div className={'clipboard-icon-library'}></div>}
            </span>
        </>
    );
};

CopyToClipboardIcon.propTypes = {
    code: PropTypes.string,
};

export default CopyToClipboardIcon;
