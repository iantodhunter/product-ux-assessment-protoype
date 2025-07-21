import { PlayIcon } from './icons/AppTypeIcons';

interface VideoPreviewProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

export function VideoPreview({ videoId, title, thumbnail, className = "" }: VideoPreviewProps) {
  const handlePlayClick = () => {
    // In a real implementation, this would open a modal or navigate to video
    console.log(`Playing video: ${videoId} - ${title}`);
  };

  return (
    <div className={`relative cursor-pointer group ${className}`} onClick={handlePlayClick}>
      {/* Video Thumbnail */}
      <div className="bg-[#e6eaf0] h-[162.516px] w-[270px] rounded-xl overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-[#646e78] text-sm">Video Preview</div>
          </div>
        )}
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