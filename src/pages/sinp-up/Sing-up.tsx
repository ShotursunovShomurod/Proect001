import { Button, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/api/user-api";
import { useEffect } from "react";
import img from "../../assets/sinp.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpRequest, { data, isSuccess }] = useRegisterUserMutation();

  const onFinish = (values:any) => {
    signUpRequest(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/login`);
      localStorage.setItem("token", data.accessToken);
    }
  }, [isSuccess]);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-black">
      <div className="flex justify-center items-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-white text-center">Create a new account</h2>
          <p className="text-base text-[#7878A3] text-center mt-3">To use snapgram, Please enter your details.</p>
          
          <Form
            className="mt-8 space-y-6"
            name="basic"
            layout="vertical"
            initialValues={{ remember: false }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="full_name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input className="rounded-md bg-[#1F1F22] border-none text-black placeholder-[#7878A3] px-4 py-3" />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input className="rounded-md bg-[#1F1F22] border-none text-black placeholder-[#7878A3] px-4 py-3" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input className="rounded-md bg-[#1F1F22] border-none text-black placeholder-[#7878A3] px-4 py-3" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password className="rounded-md bg-[#1F1F22] border-none text-black placeholder-[#7878A3] px-4 py-3" />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full py-6 bg-[#877EFF] text-white font-bold rounded-md"
                type="primary"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <Button className="w-full flex items-center justify-center mt-4 bg-white py-6 rounded-md text-[#1F1F22] font-semibold">
            <FcGoogle className="text-xl mr-2" />
            Sign up with Google
          </Button>

          <div className="text-center mt-4">
            <p className="text-[#EFEFEF] text-sm">
              Don’t have an account?{" "}
              <Link to="/login" className="text-[#877EFF]">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden md:block">
        <img src={img} alt="Sign Up" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default SignUp;