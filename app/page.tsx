"use client";
import { useEffect } from "react";
import { useUserContext } from "./_context/user";
import { useRouter } from "next/navigation";

export default function Home() {
  const { authUser }:any = useUserContext();

  const router = useRouter();
  useEffect(() => {
    if (authUser === null) {
      router.push("/signin");
    }
  }, []);
  return <div>{JSON.stringify(authUser)}</div>;
}
