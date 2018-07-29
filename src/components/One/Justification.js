import React from 'react';
import classnames from 'classnames';
import { get } from 'lodash';
import './Justification.css';

const classes = type =>
    classnames({
        'justification-1': true,
        [`justification-1--${type}`]: true
    });

const label = type =>
    get({
        'consent': 'C',
        'legitimate-interest': 'LI',
        'contract': 'CT',
        'public-interest': 'PI',
        'legal-obligation': 'LO',
        'vital-interest': 'VI',
    }, type)

const Justification = ({ type, duration }) =>
    <div className={ classes(type) }>
        <span className="justification-1__type">{ label(type) }</span>
        <span className="justification-1__duration">{ duration.slice(1) }</span>
    </div>

module.exports = Justification;
