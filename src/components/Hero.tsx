import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


const Hero: React.FC = () => {
  return (
    <>
      <section className="relative z-10 w-full px-6 sm:px-6 py-28 sm:py-22" style={{ backgroundColor: '#0A090F' }}>
        {/* Background Gradient Texture */}
        <div className="absolute inset-0">
          <svg 
            className="absolute right-0 top-0 h-full w-auto opacity-80 hidden lg:block" 
            width="406" 
            height="798" 
            viewBox="0 0 406 798" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M48.6562 110.89C67.3309 111.806 85.6426 105.739 99.6173 94.001C117.328 77.2583 126.785 61.1014 128.59 44.554C129.868 37.0874 129.255 29.4411 126.807 22.2396C124.368 15.0383 120.146 8.48625 114.51 3.11899C108.874 -2.2483 101.971 -6.27846 94.3715 -8.64235C86.772 -11.0061 78.6869 -11.6367 70.7813 -10.4821C31.7198 -6.94315 -1.19776 28.2751 0.196542 64.738C0.408695 76.857 5.57114 88.4289 14.603 97.0313C23.6358 105.634 35.8383 110.6 48.6562 110.89Z" fill="url(#paint0_linear_0_1)"/>
            <path d="M6.2381 259.548V257.596C6.2286 253.358 6.21595 249.091 6.20434 244.804C6.15051 225.685 6.0946 206.158 6.26348 186.939C6.36692 178.837 8.12215 173.175 11.7625 169.733C15.4029 166.292 21.1089 164.656 29.3702 164.217C119.112 159.581 180.299 101.689 185.333 16.7796C186.241 0.891216 192.563 -4.79546 209.504 -4.94192C235.216 -5.18598 261.519 -5.11276 286.28 -4.99073C296.761 -4.8443 303.991 -2.8918 307.791 0.695908C311.58 4.28362 313.238 10.7268 312.953 20.2209C310.63 91.487 282.101 154.04 228.239 206.172C174.05 255.692 108.737 282.246 34.3532 284.711C23.4584 285.101 16.2811 283.393 12.2534 279.879C8.22562 276.364 6.28982 269.701 6.2381 259.548Z" fill="url(#paint1_linear_0_1)"/>
            <path d="M298.291 363.08C261.465 343.846 222.824 327.882 182.884 315.39L182.209 315.194C173.712 312.436 172.044 311.339 171.601 308.238C171.411 307.191 171.517 306.115 171.897 305.116C172.277 304.116 172.921 303.225 173.765 302.528C175.908 300.688 178.303 299.143 180.889 297.939C205.905 285.451 229.231 270.143 250.341 252.348C321.966 190.894 360.09 113.307 363.658 21.783C364.481 0.207861 369.927 -4.74665 392.726 -4.8199C411.334 -4.83617 429.942 -4.83616 448.551 -4.81986L462.304 -4.84424C474.516 -4.81981 482.495 -2.84288 486.263 0.866895C490.031 4.57665 491.689 11.6056 491.298 22.3688C486.992 140.52 441.553 240.731 352.353 328.716C349.303 331.205 345.999 333.841 342.485 336.624C341.355 337.534 340.205 338.459 339.033 339.398C330.283 346.423 320.636 354.164 311.094 362.152C306.809 365.715 304.382 366.35 298.291 363.08Z" fill="url(#paint2_linear_0_1)"/>
            <path d="M674.679 472.977C681.033 475.027 683.693 477.541 684.03 479.129C684.337 480.544 683.102 483.57 678.584 487.499C674.12 490.111 669.412 492.698 664.641 495.309C652.672 501.644 641.114 508.645 630.021 516.275C542.236 579.535 495.71 664.225 491.868 767.975C491.172 786.793 484.923 792.553 465.091 792.602H459.929C436.898 792.651 413.097 792.699 389.707 792.553C380.124 792.48 373.052 790.283 369.358 786.646C365.674 783.01 363.943 777.03 364.228 768.854C368.619 646.872 414.934 543.585 502.17 461.116C514.371 449.58 527.364 438.468 541.149 427.778C548.379 422.164 552.337 421.847 560.443 426.191C596.868 445.179 635.119 460.845 674.679 472.977Z" fill="url(#paint3_linear_0_1)"/>
            <path d="M31.1772 334.033C177.766 338.67 298.883 394.585 391.154 500.167C397.866 507.879 398.278 512.076 393.222 520.472C373.928 553.262 358.043 587.738 345.768 623.418L344.86 626.078C341.894 634.839 340.68 635.841 337.303 636.06C332.289 636.45 330.125 633.864 324.88 624.565C308.973 596.351 288.655 570.566 264.622 548.076C200.596 488.768 122.933 457.333 33.7853 454.673C11.8659 454.014 6.21172 448.572 6.21172 428.119L6.18531 410.425C6.13465 393.031 6.14311 375.63 6.21172 358.22C6.26344 349.288 8.30263 342.819 12.2787 339.061L12.4855 338.866C16.3317 335.375 22.6056 333.74 31.1772 334.033Z" fill="url(#paint4_linear_0_1)"/>
            <path d="M307.685 786.963C303.706 790.771 296.972 792.601 286.639 792.601C262.12 792.699 235.986 792.796 209.863 792.357C192.31 792.357 186.188 786.719 185.259 769.733C180.636 686.435 118.13 627.493 29.7573 623.173C12.537 622.368 6.39304 616.559 6.21255 600.915C5.95395 576.753 6.05743 552.249 6.26325 525.744C6.39307 517.372 7.99315 511.71 11.9438 507.976C15.8935 504.242 22.142 502.631 31.2551 502.656C105.528 502.778 178.831 535.115 243.374 596.131C285.225 636.816 310.472 699.003 312.847 766.902C313.311 776.762 311.665 783.156 307.685 786.963Z" fill="url(#paint5_linear_0_1)"/>
            <path d="M95.5323 795.59C88.4394 797.935 80.9032 798.822 73.4198 798.19C37.0635 796.287 3.65517 765.73 0.427482 731.683C-0.573121 724.249 0.187861 716.697 2.6577 709.575C5.12755 702.455 9.2429 695.941 14.7051 690.511L15.3246 689.924C21.2575 684.734 28.363 680.89 36.1019 678.683C43.8407 676.475 52.0102 675.963 59.9897 677.185C77.6206 679.308 92.5452 686.824 108.219 701.64C120.294 713.496 127.556 729.002 128.717 745.424C129.487 752.477 128.643 759.603 126.247 766.321C123.84 773.038 119.935 779.188 114.805 784.352L114.542 784.596C109.106 789.498 102.625 793.246 95.5323 795.59Z" fill="url(#paint6_linear_0_1)"/>
            <defs>
              <linearGradient id="paint0_linear_0_1" x1="0.000251003" y1="799.927" x2="482.698" y2="365.079" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D95DB0"/>
                <stop offset="1" stopColor="#3344DC"/>
              </linearGradient>
              <linearGradient id="paint1_linear_0_1" x1="0.000207568" y1="799.926" x2="482.698" y2="365.079" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D95DB0"/>
                <stop offset="1" stopColor="#3344DC"/>
              </linearGradient>
              <linearGradient id="paint2_linear_0_1" x1="-0.000217552" y1="799.927" x2="482.697" y2="365.079" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D95DB0"/>
                <stop offset="1" stopColor="#3344DC"/>
              </linearGradient>
              <linearGradient id="paint3_linear_0_1" x1="6.30859e-05" y1="800.314" x2="482.698" y2="365.466" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D95DB0"/>
                <stop offset="1" stopColor="#3344DC"/>
              </linearGradient>
              <linearGradient id="paint4_linear_0_1" x1="0.000153524" y1="800.314" x2="482.698" y2="365.467" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D95DB0"/>
                <stop offset="1" stopColor="#3344DC"/>
              </linearGradient>
              <linearGradient id="paint5_linear_0_1" x1="-3.36986e-05" y1="800.314" x2="482.698" y2="365.467" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D95DB0"/>
                <stop offset="1" stopColor="#3344DC"/>
              </linearGradient>
              <linearGradient id="paint6_linear_0_1" x1="2.2999e-06" y1="800.314" x2="482.698" y2="365.467" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D95DB0"/>
                <stop offset="1" stopColor="#3344DC"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 py-8 sm:py-52">
          <div className="ml-0 sm:ml-8 md:ml-16 lg:ml-24">
            <h1 className="text-white leading-tight mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium" style={{
              fontFamily: 'Inter',
              letterSpacing: '-2px'
            }}>
              Votre site en{' '}
              <span style={{
                background: 'linear-gradient(50deg, #D95DB0 -0.73%, #3344DC 365.51%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
              }}>
                24h
              </span>
              <br />
              pour{' '}
              <span style={{
                background: 'linear-gradient(50deg, #D95DB0 -0.73%, #3344DC 365.51%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
              }}>
                200€
              </span>{' '}
              par mois
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed font-inter max-w-xl lg:max-w-2xl">
              Créez votre présence en ligne avec notre solution tout-en-un. 
              Design moderne, développement rapide, et maintenance incluse.
            </p>

            <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-inter">
              Obtenir un{' '}
              <span style={{
                background: 'linear-gradient(50deg, #D95DB0 -0.73%, #3344DC 365.51%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                devis
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Make you grow, together section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Left Image - Desktop only */}
            <div className="hidden lg:block lg:col-span-3">
              <img 
                src="https://i.ibb.co/Zp6Xgvbn/637c87196877b65904186aec-hedy-home-01-p-800-webp.png" 
                alt="Team collaboration" 
                className="w-full h-auto block"
              />
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Make you grow,{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  together
                </span>
                .
              </h2>
              
              <div className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                <p className="mb-4">
                  Vous avez beaucoup à nous apprendre sur votre marché et votre offre.{' '}
                  <span className="font-semibold text-gray-900">
                    Des infos précieuses qui méritent toute notre attention
                  </span>{' '}
                  : parce qu'une solution digitale, ça se construit ensemble.
                </p>
                
                <p className="mb-4">
                  C'est pour cela qu'un projet ne démarre jamais sans un vrai kick-off et que nous avons développés des méthodologies de{' '}
                  <span className="font-semibold text-gray-900">co-construction</span>.
                </p>
                
                <p>
                  Vous impliquer dans chaque étape du projet, c'est vous en donner une maîtrise.
                </p>
              </div>

              <button 
                className="inline-flex items-center justify-center text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{
                  width: '252px',
                  height: '60px',
                  padding: '17px 55.597px 18px 55.797px',
                  background: 'linear-gradient(90deg, #D95DB0 0%, #3344DC 100%)'
                }}
              >
                Nous contacter
              </button>
            </div>

            {/* Right Image - Desktop only */}
            <div className="hidden lg:block lg:col-span-3">
              <img 
                src="https://i.ibb.co/C3CgTmCd/637c87196877b65904186aec-hedy-home-01-p-1080-webp.png" 
                alt="Digital collaboration" 
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ils nous ont fait confiance section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto  sm:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Ils nous ont
              <br />
              fait confiance
            </h2>
          </div>

          {/* Desktop Logo Grid */}
          <div className="hidden md:grid grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
            {/* Row 1 */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/ds1fbr5w/1.png" alt="Logo 1" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/q3DGrtjB/2.png" alt="Logo 2" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/JV2nnCH/3.png" alt="Logo 3" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28  rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/Tq8Jx8b7/4.png" alt="Logo 4" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28  rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/SDvj8WCX/5.png" alt="Logo 5" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>

            {/* Row 2 */}
            <div className="w-24 h-24 lg:w-28 lg:h-28  rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/zW0q9nR6/6.png" alt="Logo 6" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28  rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/b50YRtBc/7.png" alt="Logo 7" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28  rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/gbzH6XrF/8.png" alt="Logo 8" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/B5Yj0Zvx/9.png" alt="Logo 9" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28  rounded-lg flex items-center justify-center">
              <img src="https://i.ibb.co/mr86DGQ3/10.png" alt="Logo 10" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
          </div>

          {/* Mobile Sliding Logos */}
          <div className="md:hidden overflow-hidden w-full">
            <div className="flex animate-scroll space-x-6 w-max">
              {/* First set of logos */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/ds1fbr5w/1.png" alt="Logo 1" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/q3DGrtjB/2.png" alt="Logo 2" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/JV2nnCH/3.png" alt="Logo 3" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/Tq8Jx8b7/4.png" alt="Logo 4" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/SDvj8WCX/5.png" alt="Logo 5" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/zW0q9nR6/6.png" alt="Logo 6" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/b50YRtBc/7.png" alt="Logo 7" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/gbzH6XrF/8.png" alt="Logo 8" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/B5Yj0Zvx/9.png" alt="Logo 9" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/mr86DGQ3/10.png" alt="Logo 10" className="object-contain w-20 h-20" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/ds1fbr5w/1.png" alt="Logo 1" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/q3DGrtjB/2.png" alt="Logo 2" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/JV2nnCH/3.png" alt="Logo 3" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/Tq8Jx8b7/4.png" alt="Logo 4" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/SDvj8WCX/5.png" alt="Logo 5" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/zW0q9nR6/6.png" alt="Logo 6" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/b50YRtBc/7.png" alt="Logo 7" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/gbzH6XrF/8.png" alt="Logo 8" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/B5Yj0Zvx/9.png" alt="Logo 9" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://i.ibb.co/mr86DGQ3/10.png" alt="Logo 10" className="object-contain w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#0A090F' }}>
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Apprécié par des milliers de{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                clients
              </span>
            </h2>
          </div>

          {/* Desktop testimonials grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <g clipPath="url(#clip0_2_216)">
                      <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_216">
                        <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed text-base">
                Fait exactement ce qu'il dit. Facile à lire et à comprendre. C'est le deuxième iPhone sur lequel nous l'utilisons et nous recommandons vivement cette application.
              </p>
              <p className="font-semibold text-gray-900 text-sm">colinandmandy94</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <g clipPath="url(#clip0_2_216)">
                      <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_216">
                        <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed text-base">
                J'adore sa simplicité et son efficacité. Super application. Très informative et perspicace si vous souhaitez en savoir plus sur votre appareil. La vérification des violations de données est un vrai plus.
              </p>
              <p className="font-semibold text-gray-900 text-sm">Jennifer Black</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <g clipPath="url(#clip0_2_216)">
                      <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_216">
                        <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed text-base">
                Cette application est utile si vous avez besoin d'identifier certaines vulnérabilités sur votre iPhone. En cas de problème, leur service client s'est montré très serviable et réactif.
              </p>
              <p className="font-semibold text-gray-900 text-sm">Phillip Colligan</p>
            </div>
          </div>

          {/* Mobile testimonials slider */}
          <div className="md:hidden overflow-hidden w-full">
            <div className="flex animate-scroll space-x-6 w-max">
              {/* First set */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Fait exactement ce qu'il dit. Facile à lire et à comprendre. C'est le deuxième iPhone sur lequel nous l'utilisons et nous recommandons vivement cette application.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">colinandmandy94</p>
                </div>

                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    J'adore sa simplicité et son efficacité. Super application. Très informative et perspicace si vous souhaitez en savoir plus sur votre appareil.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Jennifer Black</p>
                </div>

                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Cette application est utile si vous avez besoin d'identifier certaines vulnérabilités sur votre iPhone. En cas de problème, leur service client s'est montré très serviable.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Phillip Colligan</p>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Fait exactement ce qu'il dit. Facile à lire et à comprendre. C'est le deuxième iPhone sur lequel nous l'utilisons et nous recommandons vivement cette application.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">colinandmandy94</p>
                </div>

                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    J'adore sa simplicité et son efficacité. Super application. Très informative et perspicace si vous souhaitez en savoir plus sur votre appareil.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Jennifer Black</p>
                </div>

                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Cette application est utile si vous avez besoin d'identifier certaines vulnérabilités sur votre iPhone. En cas de problème, leur service client s'est montré très serviable.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Phillip Colligan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;