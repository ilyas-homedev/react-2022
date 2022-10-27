import { useSearchUsersQuery } from "../store/github/github.api";

export const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery("ilyas");

  return <h1>Home</h1>;
};
