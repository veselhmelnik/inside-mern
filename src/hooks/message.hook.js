import { message } from "antd";
import { useCallback } from "react"

const useMessage = (error) => {
    const [messageApi, contextHolder] = message.useMessage();

    const info = (error) => {
        messageApi.info(error);
      };
      info();
        if(error) {
            return contextHolder
        }
}

export default useMessage