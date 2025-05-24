"use client";

import ChatSection from "@/components/ChatSection";
import { use, useEffect } from "react";

const ConversationPage = (props: {
  params: Promise<{
    userID: string;
  }>;
}) => {
  const params = use(props.params);

  useEffect(() => {
    console.log("ConversationPage mounted with props:", params.userID);
  }, [params.userID]);
  return <ChatSection />;
};

export default ConversationPage;
