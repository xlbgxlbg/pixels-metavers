import { useHistory } from "react-router-dom";

export const Merchants = () => {
  const history = useHistory()
  
  return (
    <div className="border m-4 p-4 card" style={{ boxShadow: "5px 5px 10px rgba(225,225,225,0.3)" }}>
      <div className="mb-2 flex justify-between">
        <div>热门商品</div>
        <div className="cursor-pointer hover:text-red-500" onClick={() => { history.push("/mall") }}>查看更多</div>
      </div>
    </div>
  );
};