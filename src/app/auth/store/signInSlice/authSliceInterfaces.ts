export interface Token {
  value: string;
  cookieOptions: {
    secure: boolean;
    sameSite: string;
    path: string;
    expires: number;
  };
}

export interface Tokens {
  access: Token;
  id: Token;
  refresh: Token;
}

export interface SignInState {
  mode: string;
  message: string;
  sessionId: string;
  tokens: Tokens;
  nonce: string;
  redirectTo: string;
}
