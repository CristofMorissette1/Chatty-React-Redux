import { connect } from "react-redux";
import MessagesListComponent from "../components/AddMessage";

export const MessagesList = connect(state => ({
    messages: state.messages
}), {})(MessagesListComponent)