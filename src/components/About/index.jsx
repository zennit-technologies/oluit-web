import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import BlogCard from "../Helpers/Cards/BlogCard";
import DataIteration from "../Helpers/DataIteration";
import FontAwesomeCom from "../Helpers/icons/FontAwesomeCom";
import Star from "../Helpers/icons/Star";
import PageTitle from "../Helpers/PageTitle";
import SimpleSlider from "../Helpers/SliderCom";
import Layout from "../Partials/Layout";
import ServeLangItem from "../Helpers/ServeLangItem";
export default function About({ aboutData }) {
  const settings = {
    slidesToShow:
      aboutData.testimonials.length < 3 ? aboutData.testimonials.length : 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow:
            aboutData.testimonials.length < 2
              ? aboutData.testimonials.length
              : 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const slider = useRef(null);
  const prev = () => {
    slider.current.slickPrev();
  };
  const next = () => {
    slider.current.slickNext();
  };
  const rs = aboutData.blogs.slice(0, 2).map((item) => {
    return {
      id: item.id,
      by: item.blog.admin_id,
      comments_length: item.blog.active_comments.length,
      title: item.blog.title,
      article: item.blog.description,
      picture: process.env.NEXT_PUBLIC_BASE_URL + item.blog.image,
      slug: item.blog.slug,
    };
  });
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="about-page-wrapper w-full">
        <div className="title-area w-full">
          <PageTitle
            title={ServeLangItem()?.About_us}
            breadcrumb={[
              { name: ServeLangItem()?.home, path: "/" },
              { name: ServeLangItem()?.About_us, path: "/about" },
            ]}
          />
        </div>

        <div className="aboutus-wrapper w-full py-10">
          <div className="container-x mx-auto">
            <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
              <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0 relative">
                <Image
                  layout="fill"
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_URL +
                    aboutData.aboutUs.banner_image
                  }`}
                  alt="about"
                  className="w-full h-full"
                />
              </div>
              <div className="content flex-1">
                <div className="about-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: aboutData.aboutUs.description,
                    }}
                  ></div>
                </div>

                <Link href="/contact" passHref>
                  <a rel="noopener noreferrer">
                    <div className="w-[121px] h-10 mt-5 cursor-pointer">
                      <span className="yellow-btn">{ServeLangItem()?.Contact_Us}</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="customer-feedback w-full bg-white py-[60px]">
          <div className="title flex justify-center mb-5">
            <h1 className="text-[30px] font-semibold text-qblack">
              {ServeLangItem()?.Customers_Feedback}
            </h1>
          </div>
          <div className="feedback-slider-wrapper w-vw relative overflow-hidden">
            <SimpleSlider selector={slider} settings={settings}>
              {aboutData.testimonials.length > 0 &&
                aboutData.testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="item h-auto bg-primarygray sm:px-10 sm:py-9 p-2"
                  >
                    <div className="">
                      <div className="rating flex space-x-1 items-center mb-4">
                        {Array.from(Array(parseInt(item.rating)), () => (
                          <span key={Math.random()}>
                            <Star w="20" h="20" />
                          </span>
                        ))}
                        {parseInt(item.rating) < 5 && (
                          <>
                            {Array.from(
                              Array(5 - parseInt(item.rating)),
                              () => (
                                <span
                                  key={parseInt(item.rating) + Math.random()}
                                  className="text-gray-500"
                                >
                                  <Star defaultValue={false} w="20" h="20" />
                                </span>
                              )
                            )}
                          </>
                        )}
                        <div>
                          <span className="text-[13px] text-qblack">
                            ({parseInt(item.rating)})
                          </span>
                        </div>
                      </div>
                      <div className="text-[15px] text-qgraytwo leading-[30px]  line-clamp-6 mb-4">
                        {item.comment}
                      </div>
                      <div className="flex items-center space-x-2.5 mt-3">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                          <Image
                            layout="fill"
                            src={`${
                              process.env.NEXT_PUBLIC_BASE_URL + item.image
                            }`}
                            alt="user"
                          />
                        </div>
                        <div>
                          <p className="text-[18px] text-qblack font-medium">
                            {item.name}
                          </p>
                          <p className="text-qgraytwo text-[13px]">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </SimpleSlider>

            <div className="slider-btns flex justify-center mt-[40px]">
              <div className="flex space-x-5 item-center">
                <button
                  onClick={prev}
                  type="button"
                  className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  type="button"
                  className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-x mx-auto my-[60px]">
          <div
            data-aos="fade-down"
            className="best-services w-full bg-qyellow flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
          >
            {aboutData &&
              aboutData.services.map((item) => (
                <div key={item.id} className="item">
                  <div className="flex space-x-5 items-center">
                    <div>
                      <div>
                        {/*<svg*/}
                        {/*    width="36"*/}
                        {/*    height="36"*/}
                        {/*    viewBox="0 0 36 36"*/}
                        {/*    fill="none"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*>*/}
                        {/*  <path*/}
                        {/*      d="M1 1H5.63636V24.1818H35"*/}
                        {/*      stroke="#222222"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"*/}
                        {/*      stroke="#222222"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"*/}
                        {/*      stroke="#222222"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M34.9982 1H11.8164V18H34.9982V1Z"*/}
                        {/*      stroke="#222222"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M11.8164 7.18164H34.9982"*/}
                        {/*      stroke="#222222"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*</svg>*/}
                        <FontAwesomeCom className="w-8 h-8" icon={item.icon} />
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                        {item.title}
                      </p>
                      <p className="text-sm text-qblack line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="blog-post-wrapper w-full mb-[30px]">
          <div className="container-x mx-auto">
            <div className="blog-post-title flex justify-center items-cente mb-[30px]">
              <h1 className="text-3xl font-semibold text-qblack">
                {ServeLangItem()?.My_Latest_News}
              </h1>
            </div>

            <div className="blogs-wrapper w-full">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
                <DataIteration datas={rs} startLength={0} endLength={2}>
                  {({ datas }) => (
                    <div
                      data-aos="fade-up"
                      key={datas.id}
                      className="item w-full"
                    >
                      <BlogCard datas={datas} />
                    </div>
                  )}
                </DataIteration>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
