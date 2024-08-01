import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the nictitating membrane to protect their eyes.",
];

const Index = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % catFacts.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All About Cats</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Cat Image</CardTitle>
            <CardDescription>A cute cat placeholder</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
              <Cat size={64} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cat Facts</CardTitle>
            <CardDescription>Learn interesting facts about cats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{catFacts[currentFact]}</p>
            <Button onClick={nextFact}>Next Fact</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
