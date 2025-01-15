import { FC, useState } from "react";

type ProfilePageProps = {
  //   userId: number;
};

const ProfilePage: FC<ProfilePageProps> = ({}) => {
  const [comment, setComment] = useState("");

  return (
    <div>
      <textarea
        value={comment}
        placeholder="Add a comment"
        onChange={(e) => setComment(e.target.value)}
        rows={5}
        className="border border-gray-300 p-2 rounded text-sm w-64"
      />
    </div>
  );
};

export default ProfilePage;
