import React from 'react';
import Test from 'components/Test';
import J1 from 'components/One/Justification';
import J2 from 'components/Two/Justification';
import J3 from 'components/Three/Justification';

const App = () =>
    <main className="app">
        <Test title="vanilla css, imported via webpack">
            <J1 type="consent" duration="P1Y" />
            <J1 type="legitimate-interest" duration="P18M" />
            <J1 type="contract" duration="P3M" />
            <J1 type="public-interest" duration="P6M" />
            <J1 type="legal-obligation" duration="P9M" />
            <J1 type="vital-interest" duration="P2Y" />
        </Test>

        <Test title="styled-components">
            <J2 type="consent" duration="P1Y" />
            <J2 type="legitimate-interest" duration="P18M" />
            <J2 type="contract" duration="P3M" />
            <J2 type="public-interest" duration="P6M" />
            <J2 type="legal-obligation" duration="P9M" />
            <J2 type="vital-interest" duration="P2Y" />
        </Test>

        <Test title="radium">
            <J3 type="consent" duration="P1Y" />
            <J3 type="legitimate-interest" duration="P18M" />
            <J3 type="contract" duration="P3M" />
            <J3 type="public-interest" duration="P6M" />
            <J3 type="legal-obligation" duration="P9M" />
            <J3 type="vital-interest" duration="P2Y" />
        </Test>
    </main>

module.exports = App;
