import React from "react";
import {MdOutlineCheckCircle} from 'react-icons/md'

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-950 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-pink-600 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[3rem]">
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[100%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">100%</p>
                </div>
              </div>
            </div>

             {/* skills 2 */}
             <div className="p-4  w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[95%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">95%</p>
                </div>
              </div>
            </div>

             {/* skills 3*/}
             <div className="p-4  w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JAVASCRIPT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[80%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">80%</p>
                </div>
              </div>
            </div>

             {/* skills 4*/}
             <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TYPESCRIPT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[80%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">80%</p>
                </div>
              </div>
            </div>

             {/* skills 5*/}
             <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    BOOTSTRAP
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[90%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">90%</p> 
                </div>
              </div>
            </div>

             {/* skills 6*/}
                <div className="p-4  w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TAILWIND CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[100%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">100%</p>
                </div>
              </div>
            </div>

             {/* skills 7*/}
             <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NEXT.JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[90%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">90%</p>
                </div>
              </div>
            </div>
             {/* skills 8*/}
             <div className="p-4  w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CIT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[90%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">90%</p>
                </div>
              </div>
            </div>
             {/* skills */}
             <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-600 text-white flex-shrink-0">
                  <MdOutlineCheckCircle className="text-2xl font-bold"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    GRAPHIC DESIGNING
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-slate-300 rounded-xl relative">
                    <div className="absolute bg-pink-600 h-1 w-[90%] rounded-xl"></div>
                  </div>
                  <p className="font-bold text-right">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
