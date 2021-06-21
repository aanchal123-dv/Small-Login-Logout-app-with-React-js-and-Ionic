import React, { useContext } from 'react';

export const AuthContext = React.createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}