import React from 'react';

const Test = ({ title, children }) =>
    <section className="test">
        <h2 className="test__title">{ title }</h2>
        <div className="test__body">{ children }</div> 
    </section>

module.exports = Test
