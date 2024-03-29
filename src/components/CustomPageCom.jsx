import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "./Partials/Layout";
import PageTitle from "./Helpers/PageTitle";
// import languageModel from "../../utils/languageModel";
import PageHead from "./Helpers/PageHead";
import ServeLangItem from "./Helpers/ServeLangItem";

function CustomPageCom({ slug }) {
    const { websiteSetup } = useSelector((state) => state.websiteSetup);
    const [pageData, setPageData] = useState(null);
    // const [langCntnt, setLangCntnt] = useState(null);
    // useEffect(() => {
    //     setLangCntnt(languageModel());
    // }, []);
    const router = useRouter();
    useEffect(() => {
        if (websiteSetup) {
            const checkPageIsExist = websiteSetup.payload.customPages.find((item) => {
                return item.slug === slug;
            });
            if (checkPageIsExist) {
                setPageData(checkPageIsExist);
            } else {
                router.push("/404");
            }
        }
    }, [pageData, slug, websiteSetup]);
    return (
        <>
            {pageData && <PageHead title={pageData.page_name} />}
            <Layout childrenClasses="pt-0 pb-0">
                <div className="terms-condition-page w-full bg-white pb-[30px]">
                    <div className="w-full mb-[30px]">
                        {pageData && (
                            <PageTitle
                                breadcrumb={[
                                    { name: ServeLangItem()?.home, path: "/" },
                                    {
                                        name: pageData.slug,
                                        path: `/pages?custom=${pageData.slug}`,
                                    },
                                ]}
                                title={pageData.page_name}
                            />
                        )}
                    </div>
                    <div className="w-full">
                        <div className="container-x mx-auto">
                            {pageData && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: pageData.description,
                                    }}
                                ></div>
                            )}
                            {/* {privacyPolicy && privacyPolicy.privacy_policy} */}
                            {/* <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                1. What Are Terms and Conditions?
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the on leap into electronic
                typesetting, remaining essentially unchanged. It wasn’t
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, andei more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum to make a type specimen book.
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                2. Ecommerce Terms and Conditions Examples
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7 mb-10">
                While it’s not legally required for ecommerce websites to have a
                terms and conditions agreement, adding one will help protect
                your online business.As terms and conditions are legally
                enforceable rules, they allow you to set standards for how users
                interact with your site. Here are some of the major benefits of
                including terms and conditions on your ecommerce site:
                <br />
                <br />
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining essentially unchanged. It
                wasn’t popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, andei more recently with
                desktop.
              </p>
              <div>
                <h2 className="text-[18px] font-medium text-qblack mb-5">
                  2. Does My Online Shop Need Terms and Conditions?
                </h2>

                <ul className="list-disc ml-5">
                  <li className="text-[15px] text-qgraytwo leading-7">
                    slim body with metal cover
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    8GB DDR4 RAM and fast 512GB PCIe SSD
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                    keyboard, touchpad with gesture support
                  </li>
                </ul>
              </div>
            </div>

            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                3. Ecommerce Terms and Conditions Template [Free]
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the on leap into electronic
                typesetting, remaining essentially unchanged. It wasn’t
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, andei more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum to make a type specimen book. five
                centuries but also the on leap into electronic typesetting,
                remaining essentially unchanged. It wasn’t popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, andei more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum to make a
                type specimen book.
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                4. What to Include in Terms and Conditions for Online Stores
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the on leap into electronic
                typesetting, remaining essentially unchanged. It wasn’t
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, andei more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum to make a type specimen book.
                <br />
                <br />
                five centuries but also the on leap into electronic typesetting,
                remaining essentially unchanged. It wasn’t popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, andei more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum to make a
                type specimen book. It wasn’t popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages,
                andei more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum to make a type
                specimen book.
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                05.Pricing and Payment Terms
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the on leap into electronic
                typesetting, remaining essentially unchanged. It wasn’t
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, andei more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum to make a type specimen book.
                <br />
                <br />
                five centuries but also the on leap into electronic typesetting,
                remaining essentially unchanged. It wasn’t popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, andei more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum to make a
                type specimen book. It wasn’t popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages,
                andei more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum to make a type
                specimen book.
                <br />
                <br />
                It has survived not only five centuries but also the on leap
                into electronic typesetting, remaining essentially unchanged. It
                wasn’t popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, andei more recently with
                desktop
              </p>
            </div> */}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default CustomPageCom;
