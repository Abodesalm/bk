// app/test/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import StudentsTable from '@/components/big/StuTable';
import { StudentData } from '@/types/students';
import { api } from '@/public/data';

export default function TestResultsPage() {
  const params = useParams();
  const [students, setStudents] = useState<StudentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`${api.anse}/${params.id}?limit=10`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        if (data.status === 'success') {
          setStudents(data.data);
        } else {
          throw new Error('Failed to load data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <main className="min-h-[70vh] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="my-8">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            لائحة الأفضل
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <StudentsTable students={students} />

          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>العدد الكلي : {students.length}</p>
            {/* <p className="mt-1">Click on "Score (%)" or "Time" headers to sort</p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
