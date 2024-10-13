import img from "../../assets/sinp.png"; // o'zingizning image yo'lingizni qo'ying
import img1 from "../../assets/login.svg";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { useSignInMutation } from "../../redux/api/user-api";
import { Link, useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignUp = () => {
  const navigate = useNavigate();
  const [signInRequest] = useSignInMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signInRequest(values);
    navigate("/");
    console.log(values);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full bg-black">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-[405px] mx-auto">
          <div className="flex justify-center items-center mb-[36px]">
            <img className="w-[30px] h-[30px]" src={img1} alt="Snapgram Logo" />
            <p className="text-[28px] font-bold text-white ml-2">Snapgram</p>
          </div>

          <div className="w-full px-[25px] text-center">
            <p className="text-[30px] font-bold text-white">Log in to your account</p>
            <p className="text-[16px] text-[#7878A3] mt-3">Welcome back! Please enter your details.</p>
          </div>

          <Form
            className="mt-8"
            name="basic"
            layout="vertical"
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                className="bg-[#1F1F22] text-white placeholder-[#7878A3] rounded-md py-3 px-4 border-none"
                placeholder="Enter your email"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                className="bg-[#1F1F22] text-white placeholder-[#7878A3] rounded-md py-3 px-4 border-none"
                placeholder="Enter your password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full py-6 bg-[#877EFF] text-white font-bold rounded-md"
                type="primary"
                htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>

          <Button className="w-full mt-4 py-6 flex justify-center items-center bg-white text-[#1F1F22] font-semibold rounded-md">
            <FcGoogle className="text-xl mr-2" />
            Sign in with Google
          </Button>

          <div className="flex justify-center items-center mt-4">
            <p className="text-[#EFEFEF] text-sm">Don’t have an account? </p>
            <Link to="/singUp">
              <p className="text-[#877EFF] text-sm ml-1">Sign up</p>
            </Link>
          </div>
        </div>
      </div>


      <div className="hidden md:block">
        <img src={img} alt="Sign In" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default SignUp;


// import img from "../../assets/sinp.png";
// import img1 from "../../assets/login.svg";
// import type { FormProps } from "antd";
// import { Button, Form, Input } from "antd";
// import { FcGoogle } from "react-icons/fc";
// import { useSignInMutation } from "../../redux/api/user-api";
// import { Link, useNavigate } from "react-router-dom";
// type FieldType = {
//   email?: string;
//   username?: string;
//   password?: string;
//   remember?: string;
// };

// const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
// const SingUp = () => {
//   const navigete = useNavigate();
//   const [sigInRequest, {}] = useSignInMutation();
//   const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
//     sigInRequest(values);
//     navigete("/");
//     console.log(values);
//   };
//   return (
//     <div className="grid grid-cols-2 w-full bg-[#000]">
//       <div className="container mx-auto pt-[180px]">
//         <div className="flex items-center  justify-center  mb-[36px]">
//           <img className="w-[30px] h-[30px]" src={img1} alt="" />
//           <p className="text-[28px] text-[#fff]">Snapgram</p>
//         </div>
//         <div className="w-[405px] h-[592px]  m-auto px-[25px]">
//           <p className="text-[30px] text-[#fff] font-[700] text-center">
//             Log in to your account
//           </p>
//           <p className="text-[16px] text-[#7878A3] font-[400] text-center mt-[12px]">
//             Welcome back! Please enter your details.
//           </p>
//           <Form
//             className="w-full text-white"
//             name="basic"
//             layout="vertical"
//             labelCol={{ span: 8, color: "white" }}
//             wrapperCol={{ span: 16 }}
//             style={{ maxWidth: 600, width: 530, color: "#fff" }}
//             initialValues={{ remember: false }}
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             autoComplete="off"
//           >
//             <Form.Item<FieldType>
//               label="Username"
//               className=" text-white "
//               name="username"
//               rules={[{ required: true, message: "Please input your email!" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item<FieldType>
//               label="Password"
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your password!" },
//               ]}
//             >
//               <Input.Password className="w-full " />
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 className="w-full text-whit"
//                 type="primary"
//                 htmlType="submit"
//               >
//                 Sign Up
//               </Button>
//             </Form.Item>
//           </Form>
//           <Button className="w-full text-[#1F1F22] font-[600    ]">
//             <FcGoogle className="text-[18px]" />
//             Sign up with Google
//           </Button>
//           <div className="flex items-center justify-center mt-2">
//             <p className="text-[#EFEFEF] text-[14px]">Don’t have an account?</p>
//             <Link to={"/singUp"}>
//               <p className="text-[#877EFF] text-[15px]">SingUp</p>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div>
//         <img src={img} alt="" />
//       </div>
//     </div>
//   );
// };

// export default SingUp;
