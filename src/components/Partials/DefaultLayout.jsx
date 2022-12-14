import axios from "axios";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../store/Cart";
import { fetchCompareProducts } from "../../store/compareProduct";
import { setupAction } from "../../store/websiteSetup";
import { fetchWishlist } from "../../store/wishlistData";
import TawkTo from "tawkto-react";
import Consent from "../Helpers/Consent";
import Script from "next/script";
import {useRouter} from "next/router";
// import Language from "../../data/Language.json"
import languageModel from "../../../utils/languageModel";
export default function DefaultLayout({ children }) {
    const router = useRouter();
  const dispatch = useDispatch();
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [twkData, setTwkData] = useState(null);
  const [gtagId, setgTagId] = useState(null);
  const [fbPixexl, setFbPixel] = useState(null);
  const [load, setLoad] = useState(true);
  const apiFetch = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/website-setup`)
      .then((res) => {
        // handle success
        dispatch(setupAction(res.data));
        localStorage.setItem(
          "settings",
          JSON.stringify(res.data && res.data.setting)
        );

        if (res.data) {
          setgTagId(res.data.googleAnalytic.analytic_id);
          setTwkData({
            widgetId: res.data.tawk_setting.widget_id,
            propertyId: res.data.tawk_setting.property_id,
          });
          setFbPixel(res.data.facebookPixel);
            localStorage.setItem(
                "language",
                JSON.stringify(res.data.language)
            );
            const checkLangExists = localStorage.getItem("language");
            if(checkLangExists){
                setLoad(false);
            }
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    dispatch(fetchWishlist());
  };
  useEffect(() => {
    !websiteSetup ? apiFetch() : false;
    dispatch(fetchCart());
    dispatch(fetchCompareProducts());
      if (languageModel()) {
          setLoad(false);
      }
  }, [websiteSetup, apiFetch, dispatch]);
  useEffect(() => {
    if (twkData) {
      let tawk = new TawkTo(`${twkData.widgetId}`, `${twkData.propertyId}`);

      tawk.onStatusChange((status) => {
        console.log(status);
      });
    }
  }, [twkData]);
  useEffect(() => {
    if (fbPixexl) {
      import("react-facebook-pixel")
          .then((x) => x.default)
          .then((ReactPixel) => {
            ReactPixel.init(`${fbPixexl.app_id}`); // facebookPixelId
            ReactPixel.pageView();

            router.events.on("routeChangeComplete", () => {
              ReactPixel.pageView();
            });
          });
    }
  }, [fbPixexl, router.events]);
  return (
    <>
      {gtagId && (
          <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtagId}');
        `}
            </Script>
          </>
      )}
        <div>
            {!load && (
                <>
                    <Consent />
                    <div>{children && children}</div>
                </>
                )}
        </div>

    </>
  );
}
