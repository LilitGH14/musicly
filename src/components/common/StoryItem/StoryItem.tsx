import { imageLoader } from "@/hooks/ImageLoader";
import Link from "next/link";
import Image from "next/image";
import blogBgImage from "../../../../public/assets/img/blog/story.jpg";

type StoryItemType = {
  id: string;
  date: string;
  username: string;
  title: string;
};
const StoryItem = ({ id, date, username, title }: StoryItemType) => {
  return (
    <Link href={`/blog-details/${id}`}>
      <div className="ms-event3-item mb-25">
        <div className="ms-event3-img ms-overlay10 fix ms-br-15 p-relative zindex-10">
          <Image
            src={blogBgImage}
            loader={imageLoader}
            placeholder="blur"
            loading="lazy"
            alt="event image"
          />
          <span className="ms-event3-date">{date}</span>
          <div className="ms-event3-content">
            <div className="ms-event3-location-wrap">
              <div className="ms-event3-location">{username}</div>
            </div>
            <h3 className="ms-event3-title ms-title-border">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StoryItem;
