import { PersonCenter } from "./PersonCenter";
import { Avatar } from "./Avatar";
import { Merchants } from "./Merchants";
import { useWeb3js } from "../api/hook";
import { string16to64 } from "../helpers/utilities";

export const PixelsMetaverse = () => {
  const { accounts } = useWeb3js()

  return (
    <div className="flex justify-between bg-transparent flex-1 mt-4">
      <PersonCenter />
      <Avatar />
      <Merchants />
    </div>
  )
}