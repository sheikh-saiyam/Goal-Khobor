import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchAdminStatistics = async () => {
  const { data } = await axios.get("/api/admin-stats");
  return data;
};

const useFetchAdminStatistics = () => {
  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["admin-statistics"],
    queryFn: fetchAdminStatistics,
  });
  return [data, isLoading, refetch];
};

export default useFetchAdminStatistics;
