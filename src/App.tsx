import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import awsconfig from './aws-exports';
//import { AuthUser } from '@aws-amplify/ui-components';
import { CognitoUser } from 'amazon-cognito-identity-js';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import UserDashboard from './components/pages/user/UserDashboard';
//import { Translations } from '@aws-amplify/ui-components';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {() => <AuthenticatedApp />}
    </Authenticator>
  );
}

function AuthenticatedApp() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  //const { user: cognitoUser, signOut } = useAuthenticator((context) => [context.user]);
  //const user = cognitoUser as CognitoUser;
  const [isAdmin, setIsAdmin] = React.useState<boolean | null>(null);
  const isAdminTest = true;

  React.useEffect(() => {
    const checkUserGroup = () => {
      //const groups = user?.signInUserSession?.accessToken?.payload['cognito:groups'] || [];
      //仮対応
      const groups = (user as any)?.signInUserSession?.accessToken?.payload['cognito:groups'] || [];
      setIsAdmin(groups.includes('admin'));
      console.log('User groups:', groups);
      console.log('Is admin:', groups.includes('admin'));
    };
    checkUserGroup();
  }, [user]);

  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  return isAdmin ? (
    <AdminDashboard signOut={signOut} username={user.username} />
  ) : (
    <UserDashboard signOut={signOut} username={user.username} />
  );
}

export default App;