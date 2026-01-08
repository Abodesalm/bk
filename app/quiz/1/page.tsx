'use client';

import { useEffect, useMemo, useState } from 'react';
import { quiz } from '@/public/data';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';
import { coloring } from '@/lib/utils';

type AnswerStatus = 'idle' | 'correct' | 'wrong';

export default function QuizPage() {
  const totalQuestions = quiz.questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('idle');

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];

  /* ================= Timer ================= */
  useEffect(() => {
    if (finished) return;
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [finished]);

  /* ================= Handle Answer ================= */
  const handleAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(optionIndex);

    const isCorrect = optionIndex === currentQuestion.correctAnswer;

    if (isCorrect) {
      setCorrectCount((c) => c + 1);
      setAnswerStatus('correct');
    } else {
      setWrongCount((w) => w + 1);
      setAnswerStatus('wrong');
    }

    setTimeout(() => {
      if (currentIndex + 1 === totalQuestions) {
        setFinished(true);
      } else {
        setCurrentIndex((i) => i + 1);
        setSelectedOption(null);
        setAnswerStatus('idle');
      }
    }, 800);
  };

  /* ================= Progress ================= */
  const progressValue = useMemo(() => {
    return ((currentIndex + 1) / totalQuestions) * 100;
  }, [currentIndex, totalQuestions]);

  /* ================= Time Format ================= */
  const formattedTime = useMemo(() => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }, [seconds]);

  /* ================= Finished Screen ================= */
  if (finished) {
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    return (
      <main className="max-w-3xl mx-auto p-6 min-h-[70vh]">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              🎉 انتهى الاختبار
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <Stat className={``} label="عدد الأسئلة" value={totalQuestions} />
              <Stat
                className={` rate-${coloring(percentage)}`}
                label="النسبة المئوية"
                value={`${percentage}%`}
              />
              <Stat
                className={`bg-success/40`}
                label="الإجابات الصحيحة"
                value={correctCount}
              />
              <Stat
                className={`bg-danger/40`}
                label="الإجابات الخاطئة"
                value={wrongCount}
              />
            </div>

            <div className="text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                ⏱ الوقت المستغرق : {formattedTime}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  /* ================= Quiz Screen ================= */
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6  min-h-[70vh]">
      {/* Header */}
      <Card className="bg-newbg">
        <CardContent className="pt-6 space-y-4 ">
          <div className="flex justify-between items-center">
            <span className="font-semibold ">
              السؤال {currentIndex + 1} / {totalQuestions}
            </span>
            <Badge variant="outline">⏱ {formattedTime}</Badge>
          </div>

          <Progress value={progressValue} />
        </CardContent>
      </Card>

      {/* Question */}
      <Card className="shadow-lg bg-newbg">
        <CardHeader>
          <CardTitle className="text-lg leading-relaxed">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = index === currentQuestion.correctAnswer;

            return (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleAnswer(index)}
                className={clsx(
                  'w-full justify-start text-right h-auto py-4 px-4 transition bg-white hover:bg-white',
                  {
                    'bg-green-100 border-green-400 hover:bg-green-100 hover:border-green-400':
                      isSelected && isCorrect,
                    'bg-red-100 border-red-400 hover:bg-red-100 hover:border-red-400':
                      isSelected && !isCorrect,
                  },
                )}
              >
                {option}
              </Button>
            );
          })}
        </CardContent>
      </Card>
    </main>
  );
}

/* ================= Reusable Stat ================= */
function Stat({
  label,
  value,
  className = '',
}: {
  label: string;
  value: number | string;
  className: string;
}) {
  return (
    <div className={`bg-muted rounded-lg p-4  ${className}`}>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
