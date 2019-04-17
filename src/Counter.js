import React from 'react'

//import { startCounterSyncAsyncAction } from './state/counter'

import { connect } from 'react-redux'
import { incAsyncAsyncActionCreator } from './state/counter'


const Counter = (props) => (
    props._number !== null ?
        <div>
            <div>
                {props._number}
            </div>
            <button
                onClick={props._inc}
            >
                +
            </button>
        </div>
        :
        'Ładowanie...'

)

const mapStateToProps = state => ({
    _number: state.counter.number,
})
const mapDispatchToProps = dispatch => ({
    _inc: () => dispatch(incAsyncAsyncActionCreator())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Counter)