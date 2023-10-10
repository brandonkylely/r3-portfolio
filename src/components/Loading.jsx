import { useProgress, Html } from "@react-three/drei";
import "./Loading.css";

export default function Loading() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html wrapperClass ="itimFont" center><div className="lds-facebook">
  <div></div><div></div><div></div>
</div>
<br/>
{Math.round(progress)} % Loaded</Html>;
}
