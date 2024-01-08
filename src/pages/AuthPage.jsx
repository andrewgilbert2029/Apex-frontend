import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import ForgotPassword from "../components/ForgotPassword";
import SignupCard from "../components/SignupCard";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom);

	return <>{authScreenState === "login" ? <LoginCard /> : authScreenState === "signup" ? <SignupCard /> : <ForgotPassword ></ForgotPassword>}</>;
};

export default AuthPage;
