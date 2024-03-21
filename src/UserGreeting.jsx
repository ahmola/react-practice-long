import PropTypes from 'prop-types';

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please LogIn to Continue
                        </h2>

    return(
        props.isLoggedIn ?  welcomeMessage : loginPrompt
                            
    )
    
}
