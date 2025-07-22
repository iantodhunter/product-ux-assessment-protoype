interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" onClick={handleBackdropClick}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
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