import { createContext, useState } from "react";

interface User {
  data: {
    id: string;
    email: string;
  } | null;
  error: string | null;
  loading: boolean;
}

const UserContext = createContext([
  { data: null, loading: true, error: null },
  () => {},
]);
