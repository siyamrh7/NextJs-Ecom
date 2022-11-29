import { FlexRowCenter } from "components/flex-box";
import SEO from "components/SEO";
import Login from "pages-sections/sessions/Login";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const LoginPage = () => {
  const { LogStatus } = useSelector(state => state.Authentication)
  const router = useRouter()
  useEffect(() => {
    if (LogStatus) {
      router.push('/')
    }
  }, [LogStatus])
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <SEO title="Login" />
      <Login />
    </FlexRowCenter>
  );
};

export default LoginPage;
