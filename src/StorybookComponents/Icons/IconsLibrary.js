import React from 'react';

import MainIntroComponent from '../Layout/TemplateComponents/MainIntroComponent';

import IconSearch from './IconSearch';

const IconsLibrary = () => <div className={'sb-page-container'}>
    <main className={'sb-maincontent'}>

        <MainIntroComponent
            fontClassName={'preamble-body-xl'}
            introText={'Icons below are the ones that’s available and in use'}
            title={'Icon Library'}
        />
        <IconSearch />

    </main>
</div>;

export default IconsLibrary;
