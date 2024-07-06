import { memo } from 'react';

import { Profile } from '@/entities/user';
import { Button } from '@/shared/ui/button';

function UserProfile() {
  const renders = {
    actions: () => (
      <div className="flex gap-x-[15px] justify-center items-center">
        <Button>Удалить</Button>
        <Button>Изменить</Button>
      </div>
    ),
  };

  return <Profile actions={renders.actions()}>fgdgdfg</Profile>;
}

export default memo(UserProfile);
