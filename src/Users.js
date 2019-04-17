import React from 'react'

import { setUsersActionCreator } from './state/users'

import { connect } from 'react-redux'

const Users = (props) => {
    props._setUsers('ala')

    return (
        <div>
            USERS
    </div>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    _setUsers: (users) => dispatch(setUsersActionCreator(users)),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)