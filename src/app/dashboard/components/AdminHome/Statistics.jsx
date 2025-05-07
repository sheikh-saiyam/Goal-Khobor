import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  BarChart3,
  FileText,
  Package,
  Tag,
  Trophy,
  Users,
} from "lucide-react";

function StatsCard({ title, value, description, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value?.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function Statistics({ statistics, isLoading }) {
  const {
    adsCount,
    newsCount,
    usersCount,
    rankingsCount,
    transfersCount,
    publishersCount,
  } = statistics || {};

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="News Articles"
        value={newsCount}
        description="Total published articles"
        icon={<FileText className="h-5 w-5 text-primary" />}
      />
      <StatsCard
        title="Publishers"
        value={publishersCount}
        description="Active news sources"
        icon={<Package className="h-5 w-5 text-primary" />}
      />
      <StatsCard
        title="Advertisements"
        value={adsCount}
        description="Active ad campaigns"
        icon={<Activity className="h-5 w-5 text-primary" />}
      />
      <StatsCard
        title="Users"
        value={usersCount}
        description="Registered accounts"
        icon={<Users className="h-5 w-5 text-primary" />}
      />
      <StatsCard
        title="Rankings"
        value={rankingsCount}
        description="League tables"
        icon={<Trophy className="h-5 w-5 text-primary" />}
      />
      <StatsCard
        title="Transfers"
        value={transfersCount}
        description="Player movements"
        icon={<Activity className="h-5 w-5 text-primary" />}
      />
      <StatsCard
        title="Tags"
        value={389}
        description="Content categories"
        icon={<Tag className="h-5 w-5 text-primary" />}
      />
      <StatsCard
        title="Charts"
        value={3}
        description="Data visualizations"
        icon={<BarChart3 className="h-5 w-5 text-primary" />}
      />
    </div>
  );
}
