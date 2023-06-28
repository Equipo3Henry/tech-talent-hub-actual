import React from "react";

function Hi({ user }) {
  return (
    <div>
      <h1>Hi! {user.name}</h1>
    </div>
  );
}

export default Hi;
