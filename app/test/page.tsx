"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";

interface Question {
  id: string;
  category: string;
  difficulty: string;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  timeLimit: number;
}

export default function Test() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});
  const [score, setScore] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("/api/questions");
      const data = await response.json();
      if (data.success) {
        setQuestions(data.questions);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTestCompleted(true);
    }
  };

  useEffect(() => {
    if (testCompleted) {
      const totalScore = questions.reduce((acc, question, index) => {
        const selectedAnswer = selectedAnswers[index];
        const correctAnswer = question.options.find(
          (option) => option.isCorrect
        );
        return acc + (selectedAnswer === correctAnswer?.text ? 1 : 0);
      }, 0);
      setScore(totalScore);

      // Submit score to API
      fetch("/api/submit-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user?.id, score: totalScore }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            router.push(
              `/results?score=${totalScore}&total=${questions.length}`
            );
          }
        });
    }
  }, [testCompleted, questions, selectedAnswers, user, router]);

  if (loading || questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  const question = questions[currentQuestion];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            Question {currentQuestion + 1} of {questions.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{question.question}</p>
          <RadioGroup
            onValueChange={handleAnswer}
            value={selectedAnswers[currentQuestion]}
          >
            {question.options.map((option, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <RadioGroupItem value={option.text} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button onClick={handleNext} className="mt-4 w-full">
            {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
