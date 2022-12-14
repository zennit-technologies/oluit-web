import Link from "next/link";
import FontAwesomeCom from "../Helpers/icons/FontAwesomeCom";
import SimpleSlider from "../Helpers/SliderCom";
import ShopNowBtn from "../Helpers/Buttons/ShopNowBtn";
import ServeLangItem from "../Helpers/ServeLangItem";

export default function Banner({
  className,
  images = [],
  sidebarImgOne,
  sidebarImgTwo,
  services = [],
}) {
  const settings = {
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: false,
    fade: true,
  };
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px] ">
              <div
                data-aos="fade-right"
                className="xl:w-[740px] w-full xl:h-full md:h-[500px] h-[220px] xl:mb-0 mb-2"
              >
                <div className="slider-wrapper w-full h-full">
                  <SimpleSlider settings={settings}>
                    {images.length > 0 &&
                      images.map((item, i) => (
                        <div key={i} className="item w-full h-full group">
                          <div
                            style={{
                              backgroundImage: `url(${
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              })`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="flex w-full max-w-full h-full h-auto relative items-center pl-[30px]"
                          >
                            <div>
                              <div className="inline-block md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center  bg-white rounded-full md:mb-[30px] mb-[15px]">
                                <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                                  {item.badge}
                                </span>
                              </div>
                              <div className="md:mb-[30px] mb-[15px]">
                                <p className="md:text-[50px] text-[20px] leading-none text-qblack md:mb-3">
                                  {item.title_one}
                                </p>
                                <h1 className="md:text-[50px] text-[20px] md:w-[400px] md:leading-[66px] text-qblack font-bold">
                                  {item.title_two}
                                </h1>
                              </div>
                              <div className="w-[90px]">

                                <Link
                                    href={{ pathname: "/single-product", query: { slug: item.product_slug } }}
                                    passHref>
                                  <a rel="noopener noreferrer">
                                    <ShopNowBtn />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </SimpleSlider>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="flex-1 flex xl:flex-col flex-row  xl:space-y-[30px] xl:h-full md:h-[350px] h-[150px]"
              >
                <div
                  className="w-full xl:h-1/2 xl:mr-o mr-2 relative flex items-center group md:pl-[40px] pl-[30px]"
                  style={{
                    backgroundImage: `url(${
                      process.env.NEXT_PUBLIC_BASE_URL + sidebarImgOne.image
                    })`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="inline-block md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center  bg-white rounded-full md:mb-[22px] mb-[15px]">
                        <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                          {sidebarImgOne.badge}
                        </span>
                      </div>
                      <div className="md:mb-[30px] mb-2.5">
                        <p className="md:text-[30px] leading-none text-qblack font-semibold md:mb-3">
                          {sidebarImgOne.title_one}
                        </p>
                        <h1 className="md:text-[30px] md:leading-[40px] text-qblack font-semibold">
                          {sidebarImgOne.title_two}
                        </h1>
                      </div>
                    </div>
                    <div className="w-[90px]">
                      <Link
                          href={{
                            pathname: "/products",
                            query: { category: sidebarImgOne.product_slug  },
                          }}

                           passHref>
                        <a rel="noopener noreferrer">
                          <div className="cursor-pointer w-full relative  ">
                            <div className="inline-flex  space-x-1.5 items-center relative z-20">
                              <span className="text-sm text-qblack font-medium leading-[30px]">
                                {ServeLangItem()?.Shop_Now}
                              </span>
                              <span className="leading-[30px]">
                                <svg
                                  width="7"
                                  height="11"
                                  viewBox="0 0 7 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2.08984"
                                    y="0.636719"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(45 2.08984 0.636719)"
                                    fill="#1D1D1D"
                                  />
                                  <rect
                                    x="7"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 7 5.54492)"
                                    fill="#1D1D1D"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 bottom-0 z-10"></div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${
                      process.env.NEXT_PUBLIC_BASE_URL + sidebarImgTwo.image
                    })`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-full xl:h-1/2 relative flex items-center pl-[40px] group"
                >
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="inline-block md:w-[112px] w-[100px] shadow md:h-[25px] h-[18px] flex items-center justify-center  bg-white rounded-full md:mb-[22px] mb-[15px]">
                        <span className="text-qblack uppercase md:text-xs text-[10px] font-semibold">
                          {sidebarImgTwo.badge}
                        </span>
                      </div>
                      <div className="md:mb-[30px] mb-2.5">
                        <p className="md:text-[30px] leading-none text-qblack font-semibold md:mb-3">
                          {sidebarImgTwo.title_one}
                        </p>
                        <h1 className="md:text-[30px] md:leading-[40px] text-qblack font-semibold">
                          {sidebarImgTwo.title_two}
                        </h1>
                      </div>
                    </div>
                    <div className="w-[90px]">
                      <Link href={{
                        pathname: "/products",
                        query: { category: sidebarImgTwo.product_slug },
                      }}  passHref>
                        <a rel="noopener noreferrer">
                          <div className="cursor-pointer w-full relative  ">
                            <div className="inline-flex  space-x-1.5 items-center relative z-20">
                              <span className="text-sm text-qblack font-medium leading-[30px]">
                                {ServeLangItem()?.Shop_Now}
                              </span>
                              <span className="leading-[30px]">
                                <svg
                                  width="7"
                                  height="11"
                                  viewBox="0 0 7 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="2.08984"
                                    y="0.636719"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(45 2.08984 0.636719)"
                                    fill="#1D1D1D"
                                  />
                                  <rect
                                    x="7"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 7 5.54492)"
                                    fill="#1D1D1D"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 bottom-0 z-10"></div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="best-services w-full bg-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
            >
              {services.map((service) => (
                <div key={service.id} className="item">
                  <div className="flex space-x-5 items-center">
                    <div>
                      <span className="w-10 h-10 text-qyellow">
                        {/*<svg*/}
                        {/*    width="36"*/}
                        {/*    height="36"*/}
                        {/*    viewBox="0 0 36 36"*/}
                        {/*    fill="none"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*>*/}
                        {/*  <path*/}
                        {/*      d="M1 1H5.63636V24.1818H35"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M34.9982 1H11.8164V18H34.9982V1Z"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M11.8164 7.18164H34.9982"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*</svg>*/}
                        <FontAwesomeCom
                          className="w-8 h-8"
                          icon={service.icon}
                        />
                      </span>
                    </div>
                    <div>
                      <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                        {service.title}
                      </p>
                      <p className="text-sm text-qgray line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
