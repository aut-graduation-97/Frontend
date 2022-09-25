import CustomError from "../components/SharedComponents/Elements/CustomError";

export default function Custom404() {
  return (
    <CustomError
      errorMessage={"محتوای مورد نظر شما را نیافتیم! 😔💔"}
      redirectTo={"/Timeline"}
    />
  );
}
