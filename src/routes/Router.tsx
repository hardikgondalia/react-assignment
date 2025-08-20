// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ROUTE_PATHS } from './route';
// import { MainLayout } from '../shared/layouts/MainLayout';

// export const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={ROUTE_PATHS.HOME} element={<MainLayout />}>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
import { Route, Routes } from "react-router-dom";
import { routes } from "./route";
// import AuthLayout from "../shared/layouts/AuthLayout";
import { MainLayout } from "../shared/layouts/MainLayout";

const Router = () => {
  return (
    <Routes>
      {/* auth layout */}
      {/* <Route element={<AuthLayout />}>
        <Route path={routes.default} element={<div>default</div>} />
        <Route path={routes.login} element={<div>login</div>} />
        <Route path={routes.signup} element={<div>signup</div>} />
      </Route> */}

      {/* main layout */}
      <Route path={routes.main} element={<MainLayout />}>
        {/* <Route path={routes.main} element={<div>home</div>} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
