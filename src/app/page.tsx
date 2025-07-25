"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password
    },{
      onError : () => {
        window.alert("Something went wrong")
      },
      onSuccess : () => {
        window.alert("SignUp Success")
      }
    })
  }

  return (
    <div className = "p-4 w-full flex flex-col gap-3">
      <Input
        placeholder = "name"
        value = {name}
        onChange = {(e) => setName(e.target.value)}
      />
      <Input
        placeholder = "email"
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder = "password"
        value = {password}
        onChange = {(e) => setPassword(e.target.value)}
      />
      <Button
        onClick = {onSubmit}
      >
        Create User
      </Button>
    </div>
  );
}
