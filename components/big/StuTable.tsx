// components/students-table.tsx
'use client';

import { useState, useMemo } from 'react';
import { StudentData } from '@/types/students';
import { parseTimeToSeconds } from '@/lib/utils';

interface StudentsTableProps {
  students: StudentData[];
}

type SortField = 'p' | 'time';
type SortDirection = 'asc' | 'desc';

export default function StudentsTable({ students }: StudentsTableProps) {
  const [sortField, setSortField] = useState<SortField>('p');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortDirection(field === 'p' ? 'desc' : 'asc');
    }
  };

  const sortedStudents = useMemo(() => {
    return [...students].sort((a, b) => {
      let comparison = 0;

      if (sortField === 'p') {
        comparison = b.p - a.p;
      } else {
        const timeA = parseTimeToSeconds(a.time);
        const timeB = parseTimeToSeconds(b.time);
        comparison = timeA - timeB;
      }

      // Secondary sorting
      if (comparison === 0) {
        if (sortField === 'p') {
          const timeA = parseTimeToSeconds(a.time);
          const timeB = parseTimeToSeconds(b.time);
          return timeA - timeB;
        } else {
          return b.p - a.p;
        }
      }

      return sortDirection === 'desc' ? comparison : -comparison;
    });
  }, [students, sortField, sortDirection]);

  const getPositionStyle = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-l-4 border-yellow-500';
      case 1:
        return 'bg-gradient-to-r from-gray-300/20 to-gray-400/20 border-l-4 border-gray-400';
      case 2:
        return 'bg-gradient-to-r from-amber-700/20 to-amber-800/20 border-l-4 border-amber-700';
      default:
        return 'hover:bg-gray-50 dark:hover:bg-gray-800/50';
    }
  };

  const getPositionBadge = (index: number) => {
    switch (index) {
      case 0:
        return (
          <span className="px-3 md:px-2 py-1 text-xs font-bold bg-yellow-500 text-yellow-900 rounded-full">
            🥇 1
          </span>
        );
      case 1:
        return (
          <span className="px-3 md:px-2 py-1 text-xs font-bold bg-gray-300 text-gray-800 rounded-full">
            🥈 2
          </span>
        );
      case 2:
        return (
          <span className="px-3 md:px-2 py-1 text-xs font-bold bg-amber-700 text-amber-100 rounded-full">
            🥉 3
          </span>
        );
      default:
        return (
          <span className="px-3 md:px-2 py-1 text-xs font-bold bg-gray-100 text-gray-600 rounded-full">
            #{index + 1}
          </span>
        );
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 md:px-3 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                المرتبة
              </th>
              <th className="px-6 md:px-3 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                الاسم
              </th>
              <th
                className="px-6 md:px-3 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                /* onClick={() => handleSort('p')} */
              >
                <div className="flex items-center">
                  النتيجة
                  {/* sortField === 'p' && (
                    <span className="ml-1">
                      {sortDirection === 'desc' ? '↓' : '↑'}
                    </span>
                  ) */}
                </div>
              </th>
              <th
                className="px-6 md:px-3 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                /* onClick={() => handleSort('time')} */
              >
                <div className="flex items-center">
                  المدة
                  {/* sortField === 'time' && (
                    <span className="ml-1">
                      {sortDirection === 'desc' ? '↓' : '↑'}
                    </span>
                  ) */}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {sortedStudents.map((student, index) => (
              <tr key={student._id} className={getPositionStyle(index)}>
                <td className="px-6 md:px-3 py-4 whitespace-nowrap   text-center">
                  <div className="flex items-center">
                    {getPositionBadge(index)}
                  </div>
                </td>
                <td className="px-6 md:px-3 py-4 whitespace-nowrap  text-center">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {student.name}
                  </div>
                </td>
                <td className="px-6 md:px-3 py-4 whitespace-nowrap  text-center">
                  <div className="text-sm text-gray-900 dark:text-gray-100 font-bold">
                    {student.p}%
                  </div>
                </td>
                <td className="px-6 md:px-3 py-4 whitespace-nowrap text-sm  text-center text-gray-500 dark:text-gray-400">
                  {student.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
