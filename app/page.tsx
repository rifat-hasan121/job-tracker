import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* hero section */}
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl px-4 py-32">
            <h1 className="text-4xl font-bold">Job Tracker</h1>
            <p className="text-lg">Track your job applications</p>
          
          <div>
            <Button size="lg" className="text-lg font-bold">
              Start for Free <ArrowRight className="ml-2"/>
            </Button>
            <p className="text-sm text-muted-foreground">Free forever, no creadit card requared</p>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
