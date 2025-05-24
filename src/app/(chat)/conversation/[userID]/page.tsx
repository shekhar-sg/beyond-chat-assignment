import Conversation from "@/components/Conversation";
import { use } from "react";

const ConversationPage = (props: {
  params: Promise<{
    userID: string;
  }>;
}) => {
  const params = use(props.params);

  return <Conversation userID={params.userID} />;
};

export default ConversationPage;
