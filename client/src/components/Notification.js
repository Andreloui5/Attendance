import { notification } from "antd";
import { capitalize } from "../utils/helperfunctions";

export const openNotification = (type, message) => {
  notification[type]({
    message: `${capitalize(type)}!`,
    description: message
  });
};
