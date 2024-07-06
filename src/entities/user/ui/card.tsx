import { memo } from 'react';

interface IUserCardProps {
  actions?: React.ReactNode;
  user: IUser;
}

function UserCard({ actions, user }: IUserCardProps) {
  return (
    <article className="py-12 px-8 border-2 border-accent-color-1 border-solid rounded-[6px]">
      <h3 className="text-[22px] mb-[5px]">{user.name}</h3>
      <p className="text-[18px] mb-[25px] break-all">{user.descr}</p>

      {Boolean(actions) && actions}
    </article>
  );
}

export default memo(UserCard);
