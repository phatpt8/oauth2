import React, { useState } from 'react'
import OAuth2Login from 'react-simple-oauth2-login';

const clientSecret = "b9c1673c8c2d6f51111fa3eb8efe2a4ae4f78583"

const Oauth = ({ }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  const onSuccess = (res) => {
    setAccessToken(res)
    // const data = {
    //   client_id: 'myclientid',
    //   client_secret: 'myclientsecret',
    //   code: res.code
    // }
    // this.props.githubLogin(data); // -> axios.post('https://github.com/login/oauth/access_token', { data }).then(res => console.log(res))
  };
  return (
    <div className="column">
      {
        error && <div>{error}</div>
      }
      <OAuth2Login
        authorizationUrl={"https://accounts.google.com/o/oauth2/v2/auth"}
        scope={"https://www.googleapis.com/auth/drive.metadata.readonly&"}
        clientId={"99366322333-49mhe0s7roam7sbkj1eeltrk00urctou.apps.googleusercontent.com"}
        redirectUri={"http://localhost:3000"}
        responseType="code"
        buttonText="Implicit grant login"
        onSuccess={onSuccess}
        onFailure={setError}
      />
      {
        accessToken && <p>Access token: {JSON.stringify(accessToken)}</p>
      }
    </div>
  );
}

export default Oauth