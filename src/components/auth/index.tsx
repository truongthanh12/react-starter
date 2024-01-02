"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { setAuth } from "@/state/features/authSlice";
import { useAppDispatch } from "@/state/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
});

export function AuthForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const { username, password } = data || {};
    console.log(username, password);
    setLoading(true);
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        dispatch(setAuth({ username }));
      } else {
      }
      setLoading(false);
    }, 750);
  };

  return (
    <article>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <h1 className="text-2xl font-bold text-white">{t("auth:title")}</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("auth:username")}: admin
          </label>
          <div className="mt-1">
            <Input
              id="username"
              autoFocus
              type="text"
              placeholder="username..."
              {...form.register("username")}
            />
          </div>
          {form.formState.errors.username && (
            <p className="mt-2 text-sm text-red-600">
              {form.formState.errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("auth:password")}: admin
          </label>
          <div className="mt-1">
            <Input
              id="password"
              type="password"
              placeholder="password..."
              {...form.register("password")}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {form.formState.errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={loading} variant="outline">
          {loading && (
            <div className="mr-2 h-4 w-4 animate-spin">Loading..</div>
          )}
          {t("auth:submit")}
        </Button>
      </form>
    </article>
  );
}
