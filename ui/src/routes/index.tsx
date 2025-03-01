import { type RouteDefinition, createAsync } from "@solidjs/router";
import { getUser, logout } from "~/lib";

export const route = {
  preload() { getUser(); }
} satisfies RouteDefinition;

export default function Home() {
  const user = createAsync(() => getUser(), { deferStream: true });
  
  return (
    <div class="main-container">
      <h2>Hello {user()?.username}</h2>
      
      <form action={logout} method="post">
        <button name="logout" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
}
