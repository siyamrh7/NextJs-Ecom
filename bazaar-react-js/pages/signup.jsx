import { FlexRowCenter } from "components/flex-box";
import SEO from "components/SEO";
import Signup from "pages-sections/sessions/Signup";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const SignUpPage = () => {
  const { RegStatus } = useSelector(state => state.Authentication)
  const router = useRouter()
  useEffect(() => {
    if (RegStatus) {
      router.push('/login')
    }
  }, [RegStatus])
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <SEO title="Sign up" />
      <Signup />
    </FlexRowCenter>
  );
};

export default SignUpPage;
