import { Button, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/api/user-api";
import { useEffect } from "react";
import img from "../../assets/sinp.png"; // or your correct image path

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


// import { Button, Form, Input } from "antd";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";
// import { useRegisterUserMutation } from "../../redux/api/user-api";
// import { useEffect } from "react";
// import img from "../../assets/sinp.png";

// type FieldType = {
//   full_name?: string;
//   email?: string;
//   username?: string;
//   password?: string;
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [signUpRequest, { data, isSuccess }] = useRegisterUserMutation();

//   const onFinish = (values) => {
//     signUpRequest(values);
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       navigate(`/login`);
//       console.log(data);
//       localStorage.setItem("token", data.accessToken);
//     }
//   }, [isSuccess]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-black">
//       {/* Left Side - Form Section */}
//       <div className="flex justify-center items-center p-8">
//         <div className="max-w-md w-full space-y-8">
//           <h2 className="text-center text-3xl font-extrabold text-white">
//             Create a new account
//           </h2>
//           <p className="text-center text-gray-400 text-base">
//             To use Snapgram, Please enter your details.
//           </p>
//           <Form
//             className="mt-8 space-y-6"
//             name="basic"
//             layout="vertical"
//             initialValues={{ remember: false }}
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             autoComplete="off"
//           >
//             <Form.Item
//               label="Name"
//               name="full_name"
//               rules={[{ required: true, message: "Please input your name!" }]}
//             >
//               <Input className="rounded-md px-3 py-2 w-full bg-gray-900 text-white" />
//             </Form.Item>

//             <Form.Item
//               label="Username"
//               name="username"
//               rules={[{ required: true, message: "Please input your username!" }]}
//             >
//               <Input className="rounded-md px-3 py-2 w-full bg-gray-900 text-white" />
//             </Form.Item>

//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[{ required: true, message: "Please input your email!" }]}
//             >
//               <Input className="rounded-md px-3 py-2 w-full bg-gray-900 text-white" />
//             </Form.Item>

//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[{ required: true, message: "Please input your password!" }]}
//             >
//               <Input.Password className="rounded-md px-3 py-2 w-full bg-gray-900 text-white" />
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 className="w-full py-3 bg-purple-600 text-white rounded-md font-semibold"
//                 type="primary"
//                 htmlType="submit"
//               >
//                 Sign Up
//               </Button>
//             </Form.Item>
//           </Form>

//           <Button className="w-full flex items-center justify-center bg-white py-3 rounded-md text-gray-900 font-semibold">
//             <FcGoogle className="text-2xl mr-2" />
//             Sign up with Google
//           </Button>

//           <div className="text-center mt-4">
//             <p className="text-white text-sm">
//               Don’t have an account?{" "}
//               <Link to="/login" className="text-purple-400">
//                 Log in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image Section */}
//       <div className="hidden md:block">
//         <img
//           src={img}
//           alt="Sign Up Background"
//           className="object-cover h-full w-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default SignUp;


// // import img from "../../assets/sinp.png";
// // import type { FormProps } from "antd";
// // import { Button, Form, Input } from "antd";
// // import { FcGoogle } from "react-icons/fc";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useRegisterUserMutation } from "../../redux/api/user-api";
// // import { useEffect } from "react";

// // type FieldType = {
// //   full_name?: string;
// //   email?: string;
// //   username?: string;
// //   password?: string;
// //   remember?: string;
// // };

// // const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
// //   console.log("Failed:", errorInfo);
// // };
// // const SingUp = () => {
// //   const navigete = useNavigate();
// //   const [signUpRequest, { data, isSuccess }] = useRegisterUserMutation();

// //   const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
// //     signUpRequest(values);
// //   };
// //   useEffect(() => {
// //     if (isSuccess) {
// //       navigete(`/login`);
// //       console.log(data);
// //       localStorage.setItem("token", data.accessToken);
// //     }
// //   }, [isSuccess]);

// //   return (
// //     <div className="grid grid-cols-2 w-full bg-[#000]">
// //       <div className="container mx-auto">
// //         <div className="w-[405px] h-[592px]  mt-[216px] m-auto px-[25px]">
// //           <p className="text-[30px] text-[#fff] font-[700] text-center">
// //             Create a new account
// //           </p>
// //           <p className="text-[16px] text-[#7878A3] font-[400] text-center mt-[12px]">
// //             To use snapgram, Please enter your details.
// //           </p>
// //           <Form
// //             className="w-full text-white"
// //             name="basic"
// //             layout="vertical"
// //             labelCol={{ span: 8, color: "white" }}
// //             wrapperCol={{ span: 16 }}
// //             style={{ maxWidth: 600, width: 530, color: "white" }}
// //             initialValues={{ remember: false }}
// //             onFinish={onFinish}
// //             onFinishFailed={onFinishFailed}
// //             autoComplete="off"
// //           >
// //             <Form.Item<FieldType>
// //               label="Name"
// //               name="full_name"
// //               rules={[{ required: true, message: "Please input your name!" }]}
// //             >
// //               <Input className="w-full" />
// //             </Form.Item>
// //             <Form.Item<FieldType>
// //               label="Username"
// //               name="username"
// //               rules={[
// //                 { required: true, message: "Please input your username!" },
// //               ]}
// //             >
// //               <Input className="w-full" />
// //             </Form.Item>
// //             <Form.Item<FieldType>
// //               label="Email"
// //               className=" text-white "
// //               name="email"
// //               rules={[{ required: true, message: "Please input your email!" }]}
// //             >
// //               <Input />
// //             </Form.Item>
// //             <Form.Item<FieldType>
// //               label="Password"
// //               name="password"
// //               rules={[
// //                 { required: true, message: "Please input your password!" },
// //               ]}
// //             >
// //               <Input.Password className="w-full " />
// //             </Form.Item>

// //             <Form.Item>
// //               <Button
// //                 className="w-full text-whit"
// //                 type="primary"
// //                 htmlType="submit"
// //               >
// //                 Sign Up
// //               </Button>
// //             </Form.Item>
// //           </Form>
// //           <Button className="w-full text-[#1F1F22] font-[600    ]">
// //             <FcGoogle className="text-[18px]" />
// //             Sign up with Google
// //           </Button>
// //           <div className="flex items-center justify-center mt-2">
// //             <p className="text-[#EFEFEF] text-[14px]">Don’t have an account?</p>
// //             <Link to={"/login"}>
// //               <p className="text-[#877EFF] text-[15px]">Log in</p>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //       <div>
// //         <img src={img} alt="" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default SingUp;
