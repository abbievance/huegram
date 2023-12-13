import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import HueObject from '../HueObject'

interface Props {
  hue: HueObject;
  toggleLike?: (id:number) => void;
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

  const adjustBackground = (post: HueObject) => {
    const r_num = Number("0x" + post.color.slice(1, 3));
    const g_num = Number("0x" + post.color.slice(3, 5));
    const b_num = Number("0x" + post.color.slice(5, 7));

    const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

    const text_color = hue_intensity > 186 ? "#000000" : "#FFFFFF";

    console.log(typeof(text_color))

    if(text_color == "#000000"){
      return "gray-900"
    }
    if(text_color == "#FFFFFF"){
      return "slate-200"
    }
  }

  const adjustTextOnBackground = (backgroundColor : string) => {
    if (backgroundColor == "bg-slate-200"){
      return "black";
    }
    if (backgroundColor == "bg-gray-900"){
      return "white";
    }
  }

  return (
    <div
      className="flex flex-col sm:h-64 h-56 max-h-full aspect-square rounded-3xl text-center justify-between items-center shadow-xl hover:shadow-2xl  transition-all cursor-pointer mb-2" onDoubleClick={() => props.toggleLike && props.toggleLike(props.hue.id)}
      style={{ backgroundColor: props.hue.color }}
    >
      <p className={`text-${adjustTextColor(props.hue)} mt-3 mr-3 text-2xl opacity-80 ml-auto cursor-pointer`} onClick={() => props.toggleLike && props.toggleLike(props.hue.id)}>{props.hue.isLiked ? <span><FaHeart /></span> : <span><FaRegHeart /></span>}</p>
      <p className={`text-${adjustTextColor(props.hue)} text-2xl opacity-80`}>{props.hue.color}</p>


      <div className={`bg-${adjustBackground(props.hue)} text-${adjustTextOnBackground(`bg-${adjustBackground(props.hue)}`)} flex w-full text-center justify-between p-4 rounded-b-2xl`}>
        <p className="text-xl">{props.hue.username}</p>
        <div className="flex  items-center">
        <p className="text-xl">{props.hue.likes}</p>
        <button className="text-lg ml-1" style={{color: props.hue.color}}><FaHeart /></button>
        </div>

      </div>
    </div>
  );
};

export default Hue;
