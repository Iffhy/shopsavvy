import bg from "../../assets/images/bg.png";
// import logo from "../../assets/images/logo.png";
import LoginForm from "../../common/components/ui/LoginForm";
import bgImage from "../../assets/images/bg-cart-large.jpg";
import logo from "../../assets/images/shopsavvy-logo.png"

const Login = () => {
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <div
      className="h-full absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
      <section className="w-full md:w-1/2 h-[100vh] fixed right-0">
      <img src="" alt="" />
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
