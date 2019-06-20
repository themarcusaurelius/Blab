import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Spinner from './Spinner';
//import serviceWorker from './serviceWorker';
import firebase from './firebase';

import 'semantic-ui-css/semantic.min.css'; 

import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    withRouter 
} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setUser, clearUser } from './actions';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#00bcd4',
            main: '#000000',
            dark: '#002884',
            contrastText: '#fff',
            },
        secondary: {
            light: '#ff7961',
            main: '#f3e5f5',
            dark: '#ba000d',
            contrastText: '#000',
        },
        typography: {
            useNextVariants: true,
        },
        type: 'light',
    },
});


const store = createStore(rootReducer, composeWithDevTools());
 
class Root extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.setUser(user);
                this.props.history.push("/")
            } else {
                this.props.history.push("/login")
                this.props.clearUser();
            }
        });
    }

    render() {
        return this.props.isLoading ? <Spinner /> : (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        );
    }   
};

const mapStateToProps = state => ({
    isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(connect(mapStateToProps, { setUser, clearUser })(Root));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router>
                <RootWithAuth />
            </Router>
        </MuiThemeProvider>
    </Provider>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister(); 
