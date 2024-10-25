"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const FormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email.",
  }),
});

export function NewsletterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/postMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubscribed(true); 
        return toast.success("Success", {
          description: "Successfully subscribed",
        });
      } else {
        return toast.error("Something went wrong.", {
          description: "Failed to subscribe"
        });
      }
    } catch (error: any) {
      return toast.error("Something went wrong.", {
        description: "Failed to subscribe"
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-2 sm:max-w-sm"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className="rounded-full bg-gray-300 px-4"
                  placeholder="Fill your email"
                  {...field}
                  disabled={isSubscribed || isLoading} // Disable input when subscribed or loading
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="sm"
          rounded="full"
          className="px-4"
          disabled={isSubscribed || isLoading} // Disable button when subscribed or loading
        >
          {isSubscribed
            ? "Subscribed"
            : isLoading
            ? "Submitting..."
            : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
}
