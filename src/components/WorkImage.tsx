import type { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  link?: string;
  focus?: string;
  /** code-drawn visual replacing the photo */
  art?: ReactNode;
}

const WorkImage = ({ image, alt, link, focus, art }: Props) => {
  const img = (
    <>
      {link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {art ?? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          style={focus ? { objectPosition: focus } : undefined}
        />
      )}
    </>
  );

  return (
    <div className="work-image">
      {link ? (
        <a
          className="work-image-in"
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={alt ? `Open ${alt}` : undefined}
        >
          {img}
        </a>
      ) : (
        <div className="work-image-in static">{img}</div>
      )}
    </div>
  );
};

export default WorkImage;
