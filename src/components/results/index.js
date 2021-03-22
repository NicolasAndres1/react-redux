import React from 'react';
import { connect } from 'react-redux';
import Page from './page.js';

const Results = ({suggestions}) => {
    console.log(suggestions)
    return (
        <>
            <Page />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions
    };
};

// const mapDispatchToProps = (dispatch) => {return};

export default connect(mapStateToProps, {})(Results);