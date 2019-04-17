import React from 'react'

import { fetchUsersAsyncActionCreator } from './state/users'



import { connect } from 'react-redux'

const Users = (props) => {

    return (
        <div>
            <button
                onClick={props._set}
            >
                Załaduj
            </button>
            {props._isError ?
                "Wystąpił błąd"
                :
                props._isLoading ?
                    "Ładuję..."
                    :
                    props._users &&
                    props._users.map(
                        user => (
                            <div
                                key={user.login.uuid}
                            >
                                {user.name.first} {user.name.last}
                            </div>
                        )
                    )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    _users: state.users.users,
    _isLoading: state.users.isLoading,
    _isError: state.users.isError,

})

const mapDispatchToProps = dispatch => ({
    _set: () => dispatch(fetchUsersAsyncActionCreator(10))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)