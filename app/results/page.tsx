"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Results() {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score"))*10;
  const total = Number(searchParams.get("total"))*10;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Your IQ Test Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-4">
            Your IQ is: {score} out of {total}
          </p>
          <p className="mb-4">
            This score is based on the number of correct answers out of {total}{" "}
            questions. A more comprehensive IQ test would provide a standardized
            IQ score.
          </p>
          <Link href="/">
            <Button className="w-full">Back to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
