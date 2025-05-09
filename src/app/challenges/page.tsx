'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Challenges() {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl mt-22 font-bold mb-8 text-center">Create a Group Challenge</h1> 
        
        <div className="space-y-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-green-500 text-white">
            <CardHeader className="mb-4">
              <CardTitle className="text-white">Group Challenges Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <div className="relative h-[300px] mb-6">
                <img 
                  src="/images/group-walking.jpg" 
                  alt="Group of people walking together" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Group Challenges are exclusive fitness journeys designed for private groups. Whether it's your family, friends, colleagues, or a special community, these challenges bring you closer while keeping you on your toes—literally!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full text-white mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">By Invite Only</h3>
                  <p className="text-gray-600 dark:text-gray-400">Secure and private access</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Flexible Access</h3>
                  <p className="text-gray-600 dark:text-gray-400">Custom pricing options</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full text-white mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Shared Goals</h3>
                  <p className="text-gray-600 dark:text-gray-400">Collective milestones and friendly competition</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-green-500 text-white">
            <CardHeader className="mb-4">
              <CardTitle className="text-white">Create Your Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-white">
              <div>
                <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Group Name (max 20 chars)*
                </label>
                <input
                  type="text"
                  id="groupName"
                  placeholder="Brigade Opus Walking Challenge"
                  maxLength={20}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Group Challenge Description*
                </label>
                <input
                  type="text"
                  id="description"
                  placeholder="Short description of the challenge"
                  maxLength={140}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="steps" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Steps/Day #*
                </label>
                <input
                  type="number"
                  id="steps"
                  defaultValue={5000}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Start Date*
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  End Date*
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Special Code*
                </label>
                <input
                  type="text"
                  id="code"
                  placeholder="Happy2025"
                  maxLength={10}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md">
                Create Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
