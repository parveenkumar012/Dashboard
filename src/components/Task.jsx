import React from "react";
// import { Badge, Card, CardHeader, CardContent, CardFooter } from "@shadcn/ui";
import { CheckCircle, Clock, AlertTriangle, Calendar, Paperclip, CircleCheck, MessagesSquare } from "lucide-react"; // Using Lucide icons for similar icons
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
export function TaskCard({ title, status, startDate, endDate, applicableCards, metrics , isExpand }) {
  const statusStyles = {
    OVERDUE: "bg-[#FFF0F8] text-[#C11574] hover:bg-[#FFF0F8]",
    PENDING: "bg-[#FFF9EC] hover:bg-[#FFF9EC] text-[#F0AF1D]",
    DONE: "bg-transparent text-[#027A48] hover:bg-transparent",
  };
  const circleStyles = {
    OVERDUE: "bg-[#C11574]",
    PENDING: "bg-[#F0AF1D]",
    DONE: "bg-[#027A48]",
  };
  const BoxStyles = {
    DONE: "bg-[#E6F9F1] border-[#027A48]",
  };

  const DateStyles = {
    OVERDUE: "text-[#C11574]",
  };

  return (
    <Card className={`shadow-sm border w-[33.33%] p-[10px] ${BoxStyles[status]}`}>
      <CardHeader className="flex flex-row p-0 justify-between items-center mb-[10px]">
        <Badge className={`text-[10px] font-normal px-[7px] py-[2px] shadow-none rounded-full ${statusStyles[status]} flex items-center gap-x-[7px]`}>
          <span className={`w-[8px] h-[8px] flex ${circleStyles[status]} rounded-full`}></span>{status}
        </Badge>
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-x-[5px]">
        <Calendar size={16}/>
          <span className={`text-[11px] ${DateStyles[status]}`}>{startDate} - {endDate}</span>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Metrics Section */}
        <div className="flex items-center text-gray-500 space-x-4 ">
                <div className="flex items-center space-x-1">
                    <Paperclip className='text-[#667085]' size={16} />
                    <span className='text-[11px] text-[#1B1B1B]'>2</span>
                </div>
                <div className="flex items-center space-x-1">
                    <CircleCheck className='text-[#667085]' size={16} />
                    <span className='text-[11px] text-[#1B1B1B]'>1/4</span>
                </div>
                <div className="flex items-center space-x-1">
                    <MessagesSquare className='text-[#667085]' size={16} />
                    <span className='text-[11px] text-[#1B1B1B]'>34</span>
                </div>
            </div>

        {/* Date Range */}
        

        {/* Applicable Cards */}
        {(isExpand==false) && (
          <div className="border-[#DADADA] border-t-[1px] pt-[10px] mt-[10px]">
              <p className="text-[9px] text-[#667085] uppercase mb-[5px]">Applicable cards</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs bg-gray-100 text-gray-700 bg-[#1B1B1B] text-[10px] text-white rounded-[5px] px-[9px] py-[1px]">
                  Packaging
                </Badge>
                <Badge className="text-xs bg-gray-100 text-gray-700 bg-[#1B1B1B] text-[10px] text-white rounded-[5px] px-[9px] py-[1px]">
                  Packaging
                </Badge>
                <Badge className="text-xs bg-gray-100 text-gray-700 bg-[#1B1B1B] text-[10px] text-white rounded-[5px] px-[9px] py-[1px]">
                  Packaging
                </Badge>
                <Badge className="text-xs bg-gray-100 text-gray-700 text-[10px] text-[#667085] px-[5px] py-[1px] rounded-[5px] bg-[#F6F6F6]">
                  2 More
                </Badge>
              </div>
            </div>
          )}
          {(isExpand==true) && (
             <div className="border-[#DADADA] border-t-[1px] pt-[10px] mt-[10px]">
                <div className="flex flex-wrap gap-2">
                      {/* Materials Section */}
                  <div className="mb-4">
                    <div className="flex items-center bg-gray-100 rounded-md p-2 text-sm font-semibold text-gray-700">
                      
                      Materials
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <span>45 Hug * 45 Hug</span>
                      {/* Repeatable Item */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 text-sm text-gray-600 px-3 py-2 rounded-md border border-gray-200 flex justify-center items-center"
                        >
                          PP Solid - Green Cap
                          <span className="ml-2 text-yellow-500">●</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accessories Section */}
                  <div>
                    <div className="flex items-center bg-gray-100 rounded-md p-2 text-sm font-semibold text-gray-700">
                      Accessories
                    </div>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {/* Repeatable Item */}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-gray-50 text-sm text-gray-600 px-3 py-2 rounded-md border border-gray-200 flex justify-center items-center"
                          >
                            PP Solid - Green Cap
                            <span className="ml-2 text-yellow-500">●</span>
                          </div>
                        ))}
                      </div>
                  </div>
                </div>
             </div>
          )}
      </CardContent>

    </Card>
  );
}

// Default Props
TaskCard.defaultProps = {
  title: "Task Title",
  status: "PENDING",
  startDate: "Mar 30",
  endDate: "Apr 13",
  isExpand: false,
  applicableCards: ["Packaging", "Inspection"],
  metrics: {
    approved: 2,
    pending: 4,
    issues: 1,
    days: 34,
  },
};
