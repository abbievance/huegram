import { CiHeart } from "react-icons/ci";

interface HueObject {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
}

const Hue = (props: Props) => {

  const adjustTextColor = (post: HueObject) => {
    const r_num = Number("0x" + post.color.slice(1, 3));
    const g_num = Number("0x" + post.color.slice(3, 5));
    const b_num = Number("0x" + post.color.slice(5, 7));

    const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

    const text_color = hue_intensity > 186 ? "#000000" : "#FFFFFF";

    console.log(typeof(text_color))

    if(text_color == "#000000"){
      return "black"
    }
    if(text_color == "#FFFFFF"){
      return "white"
    }
  }

  return (
    <div
      className="flex flex-col h-64 max-h-full aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.color }}
    >
      <p className={`text-${adjustTextColor(props.hue)} text-4xl opacity-80 ml-auto cursor-pointer`}><CiHeart /></p>
      <p className={`text-${adjustTextColor(props.hue)} text-2xl opacity-80`}>{props.hue.color}</p>


      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
