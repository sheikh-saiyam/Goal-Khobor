"use client";
import useFetchAdminStatistics from "@/hooks/useFetchAdminStatistics";
import DateNewsCountChart from "../AdminHome/DateNewsCountChart";
import PublishersCountChart from "../AdminHome/PublishersCountChart";
import Statistics from "../AdminHome/Statistics";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const AdminHome = () => {
  const [data, isLoading] = useFetchAdminStatistics();

  return (
    <div>
      <div className="w-full">
        <Statistics statistics={data?.statistics} isLoading={isLoading} />
      </div>
 
      <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>News by Publisher</CardTitle>
                <CardDescription>Distribution of articles across different publishers</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <PublishersCountChart data={data.publisher_counts} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>News by Date</CardTitle>
                <CardDescription>Publication frequency over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <DateNewsCountChart data={data.date_counts} />
              </CardContent>
            </Card>
          </div>
    </div>
  );
};

export default AdminHome;
