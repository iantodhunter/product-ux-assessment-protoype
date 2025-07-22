export function LoadingScreen() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#f8fafd]">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#2196f3] border-t-transparent rounded-full mx-auto mb-4"></div>
        <div className="font-hexagon text-[18px] text-[#646e78]">
          Loading content...
        </div>
      </div>
    </div>
  );
}