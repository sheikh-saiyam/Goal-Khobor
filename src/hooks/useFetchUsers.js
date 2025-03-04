import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const { data } = await axios.get("/api/all-users");
  return data;
};

const useFetchUsers = () => {
  const {data: users = [], isLoading, refetch} =  useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  return [users, isLoading, refetch]
};

export default useFetchUsers;
