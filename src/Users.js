import React from 'react'




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
                            {user.name.first} {user.name.last}
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
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)