import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { PageLayout, Title } from '@/shared/ui/page-layout';
import { UserProfile } from '@/features/user-profile';

function UserPage() {
  const { id } = useParams();

  const renders = {
    header: () => (
      <>
        <Title>Просмотр пользователя {id}</Title>
      </>
    ),
  };

  return (
    <PageLayout header={renders.header()}>
      <UserProfile></UserProfile>
    </PageLayout>
  );
}

export default memo(UserPage);
