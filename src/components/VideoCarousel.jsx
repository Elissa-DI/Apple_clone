import { hightlightsSlides } from "../constants"

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list) => (
            <div key={list.id} id='slider' className="sm:pr-20 pr-10">
                <div>

                </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default VideoCarousel