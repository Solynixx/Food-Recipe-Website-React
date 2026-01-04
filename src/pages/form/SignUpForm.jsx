import React from 'react';

class SignUpForm extends React.Component {
  render() {
    const { isActive, onSwitchMode } = this.props;

    return (
      <div className={`auth-panel right-panel ${isActive ? 'active' : ''}`}>
        
        <div className="head_right">
          <h1>SIGN UP</h1>
        </div>

        <form className="form" action="Sign_up">
          <section className="form_signup">
            <label htmlFor="username" className="username">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              autoComplete="off"
              minLength={5}
            />
            <label htmlFor="email_signup" className="email_signup">Email</label>
            <input
              className="form-control"
              type="email"
              name="email_signup"
              id="email_signup"
              placeholder="Enter your email"
              autoComplete="off"
              minLength={5}
            />
            <label htmlFor="password_signup" className="password_signup">Password</label>
            <input
              className="form-control"
              type="password"
              name="password_signup"
              id="password_signup"
              placeholder="Enter your password"
              autoComplete="off"
              minLength={4}
            />
          </section>

          <div id="footer_signup">
            <label className="remember-wrap">
              <input type="checkbox" id="kotak2" />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
          </div>

          <button type="submit" className="auth-btn" id="sign-up-button">Sign up</button>

          <div className="switch-auth-mode">
            <span>Already have an account?</span>
            <button type="button" className="switch-link" onClick={onSwitchMode}>
              {' '}Sign in
            </button>
          </div>

          <p className="auth-separator">Or</p>

          <ul className="container_gambar_signup">
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

export default SignUpForm;