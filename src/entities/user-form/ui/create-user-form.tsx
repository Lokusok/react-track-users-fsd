import { memo } from 'react';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import Label from './label';

function UserForm() {
  return (
    <form className="max-w-[540px] flex flex-col gap-y-[15px] mx-auto">
      <div>
        <Label title="Имя пользователя:">
          <Input />
        </Label>
      </div>

      <div>
        <Label title="Описание:">
          <Input textarea />
        </Label>
      </div>

      <div className="flex justify-end">
        <Button>Создать</Button>
      </div>
    </form>
  );
}

export default memo(UserForm);
