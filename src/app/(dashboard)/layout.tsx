import type {ReactNode} from "react";
import {DashboardLayout, PageContainer} from "@toolpad/core";
import {ChatBubble} from "@mui/icons-material";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardPagesLayout = (props: DashboardLayoutProps) => {
    const {children} = props
    return (
        <DashboardLayout
            branding={{
                title: "Toolpad",
                logo: <ChatBubble/>,
            }}
            hideNavigation
                    >
            <PageContainer>{children}</PageContainer>
        </DashboardLayout>
    );
};

export default DashboardPagesLayout;