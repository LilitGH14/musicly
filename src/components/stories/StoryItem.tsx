import { imageLoader } from "@/hooks/ImageLoader";
import Link from "next/link";
import Image from "next/image";
import blogBgImage from "../../../public/assets/img/blog/story.jpg";

type StoryItemType = {
  dict: { [key: string]: string };
  id: string;
  date: string;
  username: string;
  title: string;
};
const StoryItem = ({ dict, id, date, username, title }: StoryItemType) => {
  return (
    <Link href={`/story-details/${id}`}>
      <div className="bb-story-item mb-25">
        <div className="bb-story-img ms-overlay10 fix ms-br-15 p-relative zindex-10">
          <Image
            src={blogBgImage}
            loader={imageLoader}
            placeholder="blur"
            loading="lazy"
            alt={dict?.Story_img}
          />
          <span className="bb-story-date">{date}</span>
          <div className="bb-story-content">
            <div className="bb-story-location-wrap">
              <div className="bb-story-location">{username}</div>
            </div>
            <h3 className="bb-story-title ms-title-border">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StoryItem;
