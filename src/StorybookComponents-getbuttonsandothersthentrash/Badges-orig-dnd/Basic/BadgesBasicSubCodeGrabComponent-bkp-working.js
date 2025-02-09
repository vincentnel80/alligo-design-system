import PropTypes from 'prop-types';
import React, { useState } from 'react';

import CopyToClipboardLargeText from '../../Helpers/CopyToClipboard/CopyToClipboardLargeText';

/// why does it work if i put it here (on all components ... but components loose their stuff afterwards
import '../badges-layouts.scss';
import './basic.scss';


const handleClick = (event, id) => {

    const MyDiv1 = document.getElementById('largeText');
    console.log(MyDiv1,"mydiv1");

    const clickedElement = event.currentTarget;
    console.log(event, "eventeventeventevent");
    console.log(id, "ididididid");
    console.log(`Clicked element id: ${clickedElement.id}`);

    return MyDiv1;
};
let shit = "shingle";
const BadgesBasicSubCodeGrabComponent = ({
                                             view, variants,MyDiv1,
                                         }) => <div className={'sb-page-container'} id={'largeText'} style={{fontFamily: 'Courier', fontSize: '14px'}} onClick={handleClick}>
    <h2>hi: {shit}</h2>
    <CopyToClipboardLargeText
        tokenName={MyDiv1}
    />
    <code>

        {` <div className={'badge-basic variant-neutral-default'}> `}<br/>
        &nbsp;&nbsp;{` <span className={'badge-message'}>Neutral</span> `}<br/>
        {`</div> `}<br/><br/>
        {` <div className={'badge-basic variant-neutral-medium'}> `}<br/>
        &nbsp;&nbsp;{` <span className={'badge-message'}>Neutral</span> `}<br/>
        {` </div> `}<br/><br/>
        {` <div className={'badge-basic variant-neutral-light'}> `}<br/>
        &nbsp;&nbsp;{` <span className={'badge-message'}>Neutral</span> `}<br/>
        {` </div> `}<br/>

        {/*
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

                */}
    </code>

</div>;

/// if not present, then it causes a problem here, so seems like needed in chile but not parent???
BadgesBasicSubCodeGrabComponent.propTypes = {
    view: PropTypes.string,
    variants: PropTypes.string,
    id: PropTypes.number,
    MyDiv1:PropTypes.string,
};


export default BadgesBasicSubCodeGrabComponent;
