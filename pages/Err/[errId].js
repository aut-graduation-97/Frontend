import CustomError from "../../components/SharedComponents/Elements/CustomError";
import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  let errorMessage = "";

  const defaultErrMessages = {
    unAuthorized: {
      message: "برای دسترسی به این صفحه باید  ابتدا وارد شوید",
      redirectTo: "/Login",
    },
    loginError: {
      message: "مشکلی در تایید هویت شما وجود دارد. لطفا دوباره تلاش کنید",
      redirectTo: "/Login",
    },
    notAdmin: {
      message: "دسترسی به این صفحه برای اکانت شما ممکن نیست",
      redirectTo: "/Timeline",
    },
  };

  if (router.query.errId === "unAuthorized")
    errorMessage = defaultErrMessages.unAuthorized.message;
  if (router.query.errId === "loginError")
    errorMessage = defaultErrMessages.unAuthorized.message;
  if (router.query.errId === "notAdmin")
    errorMessage = defaultErrMessages.notAdmin.message;

  return (
    <CustomError
      errorMessage={errorMessage}
      redirectTo={defaultErrMessages.unAuthorized.redirectTo}
    />
  );
}
