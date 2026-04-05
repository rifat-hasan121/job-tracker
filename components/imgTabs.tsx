"use client"


import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function ImgTabs() {

  const [activeTab, setActiveTab]=useState("organized")
  return (
          <section className="border-t border-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button 
                onClick={()=>setActiveTab("organized")}
                variant={activeTab === "organized" ? "default" : "outline"}
                >Organized Applications</Button>
                <Button 
                onClick={()=>setActiveTab("hired")}
                variant={activeTab === "hired" ? "default" : "outline"}
                >Get Hired</Button>
                <Button 
                onClick={()=>setActiveTab("manage")}
                variant={activeTab === "manage" ? "default" : "outline"}
                >Manage Boards</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
               {activeTab === "organized" && <Image 
                src="/hero-images/hero1.png"
                alt="Organized Applications"
                width={1200}
                height={800}/>}

                {activeTab === "hired" && <Image 
                src="/hero-images/hero2.png"
                alt="Get Hired"
                width={1200}
                height={800}/>}

                {activeTab === "manage" && <Image 
                src="/hero-images/hero3.png"
                alt="Manage Boards"
                width={1200}
                height={800}/>}
              </div>
            </div>
          </div>

        </section>
  )
}
