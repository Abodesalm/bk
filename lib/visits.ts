import { api } from '@/public/data';

// دالة لتحديث عدد الزوار
export const incrementVisitorCount = async (): Promise<number> => {
  try {
    const response = await fetch(`${api.inc_vis}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data.totalVisitors || 0;
  } catch (error) {
    console.error('Failed to increment visitor count:', error);
    return 0;
  }
};

// دالة لجلب إحصائيات الزوار
export const getVisitorStats = async () => {
  try {
    const response = await fetch(`${api.stats_vis}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch visitor stats:', error);
    return null;
  }
};
