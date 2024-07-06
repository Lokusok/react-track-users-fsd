import { memo } from 'react';
import { UserForm } from '@/entities/user-form';

function CreateUserForm() {
  return <UserForm />;
}

export default memo(CreateUserForm);
