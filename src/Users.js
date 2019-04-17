import React from 'react'

import { setUsersActionCreator } from './state/users'


import { connect } from 'react-redux'

const Users = (props) => {
    
    return (
        <div>
            {
                props._users &&
                props._users.map(
                    user => (
                        <div
                        key= {user.login.uuid}
                        >
                            {user.name.first}
                        </div>
                    )
                )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    _users: state.users.users

})

const mapDispatchToProps = dispatch => ({
    _setUsers: (users) => dispatch(setUsersActionCreator(users)),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)