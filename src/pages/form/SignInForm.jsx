import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
  render() {
    const { isActive, onSwitchMode } = this.props;

    return (
      <div className={`auth-panel left-panel ${isActive ? 'active' : ''}`}>
        
        <header className="auth-header">
          <h1>
            WELCOME BACK <img src="/assets/forms/wave-unscreen.gif" alt="wave" />
          </h1>
          <p className="auth-details">Welcome back! Please enter your details.</p>
        </header>

        <form className="form" action="Sign_in">
          <section className="form_login">
            <label htmlFor="email" className="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              minLength={5}
            />
            <label htmlFor="password" className="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="off"
              minLength={4}
            />
          </section>

          <div className="auth-footer">
            <label className="remember-wrap">
              <input type="checkbox" id="kotak" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" className="auth-btn" id="sign-in-button">Sign in</button>

          <p className="auth-separator">Or</p>

          <div className="switch-auth-mode">
            <span>Don&apos;t have an account?</span>
            <button type="button" className="switch-link" onClick={onSwitchMode}>
              {' '}Sign up
            </button>
          </div>

          <ul className="container_gambar">
            <li><a href="https://www.google.com/"><img src="/assets/logo/Google.png" alt="google" /></a></li>
            <li><a href="https://www.facebook.com/"><img src="/assets/logo/Facebook.png" alt="facebook" /></a></li>
            <li><a href="https://github.com/Dendroculus/Food-Recipe-Website"><img src="/assets/logo/Github.png" alt="github" /></a></li>
            <li><a href="https://twitter.com/"><img src="/assets/logo/X.png" alt="X" /></a></li>
          </ul>
        </form>
      </div>
    );
  }
}

export default SignInForm;