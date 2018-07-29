import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

const Justification = styled.div`
    display: flex;

    .test__body & {
        margin: 0 16px 16px 0;
    }
`

const Span = styled.span`
    display: block;
    height: 20px;
    background-color: #fff;
    border: 2px solid #999;
    border-radius: 5px;
    text-align: center;
    font-family: 'Open Sans';
    font-size: 11px;
    font-weight: 700;
    line-height: 20px;

    .j2-consent & {
        border-color: mediumseagreen;
        color: mediumseagreen;
    }

    .j2-legitimate-interest & {
        border-color: mediumslateblue;
        color: mediumslateblue;
    }

    .j2-contract & {
        border-color: dodgerblue;
        color: dodgerblue;
    }

    .j2-public-interest & {
        border-color: sienna;
        color: sienna;
    }

    .j2-legal-obligation & {
        border-color: lightslategrey;
        color: lightslategrey;
    }

    .j2-vital-interest & {
        border-color: violet;
        color: violet;
    }
`

const Type = Span.extend`
    position: relative;
    width: 20px;
    letter-spacing: -0.025em;
`

const Duration = Span.extend`
    position: relative;
    padding: 0 4px;
    min-width: 12px;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-size: 10px;
    line-height: 20px;

    &:before {
        position: absolute;
        z-index: 1;
        left: -10px;
        top: -2px;
        bottom: -2px;
        content: '';
        display: block;
        width: 10px;
        border: 2px solid;
        border-width: 2px 0;
    }
`

const label = type =>
    get({
        'consent': 'C',
        'legitimate-interest': 'LI',
        'contract': 'CT',
        'public-interest': 'PI',
        'legal-obligation': 'LO',
        'vital-interest': 'VI',
    }, type)

module.exports = ({ type, duration }) =>
    <Justification className={ `j2-${type}` }>
        <Type>{ label(type) }</Type>
        <Duration>{ duration.slice(1) }</Duration>
    </Justification>
