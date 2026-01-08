'use client';

import { ReactElement } from 'react';

// مجموعة SVG الأيقونات التعليمية الصحيحة
export const StudyIcons: Array<() => ReactElement> = [
  // كتاب مفتوح
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="20"
        y="25"
        width="20"
        height="50"
        fill="currentColor"
        opacity="0.07"
        rx="2"
      />
      <rect
        x="60"
        y="25"
        width="20"
        height="50"
        fill="currentColor"
        opacity="0.07"
        rx="2"
      />
      <rect
        x="40"
        y="25"
        width="20"
        height="50"
        fill="currentColor"
        opacity="0.1"
        rx="2"
      />
      <line
        x1="40"
        y1="35"
        x2="60"
        y2="35"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="40"
        y1="45"
        x2="60"
        y2="45"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="40"
        y1="55"
        x2="60"
        y2="55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
    </svg>
  ),

  // قلم رصاص
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <polygon
        points="45,20 55,20 60,40 40,40"
        fill="currentColor"
        opacity="0.1"
      />
      <rect
        x="47"
        y="40"
        width="6"
        height="30"
        fill="currentColor"
        opacity="0.08"
      />
      <polygon
        points="47,70 53,70 55,80 45,80"
        fill="currentColor"
        opacity="0.07"
      />
    </svg>
  ),

  // مسطرة
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="20"
        y="45"
        width="60"
        height="10"
        fill="currentColor"
        opacity="0.08"
        rx="1"
      />
      <line
        x1="25"
        y1="45"
        x2="25"
        y2="55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="35"
        y1="45"
        x2="35"
        y2="55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="45"
        y1="45"
        x2="45"
        y2="55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="55"
        y1="45"
        x2="55"
        y2="55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
    </svg>
  ),

  // دفتر
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="30"
        y="25"
        width="40"
        height="50"
        fill="currentColor"
        opacity="0.07"
        rx="2"
      />
      <line
        x1="40"
        y1="35"
        x2="60"
        y2="35"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="40"
        y1="45"
        x2="60"
        y2="45"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="40"
        y1="55"
        x2="60"
        y2="55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="40"
        y1="65"
        x2="60"
        y2="65"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
    </svg>
  ),

  // كمبيوتر محمول
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="25"
        y="30"
        width="50"
        height="35"
        fill="currentColor"
        opacity="0.07"
        rx="2"
      />
      <rect
        x="30"
        y="35"
        width="40"
        height="25"
        fill="currentColor"
        opacity="0.1"
      />
      <rect
        x="20"
        y="65"
        width="60"
        height="5"
        fill="currentColor"
        opacity="0.07"
        rx="1"
      />
      <rect
        x="40"
        y="70"
        width="20"
        height="3"
        fill="currentColor"
        opacity="0.07"
        rx="1"
      />
    </svg>
  ),

  // لمبة فكرة
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <circle cx="50" cy="40" r="20" fill="currentColor" opacity="0.08" />
      <rect
        x="40"
        y="65"
        width="20"
        height="15"
        fill="currentColor"
        opacity="0.07"
        rx="2"
      />
      <rect
        x="48"
        y="80"
        width="4"
        height="10"
        fill="currentColor"
        opacity="0.07"
      />
    </svg>
  ),

  // عدسة مكبرة
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <circle
        cx="60"
        cy="40"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      />
      <line
        x1="30"
        y1="70"
        x2="45"
        y2="55"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      />
    </svg>
  ),

  // مخطط بياني
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="30"
        y="50"
        width="10"
        height="20"
        fill="currentColor"
        opacity="0.1"
      />
      <rect
        x="45"
        y="40"
        width="10"
        height="30"
        fill="currentColor"
        opacity="0.1"
      />
      <rect
        x="60"
        y="30"
        width="10"
        height="40"
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  ),

  // علامة صح
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.08" />
      <path
        d="M35,50 L45,60 L65,40"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.15"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),

  // نجمة
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <path
        d="M50,20 L55,35 L70,35 L60,45 L65,60 L50,50 L35,60 L40,45 L30,35 L45,35 Z"
        fill="currentColor"
        opacity="0.08"
      />
    </svg>
  ),

  // ساعة
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.08" />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="35"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      />
      <line
        x1="50"
        y1="50"
        x2="65"
        y2="50"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
      />
    </svg>
  ),

  // حقيبة كتب
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="35"
        y="45"
        width="30"
        height="25"
        fill="currentColor"
        opacity="0.08"
        rx="2"
      />
      <rect
        x="40"
        y="40"
        width="20"
        height="5"
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  ),

  // علامة تعجب
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="48"
        y="30"
        width="4"
        height="30"
        fill="currentColor"
        opacity="0.1"
      />
      <circle cx="50" cy="75" r="4" fill="currentColor" opacity="0.1" />
    </svg>
  ),

  // علامة استفهام
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <circle
        cx="50"
        cy="35"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      />
      <rect
        x="48"
        y="55"
        width="4"
        height="15"
        fill="currentColor"
        opacity="0.1"
      />
      <circle cx="50" cy="75" r="3" fill="currentColor" opacity="0.1" />
    </svg>
  ),

  // ميكروسكوب
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="45"
        y="45"
        width="10"
        height="25"
        fill="currentColor"
        opacity="0.08"
      />
      <circle cx="50" cy="40" r="8" fill="currentColor" opacity="0.1" />
    </svg>
  ),

  // أدوات هندسية
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <circle
        cx="40"
        cy="40"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      />
      <rect
        x="60"
        y="35"
        width="15"
        height="15"
        fill="currentColor"
        opacity="0.08"
        rx="2"
      />
    </svg>
  ),

  // رأس تفكير
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <circle cx="50" cy="45" r="15" fill="currentColor" opacity="0.08" />
      <rect
        x="45"
        y="65"
        width="10"
        height="10"
        fill="currentColor"
        opacity="0.07"
        rx="2"
      />
    </svg>
  ),

  // كتاب مغلق
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="30"
        y="30"
        width="40"
        height="40"
        fill="currentColor"
        opacity="0.07"
        rx="2"
      />
      <rect
        x="35"
        y="35"
        width="30"
        height="30"
        fill="currentColor"
        opacity="0.1"
        rx="1"
      />
      <line
        x1="35"
        y1="45"
        x2="65"
        y2="45"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="35"
        y1="55"
        x2="65"
        y2="55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
    </svg>
  ),

  // قلما وجامع أقلام
  () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      <rect
        x="40"
        y="40"
        width="20"
        height="30"
        fill="currentColor"
        opacity="0.08"
        rx="2"
      />
      <circle cx="50" cy="35" r="6" fill="currentColor" opacity="0.1" />
      <rect
        x="47"
        y="70"
        width="6"
        height="10"
        fill="currentColor"
        opacity="0.07"
      />
    </svg>
  ),
];
