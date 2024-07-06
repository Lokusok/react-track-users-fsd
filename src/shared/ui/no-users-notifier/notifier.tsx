import { memo } from 'react';

function NoUsersNotifier() {
  return <div className="text-center text-[20px] text-[#888]">Пользователей нет...</div>;
}

export default memo(NoUsersNotifier);
