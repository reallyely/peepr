import { signOut } from "@auth/solid-start/client";
import { createAsync, query, redirect } from "@solidjs/router";
import { Show, onMount } from "solid-js";
import { Card } from "~/components/card";

export default function Logout() {
  onMount(async () => {
    await signOut({ redirect: false });
    throw redirect("/login");
  }
  )

  return (
    <Card>Logging out</Card>
  );
}
