import { useProgress, Html } from "@react-three/drei"

export default function Loading() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % Loaded</Html>
}