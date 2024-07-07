import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import Label from './label';

interface IUpdateUserFormProps {
  onSubmit: (data: TFormValues) => void;
  disabled?: boolean;
  user: IUser;
}

const schema = z.object({
  name: z.string().min(1, { message: 'Необходимо указать имя пользователя!' }),
  descr: z.string().min(10, { message: 'Минимум - 10 символов.' }),
});

type TFormValues = z.infer<typeof schema>;

function UpdateUserForm({ onSubmit, disabled, user }: IUpdateUserFormProps) {
  const { register, handleSubmit, formState, watch } = useForm<TFormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      descr: user.descr,
    },
  });
  const name = watch('name');
  const descr = watch('descr');

  const callbacks = {
    onSubmit: (data: TFormValues) => {
      onSubmit(data);
    },
  };

  const options = {
    isSubmitBtnDisabled:
      (name === formState.defaultValues?.name && descr === formState.defaultValues.descr) ||
      !formState.isValid ||
      disabled,
  };

  return (
    <form
      data-testid="edit-user-form"
      onSubmit={handleSubmit(callbacks.onSubmit)}
      className="max-w-[540px] flex flex-col gap-y-[15px] mx-auto"
    >
      <div>
        <Label title="Имя пользователя:">
          <Input {...register('name')} disabled={disabled} data-testid="update-input-username" />
          <span>{formState.errors?.name?.message}</span>
        </Label>
      </div>

      <div>
        <Label title="Описание:">
          <Input
            {...register('descr')}
            disabled={disabled}
            textarea
            data-testid="update-textarea-username"
          />
          <span>{formState.errors?.descr?.message}</span>
        </Label>
      </div>

      <div className="flex justify-end">
        <Button data-testid="update-submit-button" disabled={options.isSubmitBtnDisabled}>
          Обновить
        </Button>
      </div>
    </form>
  );
}

export default memo(UpdateUserForm);
