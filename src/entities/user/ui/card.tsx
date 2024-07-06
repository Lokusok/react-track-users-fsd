import { memo } from 'react';

interface IUserCardProps {
  actions?: React.ReactNode;
}

function UserCard({ actions }: IUserCardProps) {
  return (
    <article className="py-12 px-8 border-2 border-accent-color-1 border-solid rounded-[6px]">
      <h3 className="text-[22px] mb-[5px]">John Doe</h3>
      <p className="text-[18px] mb-[25px] break-all">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, adipisci.
      </p>

      {Boolean(actions) && actions}
    </article>
  );
}

export default memo(UserCard);
