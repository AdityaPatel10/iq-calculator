import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadUserFromSession() {
      try {
        const res = await fetch("/api/auth/user");
        if (res.ok) {
          const userData: User = await res.json();
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to load user", error);
      } finally {
        setLoading(false);
      }
    }
    loadUserFromSession();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const userData: User = await res.json();
        setUser(userData);
        router.push("/");
        return { success: true };
      } else {
        const error = await res.text();
        return { success: false, error };
      }
    } catch (error) {
      console.error("Login failed", error);
      return { success: false, error: "Login failed" };
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return { user, loading, login, logout };
}
