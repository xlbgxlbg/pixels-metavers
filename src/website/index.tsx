import earth from "./image/earth.png"
import { HomeHeader } from "./home/Header";

export const Website = () => {

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative w-screen h-full min-h-screen mx-auto bg-no-repeat md:bg-contain bg-cover bg-gray-900" style={{ backgroundImage: "url(https://github.githubassets.com/images/modules/site/home/hero-glow.svg)" }}>
        <HomeHeader />

        {/* 首页第一屏 */}
        <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-8 lg:px-8 xl:mt-8">
          <div className="sm:text-center lg:text-left lg:mt-20">
            <h1 className="text-2xl tracking-tight font-extrabold text-gray-200 sm:text-4xl">
              <span className="block xl:inline md:mb-4">欢迎来到，我的世界！</span>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-500 xl:inline sm:text-4xl animate-pulse">Hello World!</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:mt-12">
              这里是罗克佳华成都公司，我上班的地方，欢迎来到我的世界，娇贵的小公主！
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start lg:mt-12">
              <div className="rounded-md shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get started
              </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 hover:text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Live demo
                  </div>
              </div>
            </div>
          </div>
        </main>

        {/* 地球和宇航员 */}
        <div className="relative lg:-top-30 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-screen w-full object-cover" src={earth} alt="" />
          <img className="absolute right-0 -bottom-20 h-72 w-50 z-10 sm:h-96 animate-bounce" src={"https://github.githubassets.com/images/modules/site/home/astro-mona.webp"} alt="" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" className="absolute w-full z-1" style={{ bottom: "-1px" }}><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path></svg>
      </div>

      {/* 第二屏 */}
      <div className="relative min-h-96 border border-gray-200 mt-20 rounded-md m-4 lg:flex lg:justify-between">
        <div className="min-h-60 text-center lg:text-left p-4 lg:w-1/2">
          <h1 className="text-xl tracking-tight font-extrabold text-gray-200 md:text-3xl mt-2">
            <span className="block xl:inline" style={{ color: "#627597" }}>Build like the best with GitHub Enterprise</span>
          </h1>
          <p className="mt-1 text-base text-gray-500 sm:mt-5 sm:text-lg md:m-0 md:text-xl lg:mx-0 xl:mt-6">
            Take collaboration to the next level with security and administrative features built for teams.
          </p>
          <div className="mt-2 sm:flex sm:justify-center lg:justify-start xl:mt-6">
            <div className="rounded-md shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 border-indigo-700 hover:bg-indigo-800 hover:text-white md:py-3 md:text-lg md:px-10">
                Get started
              </div>
            </div>
          </div>
        </div>
        <img className="w-full h-36 rounded-md lg:w-1/2 lg:h-full lg:absolute lg:bottom-0 lg:right-0" src="https://github.githubassets.com/images/modules/site/home/enterprise-city-w-logos.webp" alt="" />
      </div>

      <audio
        id={`audio${1}`}
        preload={"auto"}
        src={"https://isure.stream.qqmusic.qq.com/C400000wowPd0ggrJX.m4a?guid=4540103468&vkey=4B461D1C66C44122F2A8A558B71D032050F1A73A9E40594FB8A2ED21ECDBE60B6A9A5D1C51A4F746EE501051E044870F287744E0AF26AD35&uin=0&fromtag=66"}
      >
        <track src={"https://isure.stream.qqmusic.qq.com/C400000wowPd0ggrJX.m4a?guid=4540103468&vkey=4B461D1C66C44122F2A8A558B71D032050F1A73A9E40594FB8A2ED21ECDBE60B6A9A5D1C51A4F746EE501051E044870F287744E0AF26AD35&uin=0&fromtag=66"} kind="captions" />
        您的浏览器不支持 audio 标签。
      </audio>



      {/* iPhone */}
      <div>
        <div className="mx-auto w-11/12 p-4 sm:max-w-xs" style={{ background: "#040e22", borderRadius: "40px" }}>
          <div className="relative">
            <img src="https://github.githubassets.com/images/modules/site/home/iphone-notch.svg" className="w-full absolute top-0 right-0 left-0 " alt="iPhone notch" loading="lazy" />
            <video loop muted autoPlay className="w-full rounded-3xl" data-threshold="0" preload="none" poster="https://github.githubassets.com/images/modules/site/home/gh-mobile.png">
              <source type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" src="https://github.githubassets.com/images/modules/site/home/gh-mobile.h264.mp4" />
            </video>

          </div>
        </div>
      </div>

    </div>
  );
};