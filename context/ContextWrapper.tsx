import { UserProvider } from "./contexts/UserContext";
import { User } from "@/domain/user";

export function ContextWrapper({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  // O Wrapper não calcula nada, ele só recebe e repassa
  return <UserProvider initialUser={user}>{children}</UserProvider>;
}
