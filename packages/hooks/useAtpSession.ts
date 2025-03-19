import React from 'react';
import { AtpAgent } from '@atproto/api';
import { BrowserOAuthClient } from '@atproto/oauth-client-browser';
import { OAuthClientMetadataInput } from '@atproto/oauth-client-browser';

const clientMetadata: Readonly<OAuthClientMetadataInput> = {
  // Must be the same URL as the one used to obtain this JSON object
  // client_id: 'https://pinatmosphere.com/client-metadata.json',
  client_name: 'Pin Atmosphere',
  client_uri: 'https://app.pinatmosphere.com',
  // logo_uri: 'https://my-app.com/logo.png',
  // tos_uri: 'https://my-app.com/tos',
  // policy_uri: 'https://my-app.com/policy',
  redirect_uris: [
    'https://pinatmosphere.com/logincallback', // web
    'com.pinatmosphere://logincallback', // android
    'pinamosphere://logincallback', // ios
  ],
  scope: 'atproto',
  grant_types: ['authorization_code', 'refresh_token'],
  response_types: ['code'],
  token_endpoint_auth_method: 'none',
  application_type: 'web',
  dpop_bound_access_tokens: true,
};

export function useAtpSession() {
  const oauthClient = new BrowserOAuthClient({
    clientMetadata,
    handleResolver: 'https://pinatmosphere.com/handler',
  });

  function login() {
    //
  }
  return { oauthClient, login };
}
