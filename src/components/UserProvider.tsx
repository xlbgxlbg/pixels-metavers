import { isEmpty } from "lodash";
import * as React from "react";
import { useGetUserAssets, useGetUserInfo } from "../pixels-metavers/apiHook";
import { usePixelsMetaverseContract } from "../pixels-metavers/PixelsMetaversProvider";

export const UserInfoContext = React.createContext(
    {} as {
        userInfo: any;
        setUserInfo: React.Dispatch<any>;
    },
);

export const useUserInfo = () => React.useContext(UserInfoContext);

export const UserInfoProvider = ({ children }: { children: React.ReactNode }) => {
    const [userInfo, setUserInfo] = React.useState<any>();
    const { accounts, contract } = usePixelsMetaverseContract()
    const getUserInfo = useGetUserInfo()
    const getUserAssete = useGetUserAssets()

    React.useEffect(() => {
        if (isEmpty(accounts?.address)) return
        getUserInfo(accounts?.address, setUserInfo)
        getUserAssete(accounts?.address, setUserInfo)
    }, [accounts?.address, contract])

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    )
}