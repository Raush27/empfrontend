import Employ from '../../../components/employ';
import './globals.scss';

const RootLayout = (props: any) => {
  const { children, params } = props;
  const WEB_APP_META_DATA = {
    isProtected: true,
    role: 'EMPLOYEE',
    layout: 'EMPLOYEE_APP'
  };
  params.metadata = WEB_APP_META_DATA;
  return <Employ>{children}</Employ>;
};

export default RootLayout;
