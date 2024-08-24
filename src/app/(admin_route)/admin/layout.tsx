import Admin from '../../../components/admin';
import './globals.scss';

const RootLayout = (props: any) => {
  const { children, params } = props;
  const WEB_APP_META_DATA = {
    isProtected: true,
    role: 'ADMIN',
    layout: 'ADMIN_APP'
  };
  params.metadata = WEB_APP_META_DATA;
  return <Admin>{children}</Admin>;
};

export default RootLayout;
