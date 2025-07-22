import { PlayIcon } from './icons/AppTypeIcons';

interface VideoPreviewProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  videoUrl?: string;
  className?: string;
  onPlayClick: (videoUrl: string, title: string) => void;
}

export function VideoPreview({ 
  videoId, 
  title, 
  thumbnail, 
  videoUrl, 
  className = "",
  onPlayClick 
}: VideoPreviewProps) {

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card selection when clicking video
    e.preventDefault();
    onPlayClick(videoUrl || '', title);
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
    <div 
      className={`relative cursor-pointer group ${className}`}
      onClick={handlePlayClick}
    >
      {/* Video Thumbnail */}
      <div className="bg-[#e6eaf0] h-[162.516px] w-[270px] rounded-xl overflow-hidden">
        {renderThumbnail()}
      </div>
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/70 rounded-full p-3 transition-all duration-200 group-hover:bg-black/80 group-hover:scale-110">
          <div className="text-white">
            <PlayIcon />
          </div>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
    </div>
  );
}