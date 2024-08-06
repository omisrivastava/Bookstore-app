// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// const Login = () => {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             <Link
//               to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             >
//               ✕
//             </Link>
//           </form>
//           <h3 className="font-bold text-lg">Login!</h3>
//           <div className="mt-4 space-y-2">
//             <span>Email</span>
//             <br />
//             <input
//               type="email"
//               placeholder="Enter your Email "
//               className="w-80 px-3  py-1 border rounded-md outline-none"
//               {...register("email", { required: true })}
//             />
//           </div>
//           <div className="mt-4 space-y-2">
//             <span>Password</span>
//             <br />
//             <input
//               type="Password"
//               placeholder="Enter your Password "
//               className="w-80 px-3  py-1 border rounded-md outline-none"
//               {...register("password", { required: true })}
//             />
//           </div>
//           {/* button */}
//           <div className="flex justify-around mt-4">
//             <button className="bg-green-500 text-white px-3.5 py-2 hover:bg-green-300 rounded duration-200">
//               login
//             </button>
//             <p>
//               Not registered ?{" "}
//               <Link
//                 to="/signup"
//                 className="underline text-blue-500 cursor-pointer"
//               >
//                 Signup
//               </Link>
//             </p>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };
// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login!</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email "
                className="w-80 px-3  py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password "
                className="w-80 px-3  py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-3.5 py-2 hover:bg-green-300 rounded duration-200"
              >
                Login
              </button>
              <p>
                Not registered ?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
export default Login;
