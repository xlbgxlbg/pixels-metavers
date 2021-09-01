import { useState, ReactNode, CSSProperties } from "react";
import { map } from "lodash";
import { useHistory } from "react-router-dom";
import { LeftCircleOutlined } from "@ant-design/icons"

const memuList = [
  {
    name: "诗词",
    route: "/website/poetry/list"
  }, {
    name: "博客",
    route: "/website/article/list"
  },
]

export const HomeHeader = () => {
  const [memuOpen, setMemuOpen] = useState(false)
  const history = useHistory()

  return (
    <>
      {/* 页头 */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <nav className="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div>
                <img className="h-8 w-auto rounded-full sm:h-10" src="https://portrait.gitee.com/uploads/avatars/user/1614/4843174_xiangzhengfeng_1578975544.png!avatar200" alt=""/>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" onClick={() => { setMemuOpen(true) }} className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:text-indigo-500" aria-expanded="false">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {map(memuList, (item, i) => <div className="font-medium text-gray-100 hover:text-gray-500" key={i} onClick={() => { history.push(item?.route) }}>{item?.name}</div>)}
          </div>
        </nav>
      </div>

      {memuOpen && <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto rounded-full" src="https://portrait.gitee.com/uploads/avatars/user/1614/4843174_xiangzhengfeng_1578975544.png!avatar200" alt="" />
            </div>
            <div className="-mr-2">
              <button type="button" onClick={() => { setMemuOpen(false) }} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {map(memuList.slice(0, 4), (item, i) => <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" key={i} onClick={() => { history.push(item?.route) }}>{item?.name}</div>)}
          </div>
          <div className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
            {memuList[4]}
          </div>
        </div>
      </div>}
    </>
  );
};

export const PagesHeader = ({ children, left, leftRoute, right, css }: { children: ReactNode; left?: ReactNode; leftRoute?: string, right?: ReactNode; css?: CSSProperties }) => {
  const history = useHistory()

  return (
    <div className="fixed top-0 p-2 cursor-pointer z-50 w-full h-10 flex justify-between" style={{ ...css }}>
      <div className="absolute">{left}</div>
      {!left && <div onClick={() => { leftRoute ? history.push(leftRoute) : history.goBack() }}>
        <LeftCircleOutlined className="text-xl" />
      </div>}
      {children}
      <div className="absolute right-2">{right}</div>
    </div>
  );
};