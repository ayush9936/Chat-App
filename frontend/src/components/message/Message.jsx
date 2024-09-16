import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="chat-header">John</div>
      <div className="chat-bubble chat-bubble-accent">
        It was said that you would, destroy the Sith, not join them.
      </div>
      <time className="text-xs opacity-50">12:50</time>
    </div>
  );
};

export default Message;
