import CustomError from '../../components/SharedComponents/Elements/CustomError';
import { useRouter } from 'next/router';

export default function ErrorPage() {
  const router = useRouter();
  let errorMessage = '';

  const defaultErrMessages = {
    unAuthorized: {
      message: 'برای دسترسی به این صفحه باید  ابتدا وارد شوید',
      redirectTo: '/Login',
    },
  };

  if (router.query.errId === 'unAuthorized')
    errorMessage = defaultErrMessages.unAuthorized.message;

  return (
    <CustomError
      errorMessage={errorMessage}
      redirectTo={defaultErrMessages.unAuthorized.redirectTo}
    />
  );
}
