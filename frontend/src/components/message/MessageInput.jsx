import React from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <div className="px-4 my-2">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Message"
          className=" input input-accent border-text-sm rounded-lg block w-full text-white"
        />
        <button
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          type="submit"
        >
          <BsSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
