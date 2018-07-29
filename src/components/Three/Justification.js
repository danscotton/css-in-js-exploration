import React from 'react';
import Radium from 'radium';
import { get } from 'lodash';

const label = type =>
    get({
        'consent': 'C',
        'legitimate-interest': 'LI',
        'contract': 'CT',
        'public-interest': 'PI',
        'legal-obligation': 'LO',
        'vital-interest': 'VI',
    }, type)

const styles = {
    justification: {
        display: 'flex',
        margin: '0 16px 16px 0',
    },

    span: {
        display: 'block',
        height: '20px',
        backgroundColor: '#fff',
        border: '2px solid #999',
        borderRadius: '5px',
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fontSize: '11px',
        fontWeight: '700',
        lineHeight: '20px'
    },
    
    type: {
        position: 'relative',
        width: '20px',
        letterSpacing: '-0.025em'
    },

    duration: {
        position: 'relative',
        padding: '0 4px',
        minWidth: '12px',
        borderLeft: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        fontSize: '10px',
        lineHeight: '20px'
    },

    consent: {
        borderColor: 'mediumseagreen',
        color: 'mediumseagreen',
    },

    legitimateInterest: {
        borderColor: 'mediumslateblue',
        color: 'mediumslateblue',
    },

    contract: {
        borderColor: 'dodgerblue',
        color: 'dodgerblue',
    },

    publicInterest: {
        borderColor: 'sienna',
        color: 'sienna',
    },

    legalObligation: {
        borderColor: 'lightslategrey',
        color: 'lightslategrey',
    },

    vitalInterest: {
        borderColor: 'violet',
        color: 'violet',
    },
}

const Justification = ({ type, duration }) =>
    <div style={ styles.justification }>
        <span style={[
            styles.span,
            styles.type,
            type === 'consent' && styles.consent,
            type === 'legitimate-interest' && styles.legitimateInterest,
            type === 'contract' && styles.contract,
            type === 'public-interest' && styles.publicInterest,
            type === 'legal-obligation' && styles.legalObligation,
            type === 'vital-interest' && styles.vitalInterest,
        ]}>{ label(type) }</span>

        <span style={[
            styles.span,
            styles.duration,
            type === 'consent' && styles.consent,
            type === 'legitimate-interest' && styles.legitimateInterest,
            type === 'contract' && styles.contract,
            type === 'public-interest' && styles.publicInterest,
            type === 'legal-obligation' && styles.legalObligation,
            type === 'vital-interest' && styles.vitalInterest,
        ]}>{ duration.slice(1) }</span>
    </div>

module.exports = Radium(Justification);
