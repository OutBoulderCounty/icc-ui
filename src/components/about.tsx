import React from "react"
import Button from "./button"

const aboutData = [
  {
    title: "Community Informed",
    content:
      "A resource informed, built, and utilized  by our LGBTQ+ communities.",
    icon: (
    //   <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    // </svg>
      <svg
        className="h-10 w-10 lg:h-20 lg:w-20"
        x="0px"
        y="0px"
        viewBox="0 0 172 172"
      >
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#ffffff">
            <path d="M31.02719,13.76c-0.86495,-0.01703 -1.70456,0.29242 -2.35156,0.86672l-20.64,18.34891c-0.96631,0.80302 -1.41802,2.06895 -1.17833,3.3023c0.23969,1.23335 1.13267,2.23794 2.32941,2.62059c1.19674,0.38264 2.5069,0.08246 3.41767,-0.78304l18.37578,-16.32656l51.57984,45.12984v43.16125c-0.01754,1.24059 0.63425,2.39452 1.7058,3.01993c1.07155,0.62541 2.39684,0.62541 3.46839,0c1.07155,-0.62541 1.72335,-1.77935 1.7058,-3.01993v-43.16125l51.57985,-45.12984l18.37578,16.32656c0.91077,0.86552 2.22094,1.1657 3.41768,0.78306c1.19675,-0.38264 2.08973,-1.38724 2.32942,-2.6206c0.23969,-1.23336 -0.21203,-2.49929 -1.17836,-3.30231l-20.64,-18.34891c-1.29654,-1.14913 -3.24529,-1.15488 -4.54859,-0.01344l-52.77578,46.17797l-52.77578,-46.17797c-0.60903,-0.53424 -1.38706,-0.83641 -2.19703,-0.85328zM32.68,55.04c-6.02,0 -10.97282,2.38136 -14.18328,5.99313c-3.21046,3.61176 -4.73672,8.29243 -4.73672,12.92687c0,4.63444 1.52626,9.31511 4.73672,12.92687c3.21046,3.61177 8.16328,5.99313 14.18328,5.99313c6.02,0 10.97282,-2.38136 14.18328,-5.99313c3.21046,-3.61176 4.73672,-8.29243 4.73672,-12.92687c0,-4.63444 -1.52626,-9.31511 -4.73672,-12.92687c-3.21046,-3.61177 -8.16329,-5.99313 -14.18328,-5.99313zM139.32672,55.04c-6.02,0 -10.97282,2.38136 -14.18328,5.99313c-3.21046,3.61176 -4.73672,8.29243 -4.73672,12.92687c0,4.63444 1.52626,9.31511 4.73672,12.92687c3.21046,3.61177 8.16329,5.99313 14.18328,5.99313c6.02,0 10.9661,-2.38136 14.17656,-5.99313c3.21046,-3.61176 4.74344,-8.29243 4.74344,-12.92687c0,-4.63444 -1.53298,-9.31511 -4.74344,-12.92687c-3.21046,-3.61177 -8.15656,-5.99313 -14.17656,-5.99313zM32.68,61.92c4.3,0 7.08718,1.48864 9.03672,3.68187c1.94954,2.19324 3.00328,5.25257 3.00328,8.35813c0,3.10556 -1.05374,6.16489 -3.00328,8.35813c-1.94954,2.19323 -4.73672,3.68187 -9.03672,3.68187c-4.3,0 -7.08718,-1.48864 -9.03672,-3.68187c-1.94954,-2.19324 -3.00328,-5.25257 -3.00328,-8.35813c0,-3.10556 1.05374,-6.16489 3.00328,-8.35813c1.94954,-2.19323 4.73672,-3.68187 9.03672,-3.68187zM139.32672,61.92c4.3,0 7.08718,1.48864 9.03672,3.68187c1.94954,2.19324 3.00328,5.25257 3.00328,8.35813c0,3.10556 -1.05374,6.16489 -3.00328,8.35813c-1.94954,2.19323 -4.73672,3.68187 -9.03672,3.68187c-4.3,0 -7.0939,-1.48864 -9.04344,-3.68187c-1.94954,-2.19324 -2.99656,-5.25257 -2.99656,-8.35813c0,-3.10556 1.04702,-6.16489 2.99656,-8.35813c1.94954,-2.19323 4.74344,-3.68187 9.04344,-3.68187zM27.52,99.76c-11.35759,0 -20.64,9.28241 -20.64,20.64v34.4c-0.01754,1.24059 0.63425,2.39452 1.7058,3.01993c1.07155,0.62541 2.39684,0.62541 3.46839,0c1.07155,-0.62541 1.72335,-1.77935 1.7058,-3.01993v-34.4c0,-7.63809 6.12191,-13.76 13.76,-13.76c4.08304,0 7.70784,1.76016 10.22594,4.56203c0.02421,0.02726 0.04885,0.05414 0.07391,0.08062l17.25375,17.96594c0.75904,0.79084 1.84952,1.17263 2.93609,1.02797l22.13828,-2.94953c2.8619,-0.37684 5.42237,1.57401 5.805,4.43437c0.38136,2.86858 -1.56597,5.41485 -4.43437,5.79828l-25.8,3.44l0.02015,-0.00672c-0.2235,0.02884 -0.47107,0.04703 -0.69875,0.04703c-1.0067,0 -1.99287,-0.29715 -2.83531,-0.85328v0.00672c0.45711,0.30241 -0.14988,-0.11087 -0.5039,-0.36281c-0.35403,-0.25195 -0.84877,-0.60776 -1.43781,-1.02797c-0.87226,-0.62225 -2.03758,-1.45265 -3.16453,-2.2575c-0.24103,-0.23345 -0.51492,-0.43037 -0.81297,-0.58453c-0.1063,-0.07592 -0.18926,-0.13229 -0.29562,-0.20828c-3.0881,-2.20591 -6.14766,-4.39406 -6.14766,-4.39406c-1.54735,-1.10578 -3.69813,-0.74781 -4.8039,0.79953c-1.10578,1.54735 -0.74781,3.69813 0.79953,4.8039c0,0 2.7527,1.962 5.44219,3.88344v13.95485c-0.01754,1.24059 0.63425,2.39452 1.7058,3.01993c1.07155,0.62541 2.39684,0.62541 3.46839,0c1.07155,-0.62541 1.72335,-1.77935 1.7058,-3.01993v-9.04344c0.06336,0.04472 0.06683,0.05446 0.2486,0.17469c1.97147,1.30147 4.28066,1.98875 6.6314,1.98875c0.52224,0 1.04561,-0.03301 1.57219,-0.10078c0.00672,0.00002 0.01344,0.00002 0.02016,0l25.8,-3.44c6.55031,-0.87561 11.21096,-6.9747 10.34015,-13.52485c0,-0.00224 0,-0.00448 0,-0.00672c-0.87654,-6.5513 -6.97506,-11.20171 -13.51813,-10.34015c-0.00224,0 -0.00448,0 -0.00672,0l-20.41828,2.7211l-15.97047,-16.62891c-3.77006,-4.19509 -9.26707,-6.83969 -15.3389,-6.83969zM144.48,99.76c-5.84112,0 -11.43284,2.49346 -15.265,6.75906l-16.04437,16.70281l-17.36125,-2.31125c1.6512,2.1328 2.87127,4.64158 3.48703,7.41078l14.69391,1.95516c1.07672,0.1376 2.17241,-0.23333 2.93609,-1.02797l17.32766,-18.04656c2.60408,-2.90336 6.33186,-4.56203 10.22594,-4.56203c7.58864,0 13.76,6.17136 13.76,13.76v34.4c0,1.90232 1.53768,3.44 3.44,3.44c1.90232,0 3.44,-1.53768 3.44,-3.44v-34.4c0,-11.38296 -9.25704,-20.64 -20.64,-20.64zM134.72437,130.76703c-0.86774,-0.14448 -1.79084,0.04241 -2.56656,0.59797c0,0 -3.30852,2.3588 -6.47688,4.6225c-0.27664,0.14605 -0.53206,0.32914 -0.75922,0.54422c-2.45758,1.75544 -4.90671,3.5105 -5.1264,3.66172c-1.02512,0.67768 -2.24799,0.97497 -3.51391,0.79953l-17.58969,-2.34484c-0.83592,2.38392 -2.13425,4.57552 -3.80953,6.43656l20.48547,2.72781c2.89648,0.39216 5.81591,-0.29541 8.21703,-1.88125c0.00151,-0.001 0.26029,-0.18696 0.26203,-0.18812v9.05687c-0.01754,1.24059 0.63425,2.39452 1.7058,3.01993c1.07155,0.62541 2.39684,0.62541 3.46839,0c1.07155,-0.62541 1.72335,-1.77935 1.7058,-3.01993v-13.96828c1.7642,-1.25795 0.12192,-0.0792 5.43547,-3.87672c1.54456,-1.10424 1.90049,-3.24575 0.79281,-4.79719c-0.55212,-0.76884 -1.36289,-1.2463 -2.23063,-1.39078z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Competency",
    content:
      "Providers share their experience so you know in advance. We believe that a willingness to treat our communities is not the same as competency.",
    icon: (
      <svg
        className="h-10 w-10 lg:h-20 lg:w-20"
        x="0px"
        y="0px"
        viewBox="0 0 172 172"
      >
        <g
       fill="none"
       fillRule="nonzero"
       stroke="none"
       strokeWidth="1"
       strokeLinecap="butt"
       strokeLinejoin="miter"
       strokeMiterlimit="10"
       strokeDasharray=""
       strokeDashoffset="0"
       fontFamily="none"
       fontWeight="none"
       fontSize="none"
       textAnchor="none"
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#ffffff">
            <path d="M75.25,9.40625c-6.04687,0 -11.15313,3.89687 -12.76562,9.40625h-19.48437c-9.675,0 -17.46875,7.79375 -17.46875,17.46875v110.1875c0,9.675 7.79375,17.46875 17.46875,17.46875h86c9.675,0 17.46875,-7.79375 17.46875,-17.46875v-110.1875c0,-9.675 -7.79375,-17.46875 -17.46875,-17.46875h-19.48437c-1.74688,-5.50937 -6.85312,-9.40625 -12.76562,-9.40625zM75.25,17.46875h21.5c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375h-21.5c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375zM43,26.875h19.48438c1.74688,5.50937 6.85313,9.40625 12.76563,9.40625h21.5c6.04688,0 11.15313,-3.89688 12.76563,-9.40625h19.48438c5.24062,0 9.40625,4.16563 9.40625,9.40625v110.1875c0,5.24062 -4.16563,9.40625 -9.40625,9.40625h-86c-5.24063,0 -9.40625,-4.16563 -9.40625,-9.40625v-110.1875c0,-5.24062 4.16562,-9.40625 9.40625,-9.40625zM56.4375,73.90625c-2.28438,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74687,4.03125 4.03125,4.03125h6.71875c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM84.65625,73.90625c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h29.5625c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM56.4375,95.40625c-2.28438,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74687,4.03125 4.03125,4.03125h6.71875c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM84.65625,95.40625c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h29.5625c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM56.4375,115.5625c-2.28438,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74687,4.03125 4.03125,4.03125h6.71875c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM84.65625,115.5625c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h29.5625c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Transparency",
    content:
      " Everything we see, you’ll see; we believe every bit of information helps create accessibility.",
    icon: (
      <svg
        className="h-10 w-10 lg:h-20 lg:w-20"
        x="0px"
        y="0px"
        viewBox="0 0 172 172"
      >
        <g
         fill="none"
         fillRule="nonzero"
         stroke="none"
         strokeWidth="1"
         strokeLinecap="butt"
         strokeLinejoin="miter"
         strokeMiterlimit="10"
         strokeDasharray=""
         strokeDashoffset="0"
         fontFamily="none"
         fontWeight="none"
         fontSize="none"
         textAnchor="none"
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#ffffff">
            <path d="M65.09125,44.15563c-34.45504,9.31208 -59.5694,38.14863 -60.81812,39.60031c-1.11456,1.29 -1.11456,3.19813 0,4.48813c1.462,1.69592 35.48548,40.73723 78.89828,42.39531c-0.36808,-2.2188 -0.6114,-4.47737 -0.6114,-6.79937c0,-3.60512 0.5103,-7.08398 1.38406,-10.42078c-19.9348,-1.07328 -35.7703,-17.5261 -35.78406,-37.72578v-0.01344c0,-13.16832 6.73165,-24.73726 16.93125,-31.52437zM106.90875,44.15563c10.1996,6.78712 16.93125,18.35605 16.93125,31.52437v0.01344c0,2.35984 -0.24564,4.66072 -0.65844,6.90016c0.22016,-0.00344 0.43484,-0.0336 0.65844,-0.0336c13.48824,0 25.45202,6.53396 32.98906,16.56844c6.52568,-5.85488 10.42309,-10.33397 10.89781,-10.88437c1.1008,-1.29 1.1008,-3.19813 0,-4.48813c-1.2384,-1.45168 -26.36308,-30.28823 -60.81812,-39.60031zM86,58.48c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM123.84,89.44c-18.96816,0 -34.4,15.43184 -34.4,34.4c0,18.96816 15.43184,34.4 34.4,34.4c8.24912,0 15.82475,-2.92303 21.75531,-7.78031l20.5325,20.5325l4.86437,-4.86437l-20.5325,-20.5325c4.85728,-5.93056 7.78031,-13.50619 7.78031,-21.75531c0,-18.96816 -15.43184,-34.4 -34.4,-34.4zM123.84,96.32c15.17384,0 27.52,12.34616 27.52,27.52c0,15.17384 -12.34616,27.52 -27.52,27.52c-15.17384,0 -27.52,-12.34616 -27.52,-27.52c0,-15.17384 12.34616,-27.52 27.52,-27.52z"></path>
          </g>
        </g>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <div className="bg-transparent md:transform md:-translate-y-10">
      <div className="relative overflow-hidden max-w-full mx-auto p-4 xl:max-w-5xl lg:max-w-3xl md:max-w-2xl sm:max-w-full sm:p-10 xl:px-20 sm:rounded bg-violet">
        <div
          className="absolute w-full h-full top-0 left-0 bg-contain bg-right-bottom-hidden bg-no-repeat filter blur z-0"
          style={{ backgroundImage: "url('/icons/icon-256x256.png')" }}
        ></div>
        <h2 className="text-4xl pb-1 font-semibold text-white tracking-wider sm:text-5xl sm:pb-5">
          Care, with love.
        </h2>
        <div className="invisible sm:visible w-12 h-2 bg-white mb-0 sm:mb-5"></div>

        {/* About Cards */}
        <dl className="space-y-10 p-1 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12 pb-10 relative z-10">
          {aboutData.map((card, index) => (
            <div key={index}>
              <dt>
                <div className="flex items-center justify-center h-10 w-10 lg:h-20 lg:w-20 rounded-md text-white">
                  {card.icon}
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-white font-semibold">
                  {card.title}
                </p>
              </dt>
              <dd className="mt-2 text-base text-white font-light">
                {card.content}
              </dd>
            </div>
          ))}
        </dl>

        <Button color={"transparent-dark"} className="relative z-10">
          Our Mission
        </Button>

      </div>
    </div>
  )
}
