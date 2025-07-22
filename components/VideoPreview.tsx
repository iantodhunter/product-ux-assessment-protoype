import { useState } from 'react';
import { PlayIcon } from './icons/AppTypeIcons';

interface VideoPreviewProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  videoUrl?: string;
  className?: string;
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content - 75% of screen */}
      <div className="relative bg-white rounded-2xl p-6 w-[75vw] h-[75vh] flex flex-col shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10 bg-white/90 rounded-full p-2 hover:bg-white/100"
        >
          <span className="material-symbols-outlined text-[24px]">
            close
          </span>
        </button>
        
        {/* Video Title */}
        <h3 className="font-hexagon text-[28px] text-[#121623] font-medium mb-4 pr-16">
          {title}
        </h3>
        
        {/* Video Player - Takes remaining space */}
        <div className="flex-1 bg-black rounded-xl overflow-hidden">
          {videoUrl && !videoUrl.includes('example.com') ? (
            <video 
              controls 
              autoPlay
              className="w-full h-full object-contain"
              poster=""
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <span className="material-symbols-outlined text-[64px] mb-4 block">
                  construction
                </span>
                <div className="font-hexagon text-[32px]">Coming Soon</div>
                <div className="font-hexagon text-[18px] text-gray-300 mt-2">
                  Video content is being prepared
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function VideoPreview({ videoId, title, thumbnail, videoUrl, className = "" }: VideoPreviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Create a proper thumbnail display
  const renderThumbnail = () => {
    if (videoUrl && !videoUrl.includes('example.com')) {
      // For actual video files, show video element with controls disabled
      return (
        <video 
          className="w-full h-full object-cover"
          muted
          preload="metadata"
        >
          <source src={`${videoUrl}#t=0.5`} type="video/mp4" />
        </video>
      );
    } else {
      // For placeholder/missing videos, show "Coming Soon"
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="text-center">
            <span className="material-symbols-outlined text-[48px] text-gray-400 mb-2 block">
              construction
            </span>
            <div className="font-hexagon text-[18px] text-gray-600">Coming Soon</div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className={`relative cursor-pointer group ${className}`}>
        {/* Video Thumbnail */}
        <div className="bg-[#e6eaf0] h-[162.516px] w-[270px] rounded-xl overflow-hidden">
          {renderThumbnail()}
        </div>
        
        {/* Play Button Overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          onClick={handlePlayClick}
        >
          <div className="bg-black/70 rounded-full p-3 transition-all duration-200 group-hover:bg-black/80 group-hover:scale-110">
            <div className="text-white">
              <PlayIcon />
            </div>
          </div>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
      </div>

      {/* Video Modal - Rendered at DOM level */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={videoUrl || ''}
        title={title}
      />
    </>
  );
}