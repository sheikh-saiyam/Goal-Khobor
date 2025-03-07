import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPublishers = async () => {
  const { data } = await axios.get("/api/publishers");
  return data;
};

const useFetchPublishers = () => {
  const {
    data: publishers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["publishers"],
    queryFn: fetchPublishers,
  });
  return [publishers, isLoading, refetch];
};

export default useFetchPublishers;
