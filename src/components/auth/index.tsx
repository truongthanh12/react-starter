"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../../@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/ui/form";
import { Input } from "../../@/components/ui/input";
import { toast } from "../../components/ui/use-toast";
import { setAuth } from "../../state/features/authSlice";
import { useAppDispatch } from "../../state/hooks";
import { ToastAction } from "../../components/ui/toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const FormSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
});

export function AuthForm() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        dispatch(setAuth({ username }));
        toast({
          title: `You logged as ${username}`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Username or Password is not matching.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
      setLoading(false);
    }, 750);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <h1 className="text-2xl font-bold text-white">{t("auth:title")}</h1>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("auth:username")}: admin</FormLabel>
              <FormControl>
                <Input placeholder="username..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("auth:password")}: admin</FormLabel>
              <FormControl>
                <Input placeholder="password..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} variant="outline" type="submit">
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t("auth:submit")}
        </Button>
      </form>
    </Form>
  );
}
