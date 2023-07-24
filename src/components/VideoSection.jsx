const VideoSection = () => {
  return (
    <div>
      <div
        className="relative mb-3 overflow-hidden border border-gray-400 rounded font-opensans"
        style={{ paddingTop: "1%" }}
      >
        <div className="p-4">
          <label className="block mb-2 text-lg" htmlFor="video-link">
            Video
          </label>
          <input
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full rounded-md input input-bordered focus:border-gray-700"
            type="text"
            defaultValue="https://www.youtube.com/embed/dQw4w9WgXcQ"
            id="video-link"
            readOnly
            placeholder="Add a youtube and vimeo link"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
