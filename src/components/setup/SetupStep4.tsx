import { ButtonComponent } from "../ButtonComponent"
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa6"


export const SetupStep4 = () => {

    return (
        <div className="w-full">
            <h2 className="text-2xl text-center font-medium text-zinc-50 mb-2">Download Pushsafer</h2>
            <h3 className="text-sm text-center text-zinc-200 text-balance">To receive critical alerts, you must first download Pushsafer and complete the setup process. Once this is done, you can return to this page.</h3>
            <div className="w-full flex flex-row justify-center gap-1 text-zinc-100 pt-4">
                <ButtonComponent
                    text="Pushsafer for iOS"
                    to="https://apps.apple.com/es/app/pushsafer/id1096581405"
                    icon={<FaAppStoreIos />}
                />
                <ButtonComponent
                    text="Pushsafer for Android"
                    to="https://play.google.com/store/apps/details?id=com.pushsafer&hl=es&gl=US"
                    icon={<FaGooglePlay />}
                />
            </div>
        </div>
    )
}