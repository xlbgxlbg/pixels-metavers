import { PersonCenter } from "./PersonCenter";
import { Avatar } from "./Avatar";
import { Merchants } from "./Merchants";

export const PixelsMetaverse = () => {

  return (
    <div className="flex justify-between bg-transparent flex-1 mt-4">
      <PersonCenter />
      <Avatar />
      <Merchants />
    </div>
  )
}