import { FlexRowCenter } from "components/flex-box";
import SEO from "components/SEO";
import LoginShop from "pages-sections/sessions/LoginShop";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const LoginPage = () => {
  
  const { shop,stoken} = useSelector(state => state.Authentication)
  const router = useRouter()
  const dispatch =useDispatch()
  useEffect(() => {
    if (shop) {
      router.push('/vendor/dashboard')
    }
  }, [shop])

  useEffect(() => {
    var token = localStorage.getItem("stoken")
    if(token){
      router.push('/vendor/dashboard')
      dispatch({ type: "TOKEN", payload: token })

    }
  }, [stoken])

  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <SEO title="Login" />
      <LoginShop />
    </FlexRowCenter>
  );
};

export default LoginPage;
