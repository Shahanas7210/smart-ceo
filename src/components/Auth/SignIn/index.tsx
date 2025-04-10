"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo"
import Loader from "@/components/Common/Loader";
import { div } from "framer-motion/client";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    phoneNumber:"",
    message:""
  });
  const [loading, setLoading] = useState(false);

  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);
    signIn("credentials", { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          console.log(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          setLoading(false);
          router.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block">
        <Logo />
      </div>

     

      <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setLoginData({ ...loginData, name: e.target.value })
            }
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition light:placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition light:placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="number"
            placeholder="Phone number"
            onChange={(e) =>
              setLoginData({ ...loginData, phoneNumber: e.target.value })
            }
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition light:placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <textarea
            
            placeholder="Message"
            onChange={(e) =>
              setLoginData({ ...loginData, message: e.target.value })
            }
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition light:placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="bg-primary w-full text-white  py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent"
          >
            Submit {loading && <Loader />}
          </button>
        </div>
      </form>

    
    </>
  );
};

export default Signin;