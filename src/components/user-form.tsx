import { useEffect, useState } from "react";
import Input from "./input";

export default function UserForm() {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="space-y-4">
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />

      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />

      <p>Full Name: {fullName}</p>
    </div>
  );
}
