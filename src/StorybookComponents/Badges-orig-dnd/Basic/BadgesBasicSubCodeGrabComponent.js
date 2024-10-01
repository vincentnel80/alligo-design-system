import PropTypes from 'prop-types';
import React, { useState } from 'react';
/// use ref vs useState

// not using so remove
import CopyToClipboardLargeText from '../../Helpers/CopyToClipboard/CopyToClipboardLargeText';

/// why does it work if i put it here (on all components ... but components loose their stuff afterwards
import '../badges-layouts.scss';
import './basic.scss';

//import './copy-to-clipboard.scss';

const BadgesBasicSubCodeGrabComponent = ({ MyDiv1,MyDiv2 }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboardFunc = () => {
        const MyDiv1 = document.getElementById('largeText');
        var MyDiv2 = MyDiv1.outerHTML;
        console.log(MyDiv2,"MyDiv1MyDiv1MyDiv1");
        navigator.clipboard.writeText(MyDiv2).then(
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
            <div className={'clipboard-container'}>
                <div
                    style={{ float: 'right'}}
                    onClick={copyToClipboardFunc}
                >
                    {copied ? <span>Copied</span> : <span className={'clipboard-icon'}></span>}
                </div>
            </div>

            <div>
                <span className={'body-md'} >
                    <pre>
                        <code >
                            {`<div className={'badge-basic variant-neutral-default'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Neutral</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-neutral-medium'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Neutral</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-neutral-light'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Neutral</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-info-default'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Info</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-info-medium'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Info</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-info-light'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Info</span> `}<br/>
                            {`</div> `}<br/><br/>


                            {`<div className={'badge-basic variant-success-default'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Success</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-success-medium'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Success</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-success-light'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Success</span> `}<br/>
                            {`</div> `}<br/><br/>

                            {`<div className={'badge-basic variant-warning-default'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Warning</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-warning-medium'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Warning</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-warning-light'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Warning</span> `}<br/>
                            {`</div> `}<br/><br/>


                            {`<div className={'badge-basic variant-danger-default'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Danger</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-danger-medium'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Danger</span> `}<br/>
                            {`</div> `}<br/><br/>
                            {`<div className={'badge-basic variant-danger-light'}> `}<br/>
                            &nbsp;&nbsp;{`<span className={'badge-message'}>Danger</span> `}<br/>
                            {`</div> `}<br/><br/>

                        </code>
                    </pre>
                    <div style={{display: 'none'}} id={'largeText'}>
                                        <div className={'badge-basic variant-info-default'}>
                    <span className={'badge-message'}>Info</span>
                </div>
                <div className={'badge-basic variant-info-medium'}>
                    <span className={'badge-message'}>Info</span>
                </div>
                <div className={'badge-basic variant-info-light'}>
                    <span className={'badge-message'}>Info</span>
                </div>


                <div className={'badge-basic variant-success-default'}>
                    <span className={'badge-message'}>Success</span>
                </div>
                <div className={'badge-basic variant-success-medium'}>
                    <span className={'badge-message'}>Success</span>
                </div>
                <div className={'badge-basic variant-success-light'}>
                    <span className={'badge-message'}>Success</span>
                </div>

                <div className={'badge-basic variant-warning-default'}>
                    <span className={'badge-message'}>Warning</span>
                </div>
                <div className={'badge-basic variant-warning-medium'}>
                    <span className={'badge-message'}>Warning</span>
                </div>
                <div className={'badge-basic variant-warning-light'}>
                    <span className={'badge-message'}>Warning</span>
                </div>


                <div className={'badge-basic variant-danger-default'}>
                    <span className={'badge-message'}>Danger</span>
                </div>
                <div className={'badge-basic variant-danger-medium'}>
                    <span className={'badge-message'}>Danger</span>
                </div>
                <div className={'badge-basic variant-danger-light'}>
                    <span className={'badge-message'}>Danger</span>
                </div>
                    </div>
                </span>
            </div>
        </>
    );
};

BadgesBasicSubCodeGrabComponent.propTypes = {
    MyDiv1: PropTypes.string.isRequired,
    MyDiv2: PropTypes.string.isRequired,
};


export default BadgesBasicSubCodeGrabComponent;
