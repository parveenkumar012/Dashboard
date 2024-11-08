import React from 'react';
import { MoreHorizontal, Eye, Link, MessageCircle, Layers, EllipsisVertical, Paperclip, CircleCheck, MessagesSquare, Inbox   } from 'lucide-react';

const ReviewCard = ({ tag, title, viewCount, progress, commentCount, cardCount }) => {
    return (
        <div className="w-[33.33%] bg-[#F1F5F9] rounded-lg shadow-md p-4 space-y-[10px] relative">
            {/* Tag and More Options */}
            <div className='flex items-center justify-between'>
            <div className="flex justify-between items-center">
                <span className="bg-white text-[#667085] text-[12px] px-2 py-1 text-xs rounded">{tag}</span>
            </div>
            <div className='flex'>
            <button className="text-blue-600 text-sm text-[#4F46E5] border border-[#4F46E5] bg-white rounded-[3px] py-[2px] px-[6px]">
                View all
            </button>
            <button className="p-1 ms-[10px] text-gray-500 hover:text-gray-700">
                    <EllipsisVertical size={16} />
                </button>
            </div>
</div>
            {/* Title */}
            <h3 className="text-gray-800 text-[16px] font-medium leading-[16px]">{title}</h3>

            {/* View All Button */}
            

            {/* Icons and Counts */}
            <div className="flex items-center text-gray-500 space-x-4 mt-4">
                <div className="flex items-center space-x-1">
                    <Paperclip className='text-[#667085]' size={16} />
                    <span className='text-[11px] text-[#1B1B1B]'>{viewCount}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <CircleCheck className='text-[#667085]' size={16} />
                    <span className='text-[11px] text-[#1B1B1B]'>{progress}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <MessagesSquare className='text-[#667085]' size={16} />
                    <span className='text-[11px] text-[#1B1B1B]'>{commentCount}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Inbox className='text-[#667085]' size={16} />
                    <span className='text-[11px] text-[#1B1B1B]'>{cardCount}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
