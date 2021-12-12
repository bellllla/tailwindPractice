import { linkDatas } from "../datas/linkDatas";

/* bg, text, 등등의 컬러 50 부터 시작
 폰트 font-sans, font-serif ..
 shadow-lg, shadow-xl .. 등등 
 colors, font-family 등등의 세부적인 custom 은 
 module.export theme 부분에서 조정 가능하다.
 */

export default function Home() {
  return (
    <div
      className="container
      p-10 border
      "
    >
      <h1 className="
      capitalize
      text-4xl
      text-sky-500 ">tailwind with next.js</h1>
      <h2>the first practice tailwind with next.js</h2>

      <div className="grid gap-5 grid-cols-3 my-10">
        {linkDatas.map((links) => {
          return (
            <>
              <a
                key={links.id}
                href={`/${links.link}`}
                className={`
                  text-gray-500
                  bg-sky-${links.color} 
                  text-lg
                  p-4 rounded w-50
                  text-center
                  shadow-lg

                  hover:text-black 
                  hover:bg-sky-${Number(links.color) + 100} 
                  hover:-translate-y-2 transition-all 
                  `}
              >
                {" "}
                {links.link} link
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
}
