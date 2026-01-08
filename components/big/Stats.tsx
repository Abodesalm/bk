'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Eye, Calendar, TrendingUp } from 'lucide-react';
import { incrementVisitorCount, getVisitorStats } from '@/lib/visits';

interface VisitorStats {
  today: {
    count: number;
  };
  thisMonth: {
    totalVisits: number;
    totalPageViews: number;
  };
  allTime: {
    totalVisits: number;
    totalPageViews: number;
  };
}

export default function Stats() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateVisitorCount = async () => {
      // تحديث العداد عند تحميل الصفحة
      await incrementVisitorCount();

      // جلب الإحصائيات
      const visitorStats = await getVisitorStats();
      setStats(visitorStats);
      setLoading(false);
    };

    updateVisitorCount();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full flex flex-row flex-wrap items-center justify-evenly md:gap-8">
      <Card className="w-[320px] h-[200px] bg-white border-0 drop-shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-medium">زوار هذا الشهر</CardTitle>
          <TrendingUp className="h-8 w-8 text-black" />
        </CardHeader>
        <CardContent className="mt-12 text-center">
          <div className="text-2xl font-bold">
            {stats?.thisMonth?.totalVisits || 0}
          </div>
        </CardContent>
      </Card>

      <Card className="w-[320px] h-[200px] bg-white border-0 drop-shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-medium">
            الطلاب المستفيدين
          </CardTitle>
          <Users className="h-8 w-8 text-black" />
        </CardHeader>
        <CardContent className="mt-12 text-center">
          <div className="text-2xl font-bold">
            {stats?.allTime?.totalVisits || 0}
          </div>
        </CardContent>
      </Card>

      <Card className="w-[320px] h-[200px] bg-white border-0 drop-shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
          <CardTitle className="text-xl font-medium">مشاهدات الصفحات</CardTitle>
          <Eye className="h-8 w-8 text-black" />
        </CardHeader>
        <CardContent className="mt-12">
          <div className="text-2xl font-bold  text-center">
            {stats?.allTime?.totalPageViews || 0}
          </div>
          <p className="text-xs text-black mt-4">
            هذا الشهر: {stats?.thisMonth?.totalPageViews || 0}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
