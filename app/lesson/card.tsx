import { useAudio } from "react-use";
import { useCallback } from "react";

type CardProps = {
  id: number;
  text: string;
  imageSrc: string | null;
  audioSrc: string | null;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status?: "correct" | "wrong" | "none";
  disabled?: boolean;
  type: string; // burada type'ı daha spesifik yapabilirsin
};

export const Card = ({
  text,
  imageSrc,
  audioSrc,
  shortcut,
  selected,
  onClick,
  status,
  disabled,
  type,
}: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, _, controls] = useAudio({ src: audioSrc || "" });

  const handleClick = useCallback(() => {
    if (disabled) return;

    // Ses çalmaya başlasın
    if (controls && typeof controls.play === "function") {
      void controls.play();
    }

    onClick();
  }, [disabled, onClick, controls]);

  return (
    <div onClick={handleClick} className="your-classname">
      {audio}
      {imageSrc && (
        <div className="image-container">
          <img src={imageSrc} alt={text} />
        </div>
      )}

      <div>
        <p>{text}</p>
        <div>{shortcut}</div>
      </div>
    </div>
  );
};
