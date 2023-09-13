import { useGetUsersQuery } from "../reducers/apiSlice";

const Dashboard = () => {
  const { data, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading Users...</p>;

  return (
    <div>
      <h2>This is a Dashboard</h2>
      {!!data?.count &&
        data.data.map((user) => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
