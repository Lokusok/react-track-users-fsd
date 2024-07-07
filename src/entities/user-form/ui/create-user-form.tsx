import React, { forwardRef, memo, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import Label from './label';

interface ICreateUserFormProps {
  onSubmit: (data: TFormValues) => void;
  disabled?: boolean;
}

const schema = z.object({
  name: z.string().min(1, { message: 'Необходимо указать имя пользователя!' }),
  descr: z.string().min(10, { message: 'Минимум - 10 символов.' }),
});

type TFormValues = z.infer<typeof schema>;

function CreateUserForm(
  { onSubmit, disabled = false }: ICreateUserFormProps,
  ref: React.ForwardedRef<{ resetAllFields: () => void }>,
) {
  const { register, handleSubmit, formState, reset } = useForm<TFormValues>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  });

  const callbacks = {
    onSubmit: (data: TFormValues) => {
      onSubmit(data);
    },
    resetAllFields: () => {
      reset();
    },
  };

  const options = {
    isSubmitBtnDisabled: !formState.isValid || disabled,
  };

  useImperativeHandle(
    ref,
    () => ({
      resetAllFields: callbacks.resetAllFields,
    }),
    [callbacks.resetAllFields],
  );

  return (
    <form
      data-testid="create-user-form"
      onSubmit={handleSubmit(callbacks.onSubmit)}
      className="max-w-[540px] flex flex-col gap-y-[15px] mx-auto"
    >
      <div>
        <Label title="Имя пользователя:">
          <Input {...register('name')} disabled={disabled} data-testid="create-input-username" />
          <span>{formState.errors?.name?.message}</span>
        </Label>
      </div>

      <div>
        <Label title="Описание:">
          <Input
            {...register('descr')}
            disabled={disabled}
            textarea
            data-testid="create-textarea-username"
          />
          <span>{formState.errors?.descr?.message}</span>
        </Label>
      </div>

      <div className="flex justify-end">
        <Button data-testid="create-submit-button" disabled={options.isSubmitBtnDisabled}>
          Создать
        </Button>
      </div>
    </form>
  );
}

export default memo(forwardRef(CreateUserForm));
