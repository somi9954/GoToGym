import Header from '../../outlines/admin/Header';
import { Outlet, useLocation } from 'react-router-dom';
import AdminOnly from '../../components/commons/auth/AdminOnly';
import Side from '../../outlines/admin/Side';

const CommonLayout = () => {
  const location = useLocation();
  const path = location.pathname.split('/');
  path.shift();
  let mainClass = path.join('_');
  mainClass = mainClass ? `${mainClass}_page` : 'main_page';
  return (
    <AdminOnly>
      <Header />
      <main className={`admin_page ${mainClass}`}>
        <Side />
        <section>
          <Outlet />
        </section>
      </main>
    </AdminOnly>
  );
};

export default CommonLayout;
