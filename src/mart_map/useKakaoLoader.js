import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "17e74857e3e9a01f0ed5dfbd0422bb7e",
    libraries: ["clusterer", "drawing", "services"],
  })
}