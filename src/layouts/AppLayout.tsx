import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div>Root Layout</div>
      <Outlet />
    </>
  );
};

export default AppLayout;
